import Breadcrumb from "@/components/common/Breadcrumb";
import CTAWhatsApp from "@/components/common/CTAWhatsApp";
import CoursesHero from "@/components/courses/CoursesHero";
import CoursesContent from "@/components/courses/CoursesContent";
import { FilterGroup } from "@/components/filters/CourseFilterClient";
import { getMedia, getPosts, getTaxonomyTerms } from "@/lib/wordpress/client";
import { getPageScf, isEnabled } from "@/lib/wordpress/content";
import { WPImage, WPPost } from "@/lib/wordpress/types";

interface FormattedCourse {
  id: number;
  title: string;
  slug: string;
  imageUrl?: string;
  date?: string; 
  
  area_interesse: string[];
  duracao_curso: string[];
  tempo_acesso: string[];
}

interface CategoryGroup {
  category: string;
  categorySlug?: string;
  categoryIconUrl?: string; 
  courses: FormattedCourse[];
}

const FILTER_TAXONOMIES = [
  { 
    taxonomy: "area_interesse", 
    label: "Área de interesse",
    placeholder: "Escolher uma área"
  },
  { 
    taxonomy: "duracao_curso", 
    label: "Duração",
    placeholder: "Escolher uma duração"
  },
  { 
    taxonomy: "tempo_acesso", 
    label: "Tempo de acesso",
    placeholder: "Escolher um tempo"
  },
];

async function getFilters(): Promise<FilterGroup[]> {
  const filters: FilterGroup[] = [];

  for (const entry of FILTER_TAXONOMIES) {
    const terms = await getTaxonomyTerms(entry.taxonomy);
    filters.push({ 
      taxonomy: entry.taxonomy, 
      label: entry.label, 
      placeholder: entry.placeholder,
      options: terms.map((term) => ({
        id: term.id,
        slug: term.slug,
        name: term.name,
      }))
    });
  }

  if (filters.every((f) => f.options.length === 0)) {
    return [
      {
        taxonomy: "area_interesse",
        label: "Área de interesse",
        placeholder: "Escolher uma área",
        options: [
          { id: 1, slug: "autismo", name: "Autismo" },
          { id: 2, slug: "educacao-e-neurociencia", name: "Educação e Neurociência" },
          { id: 3, slug: "neurodivergencias", name: "Neurodivergências" },
        ]
      },
      {
        taxonomy: "duracao_curso",
        label: "Duração",
        placeholder: "Escolher uma duração",
        options: [
          { id: 1, slug: "6-meses", name: "6 meses" },
          { id: 2, slug: "12-meses", name: "12 meses" },
          { id: 3, slug: "24-meses", name: "24 meses" },
        ]
      },
      {
        taxonomy: "tempo_acesso",
        label: "Tempo de acesso",
        placeholder: "Escolher um tempo",
        options: [
          { id: 1, slug: "12-meses", name: "12 meses" },
          { id: 2, slug: "24-meses", name: "24 meses" },
          { id: 3, slug: "30-meses", name: "30 meses" },
        ]
      }
    ];
  }

  return filters;
}

function extractTaxonomySlugs(
  post: WPPost, 
  taxonomyTermsMap: Map<string, Map<number, string>>
): { area_interesse: string[]; duracao_curso: string[]; tempo_acesso: string[] } {
  const result = {
    area_interesse: [] as string[],
    duracao_curso: [] as string[],
    tempo_acesso: [] as string[],
  };

  const embedded = (post as unknown as { _embedded?: { 'wp:term'?: Array<Array<{ taxonomy: string; slug: string }>> } })._embedded;
  
  if (embedded?.['wp:term']) {
    
    for (const termGroup of embedded['wp:term']) {
      if (!Array.isArray(termGroup)) continue;
      for (const term of termGroup) {
        if (term.taxonomy === 'area_interesse') {
          result.area_interesse.push(term.slug);
        } else if (term.taxonomy === 'duracao_curso') {
          result.duracao_curso.push(term.slug);
        } else if (term.taxonomy === 'tempo_acesso') {
          result.tempo_acesso.push(term.slug);
        }
      }
    }
  } else {
    
    const postData = post as unknown as Record<string, number[]>;
    
    for (const [taxonomy, slugMap] of taxonomyTermsMap.entries()) {
      const termIds = postData[taxonomy];
      if (Array.isArray(termIds)) {
        const slugs = termIds
          .map(id => slugMap.get(id))
          .filter((slug): slug is string => !!slug);
        
        if (taxonomy === 'area_interesse') result.area_interesse = slugs;
        if (taxonomy === 'duracao_curso') result.duracao_curso = slugs;
        if (taxonomy === 'tempo_acesso') result.tempo_acesso = slugs;
      }
    }
  }

  return result;
}

