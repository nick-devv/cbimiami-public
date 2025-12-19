import { WPPost } from "./types";
import { getPosts } from "./client";

export type SCF = Record<string, any> | undefined;

async function fetchOptions(): Promise<SCF> {
  const base = process.env.NEXT_PUBLIC_WORDPRESS_URL;
  if (!base) return undefined;
  try {
    const root = base.endsWith("/") ? base : `${base}/`;
    const url = new URL("wp-json/cbi/v1/options", root);
    const res = await fetch(url.toString(), { next: { revalidate: 60 } });
    if (!res.ok) return undefined;
    const data = await res.json();
    if (data && typeof data === "object") return data as SCF;
    return undefined;
  } catch {
    return undefined;
  }
}

export async function getPageBySlug(slug: string): Promise<WPPost | null> {
  try {
    const { data } = await getPosts("pages", { slug, per_page: 1, _embed: true });
    return data[0] ?? null;
  } catch (error) {
    console.error(`Erro ao buscar página com slug "${slug}":`, error);
    return null;
  }
}

export async function getPageScf(slug: string): Promise<SCF> {
  try {
    const page = await getPageBySlug(slug);
    if (!page) return undefined;
    const scf = (page as any)?.scf_fields || (page as any)?.meta?.scf_fields;
    return scf || undefined;
  } catch (error) {
    console.error(`Erro ao buscar SCF da página "${slug}":`, error);
    return undefined;
  }
}

export async function getGlobalScf(): Promise<SCF> {
  const opts = await fetchOptions();
  if (opts && Object.keys(opts).length) return opts;
  return getPageScf("site-config");
}

export const isEnabled = (value: any) => value !== false;

