import FilterComponent, { FilterGroup } from "./FilterComponent";
import { getTaxonomyTerms } from "@/lib/wordpress/client";

const COURSE_TAXONOMIES = [
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

export async function CourseFilter() {
  const filters: FilterGroup[] = [];

  for (const entry of COURSE_TAXONOMIES) {
    const terms = await getTaxonomyTerms(entry.taxonomy);
    filters.push({ 
      taxonomy: entry.taxonomy, 
      label: entry.label, 
      placeholder: entry.placeholder,
      terms 
    });
  }

  return <FilterComponent filters={filters} />;
}

export default CourseFilter;
