import FeatureCards from "@/components/common/FeatureCards";
import { getMedia, getPosts } from "@/lib/wordpress/client";
import { WPImage } from "@/lib/wordpress/types";

interface FeaturedCoursesProps {
  title?: string;
  enabled?: boolean;
}

async function loadCourses() {
  const { data } = await getPosts("cursos", { per_page: 3, _embed: true });
  const images: Record<number, WPImage | null> = {};

  const unique: typeof data = [];
  const seen = new Set<number>();
  for (const course of data) {
    if (seen.has(course.id)) continue;
    seen.add(course.id);
    unique.push(course);
    if (unique.length >= 3) break;
  }

  for (const course of unique) {
    if (course.featured_media) {
      images[course.featured_media] = await getMedia(course.featured_media);
    }
  }

  return { data: unique, images };
}

export async function FeaturedCourses({ title = "Cursos mais vistos", enabled = true }: FeaturedCoursesProps) {
  if (!enabled) return null;
  const { data: courses } = await loadCourses();

  const displayCourses = courses.length > 0 
    ? courses 
    : [
        { id: 1, title: { rendered: 'Intervenção ABA para Autismo e Deficiência Intelectual' }, slug: 'intervencao-aba-1' },
        { id: 2, title: { rendered: 'Intervenção ABA para Autismo e Deficiência Intelectual' }, slug: 'intervencao-aba-2' },
        { id: 3, title: { rendered: 'Intervenção ABA para Autismo e Deficiência Intelectual' }, slug: 'intervencao-aba-3' },
      ];

  const featureItems = displayCourses.map((course) => ({
    title: course.title.rendered.replace(/<[^>]*>/g, ""),
    link: {
      label: "Saber mais",
      href: `/curso/${course.slug}`,
    },
  }));

  return (
    <FeatureCards
      title={title}
      items={featureItems}
      layout="horizontal"
      variant="compact"
      enabled={enabled}
    />
  );
}

export default FeaturedCourses;
