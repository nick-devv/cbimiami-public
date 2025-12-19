import CourseCard, { CourseType } from "@/components/common/CourseCard";
import { WPPost, WPImage } from "@/lib/wordpress/types";

interface CoursesCategorySectionProps {
  categoryName: string;
  categorySlug?: string;
  categoryIconUrl?: string;
  courses: WPPost[];
  images: Record<number, WPImage | null>;
}

function getCourseTypeFromSlug(slug?: string): CourseType {
  if (!slug) return "pos-graduacao";
  
  const normalizedSlug = slug.toLowerCase();
  
  if (normalizedSlug.includes("pos-graduacao") || normalizedSlug.includes("pos-graduação")) {
    return "pos-graduacao";
  }
  if (normalizedSlug.includes("extensao") || normalizedSlug.includes("extensão")) {
    return "extensao";
  }
  if (normalizedSlug.includes("profissionalizante")) {
    return "profissionalizante";
  }
  
  return "pos-graduacao";
}

export function CoursesCategorySection({
  categoryName,
  categorySlug,
  categoryIconUrl,
  courses,
  images,
}: CoursesCategorySectionProps) {
  
  const fallbackCourses = [
    { id: 1, title: { rendered: "Intervenção ABA para Autismo e Deficiência Intelectual" }, slug: "intervencao-aba-1" },
    { id: 2, title: { rendered: "Intervenção ABA para Autismo e Deficiência Intelectual" }, slug: "intervencao-aba-2" },
    { id: 3, title: { rendered: "Intervenção ABA para Autismo e Deficiência Intelectual" }, slug: "intervencao-aba-3" },
    { id: 4, title: { rendered: "Intervenção ABA para Autismo e Deficiência Intelectual" }, slug: "intervencao-aba-4" },
  ];

  const displayCourses = courses.length > 0 ? courses : fallbackCourses;
  const courseType = getCourseTypeFromSlug(categorySlug);

  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-3xl font-semibold text-primary-dark">{categoryName}</h3>
      <div className="flex flex-wrap gap-6">
        {displayCourses.map((course) => {
          const image = images[(course as unknown as { featured_media: number }).featured_media || 0];
          return (
            <CourseCard
              key={course.id}
              title={course.title.rendered.replace(/<[^>]*>/g, "")}
              imageUrl={image?.source_url || "/cursoCat01.png"}
              type={courseType}
              typeIconUrl={categoryIconUrl}
              href={`/curso/${course.slug}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CoursesCategorySection;