async function getCoursesByCategory(): Promise<CategoryGroup[]> {
  const categories = await getTaxonomyTerms("categoria_curso");
  const grouped: CategoryGroup[] = [];

  const taxonomyTermsMap = new Map<string, Map<number, string>>();
  for (const entry of FILTER_TAXONOMIES) {
    const terms = await getTaxonomyTerms(entry.taxonomy);
    const idToSlug = new Map<number, string>();
    for (const term of terms) {
      idToSlug.set(term.id, term.slug);
    }
    taxonomyTermsMap.set(entry.taxonomy, idToSlug);
  }

  for (const category of categories) {
    
    const { data } = await getPosts("cursos", { 
      "categoria_curso": category.slug, 
      per_page: 50,
      _embed: true 
    });
    
    const images: Record<number, WPImage | null> = {};
    
    for (const course of data) {
      if (course.featured_media) {
        images[course.featured_media] = await getMedia(course.featured_media);
      }
    }

    const formattedCourses: FormattedCourse[] = data.map((course) => {
      const taxonomySlugs = extractTaxonomySlugs(course, taxonomyTermsMap);
      
      return {
        id: course.id,
        title: course.title.rendered.replace(/<[^>]*>/g, ""),
        slug: course.slug,
        imageUrl: images[course.featured_media || 0]?.source_url || "/cursoCat01.png",
        date: course.date, 
        ...taxonomySlugs,
      };
    });

    grouped.push({ 
      category: category.name, 
      categorySlug: category.slug,
      categoryIconUrl: category.icon_url, 
      courses: formattedCourses 
    });
  }

  if (grouped.length === 0) {
    const fallbackCourses: FormattedCourse[] = [
      { 
        id: 1, 
        title: "Intervenção ABA para Autismo e Deficiência Intelectual", 
        slug: "intervencao-aba-1", 
        imageUrl: "/cursoCat01.png",
        date: "2024-12-15T10:00:00",
        area_interesse: ["autismo"],
        duracao_curso: ["24-meses"],
        tempo_acesso: ["30-meses"],
      },
      { 
        id: 2, 
        title: "Neurociência Aplicada à Educação", 
        slug: "neurociencia-educacao", 
        imageUrl: "/cursoCat01.png",
        date: "2024-11-20T10:00:00",
        area_interesse: ["educacao-e-neurociencia"],
        duracao_curso: ["12-meses"],
        tempo_acesso: ["24-meses"],
      },
      { 
        id: 3, 
        title: "Psicopedagogia Clínica e Institucional", 
        slug: "psicopedagogia", 
        imageUrl: "/cursoCat01.png",
        date: "2024-10-10T10:00:00",
        area_interesse: ["neurodivergencias"],
        duracao_curso: ["24-meses"],
        tempo_acesso: ["30-meses"],
      },
      { 
        id: 4, 
        title: "TDAH e Transtornos de Aprendizagem", 
        slug: "tdah-transtornos", 
        imageUrl: "/cursoCat01.png",
        date: "2024-09-05T10:00:00",
        area_interesse: ["neurodivergencias"],
        duracao_curso: ["6-meses"],
        tempo_acesso: ["12-meses"],
      },
    ];

    grouped.push(
      { category: "Autismo", categorySlug: "autismo", courses: [fallbackCourses[0]] },
      { category: "Educação e Neurociência", categorySlug: "educacao-neurociencia", courses: [fallbackCourses[1]] },
      { category: "Neurodivergências", categorySlug: "neurodivergencias", courses: [fallbackCourses[2], fallbackCourses[3]] }
    );
  }

  return grouped;
}

export default async function CoursesPage() {
  const scf = await getPageScf("cursos");
  const [grouped, filters] = await Promise.all([
    getCoursesByCategory(),
    getFilters()
  ]);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Nossos cursos", href: "/cursos" },
    { label: scf?.page_title || "Pós graduação Latu Sensu" },
  ];

  return (
    <>
      {}
      <Breadcrumb items={breadcrumbItems} />

      {}
      <CoursesHero
        title={scf?.hero_title || "Pós Graduação"}
        titleHighlight={scf?.hero_title_highlight || "Lato Sensu"}
        description={scf?.hero_description || "Todas as pós-graduações são online e os cursos são lecionados pelos principais profissionais de cada assunto, trazendo aulas em formato de vídeo, textos explicativos e bate-papo com o especialista em formato de hang-out."}
        certificationText={scf?.certification_text || "Cursos com Certificação Internacional CBI"}
      />

      {}
      <section className="section">
        <div className="container">
          <CoursesContent
            groups={grouped}
            filters={filters}
            searchPlaceholder={scf?.search_placeholder || "Busque pelo curso"}
          />
        </div>
      </section>

      {}
      <CTAWhatsApp
        variant={scf?.cta_variant || "simple"}
        
        subtitleText={scf?.cta_subtitle || "Precisa de mais informações?"}
        mainText={scf?.cta_main_text || "Entrar em Contato"}
        
        title={scf?.cta_title || "Ainda precisa de "}
        titleBold={scf?.cta_title_bold || "alguma ajuda?"}
        description={scf?.cta_description || "Identifique hoje mesmo o melhor curso para seu momento profissional. Basta clicar no botão para falar diretamente com nossos consultores de carreira."}
        
        buttonLabel={scf?.cta_button_label || "Fale Conosco"}
        buttonHref={scf?.cta_button_href || "https://wa.me/5511999999999"}
        enabled={isEnabled(scf?.cta_enabled)}
      />
    </>
  );
}
