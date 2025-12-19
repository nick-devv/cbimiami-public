import { WordPressCollectionResponse, WPImage, WPMenuItem, WPPost, WPTerm } from "./types";

type FetchParams = Record<string, string | number | boolean | undefined>;

const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL;

const defaultRevalidate = 60;

function ensureBaseUrl() {
  if (!WORDPRESS_URL) {
    throw new Error("Missing NEXT_PUBLIC_WORDPRESS_URL");
  }
  return WORDPRESS_URL.endsWith("/") ? WORDPRESS_URL : `${WORDPRESS_URL}/`;
}

function buildUrl(path: string, params?: FetchParams) {
  const base = ensureBaseUrl();
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const url = new URL(cleanPath, base);
  Object.entries(params || {}).forEach(([key, value]) => {
    if (value === undefined) return;
    url.searchParams.append(key, String(value));
  });
  return url.toString();
}

async function fetchJson<T>(
  path: string,
  {
    params,
    revalidate = defaultRevalidate,
  }: {
    params?: FetchParams;
    revalidate?: number;
  } = {},
): Promise<T> {
  const url = buildUrl(path, params);
  
  let response: Response;
  try {
    response = await fetch(url, {
      next: { revalidate },
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(
      `Falha ao conectar com WordPress: ${errorMessage}. ` +
      `URL: ${url}. ` +
      `Verifique se NEXT_PUBLIC_WORDPRESS_URL está configurado corretamente e se o servidor WordPress está acessível.`
    );
  }

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`WordPress request failed (${response.status}): ${message}`);
  }

  return (await response.json()) as T;
}

async function fetchCollection<T extends WPPost>(
  postType: string,
  params?: FetchParams,
): Promise<WordPressCollectionResponse<T>> {
  try {
    const data = await fetchJson<T[]>(`/wp-json/wp/v2/${postType}`, params);
    return { data };
  } catch (error) {
    
    console.error(`Erro ao buscar coleção ${postType}:`, error);
    return { data: [] };
  }
}

export async function getPosts(
  postType: string,
  params?: FetchParams,
): Promise<WordPressCollectionResponse<WPPost>> {
  return fetchCollection<WPPost>(postType, params);
}

export async function getPostBySlug(
  postType: string,
  slug: string,
): Promise<WPPost | null> {
  try {
    const { data } = await fetchCollection<WPPost>(postType, { slug, per_page: 1, _embed: true });
    return data[0] ?? null;
  } catch (error) {
    console.error(`Erro ao buscar post com slug "${slug}" do tipo "${postType}":`, error);
    return null;
  }
}

export async function getMedia(id: number): Promise<WPImage | null> {
  if (!id) return null;
  try {
    return await fetchJson<WPImage>(`/wp-json/wp/v2/media/${id}`, { revalidate: 600 });
  } catch (error) {
    console.error("Failed to fetch media", error);
    return null;
  }
}

function getDefaultMenu(location: "header_menu" | "footer_menu" | "footer_legal_menu"): WPMenuItem[] {
  switch (location) {
    case "header_menu":
      return [
        {
          id: 2,
          title: { rendered: "Cursos" },
          url: "/cursos",
          children: [
            { id: 31, title: { rendered: "Pós Graduação" }, url: "/categoria-curso/pos-graduacao" },
            { id: 32, title: { rendered: "Cursos Profissionalizantes" }, url: "/categoria-curso/cursos-profissionalizantes" },
            { id: 33, title: { rendered: "Cursos de extensão" }, url: "/categoria-curso/cursos-de-extensao" },
          ],
        },
        { id: 3, title: { rendered: "Artigos" }, url: "/artigos" },
        { id: 4, title: { rendered: "Sobre" }, url: "/sobre" },
        { id: 5, title: { rendered: "Contato" }, url: "/contato" },
      ];
    case "footer_menu":
      return [
        { id: 10, title: { rendered: "Cursos" }, url: "/cursos" },
        { id: 11, title: { rendered: "Artigos" }, url: "/artigos" },
        { id: 12, title: { rendered: "Sobre" }, url: "/sobre" },
        { id: 13, title: { rendered: "Contato" }, url: "/contato" },
      ];
    case "footer_legal_menu":
      return [
        { id: 20, title: { rendered: "Política de Privacidade" }, url: "/politica-privacidade" },
        { id: 21, title: { rendered: "Termos de Uso" }, url: "/politica-privacidade#terms" },
      ];
    default:
      return [];
  }
}

export async function getMenu(location: "header_menu" | "footer_menu" | "footer_legal_menu"): Promise<WPMenuItem[]> {
  try {
    
    const custom = await fetchJson<WPMenuItem[]>(`/wp-json/cbi/v1/menus/${location}`);
    if (custom?.length) return custom;

    const items = await fetchJson<WPMenuItem[]>(`/wp-json/wp/v2/menu-items`, {
      menu_location: location,
      per_page: 100,
    });
    if (items?.length) return nestMenu(items);

    return getDefaultMenu(location);
  } catch (error) {
    
    return getDefaultMenu(location);
  }
}

function nestMenu(items: WPMenuItem[]): WPMenuItem[] {
  const map = new Map<number, WPMenuItem>();
  items.forEach((item) => map.set(item.id, { ...item, children: [] }));

  const roots: WPMenuItem[] = [];
  map.forEach((item) => {
    if (item.parent && map.has(item.parent)) {
      map.get(item.parent)!.children!.push(item);
    } else {
      roots.push(item);
    }
  });
  return roots;
}

function getDefaultCourseCategories(): WPTerm[] {
  return [
    {
      id: 1,
      slug: "pos-graduacao",
      name: "Pós Graduação",
      taxonomy: "categoria_curso",
      description: "Cursos de pós-graduação",
      category_image: "/cursoCat01.png",
    },
    {
      id: 2,
      slug: "cursos-profissionalizantes",
      name: "Cursos Profissionalizantes",
      taxonomy: "categoria_curso",
      description: "Cursos profissionalizantes",
      category_image: "/cursoCat02.png",
    },
    {
      id: 3,
      slug: "cursos-de-extensao",
      name: "Cursos de extensão",
      taxonomy: "categoria_curso",
      description: "Cursos de extensão",
      category_image: "/cursoCat03.png",
    },
  ];
}

export async function getTaxonomyTerms(taxonomy: string): Promise<WPTerm[]> {
  try {
    const terms = await fetchJson<WPTerm[]>(`/wp-json/wp/v2/${taxonomy}`, { per_page: 100 });

    if (taxonomy === "categoria_curso" && (!terms || terms.length === 0)) {
      return getDefaultCourseCategories();
    }
    
    return terms;
  } catch (error) {
    
    if (taxonomy === "categoria_curso") {
      return getDefaultCourseCategories();
    }

    return [];
  }
}

export async function getSiteSettings() {
  try {
    return await fetchJson<Record<string, unknown>>(`/wp-json`);
  } catch {
    return {};
  }
}

