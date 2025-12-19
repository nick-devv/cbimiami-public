import FilterComponent, { FilterGroup } from "./FilterComponent";
import { getTaxonomyTerms } from "@/lib/wordpress/client";

const ARTICLE_TAXONOMIES = [
  { taxonomy: "categories", label: "Categoria" },
  { taxonomy: "post_tag", label: "Tags" },
];

export async function ArticleFilter() {
  const filters: FilterGroup[] = [];

  for (const entry of ARTICLE_TAXONOMIES) {
    const terms = await getTaxonomyTerms(entry.taxonomy);
    filters.push({ ...entry, terms });
  }

  return <FilterComponent filters={filters} />;
}

export default ArticleFilter;

