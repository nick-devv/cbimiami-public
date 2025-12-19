import Breadcrumb from "@/components/common/Breadcrumb";
import CourseDetailHero from "@/components/courses/CourseDetailHero";
import CourseHowItWorks from "@/components/courses/CourseHowItWorks";
import CourseWhyChoose from "@/components/courses/CourseWhyChoose";
import CourseTargetAudience from "@/components/courses/CourseTargetAudience";
import CourseProgram from "@/components/courses/CourseProgram";
import CoursePrerequisites from "@/components/courses/CoursePrerequisites";
import CourseCoordinators from "@/components/courses/CourseCoordinators";
import CourseCertifications from "@/components/courses/CourseCertifications";
import CourseTestimonials from "@/components/courses/CourseTestimonials";
import CoursePartners from "@/components/courses/CoursePartners";
import CourseAchievement from "@/components/courses/CourseAchievement";
import CourseFAQ from "@/components/courses/CourseFAQ";
import CourseRecommended from "@/components/courses/CourseRecommended";
import { getMedia, getPostBySlug, getPosts } from "@/lib/wordpress/client";
import { getPageScf, isEnabled } from "@/lib/wordpress/content";
import { notFound } from "next/navigation";

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = await getPostBySlug("cursos", slug);
  if (!course) return notFound();

  const image = course.featured_media ? await getMedia(course.featured_media) : null;

  const scf = await getPageScf("curso");

  const breadcrumbItems = [
    { label: "Início", href: "/" },
    { label: "Cursos", href: "/cursos" },
    { label: course.title.rendered, href: "#", current: true },
  ];

  return (
    <>
      {}
      <div className="container pt-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {}
      <CourseDetailHero
        title={course.title.rendered}
        subtitle={course.excerpt?.rendered?.replace(/<[^>]+>/g, "")}
        coordinatorImage={image?.source_url}
      />

      {}
      <CourseHowItWorks
        enabled={isEnabled(scf, "how_it_works_enabled", true)}
      />

      {}
      <CourseWhyChoose
        enabled={isEnabled(scf, "why_choose_enabled", true)}
        imageUrl="/porqueescolher.png"
      />

      {}
      <CourseTargetAudience
        enabled={isEnabled(scf, "target_audience_enabled", true)}
      />

      {}
      <CourseProgram
        enabled={isEnabled(scf, "program_enabled", true)}
      />

      {}
      <CourseCoordinators
        enabled={isEnabled(scf, "coordinators_enabled", true)}
      />

      {}
      <CourseCertifications
        title={course.title.rendered.replace(/<[^>]+>/g, "")}
        enabled={isEnabled(scf, "certifications_enabled", true)}
      />

      {}
      <CourseTestimonials
        enabled={isEnabled(scf, "testimonials_enabled", true)}
      />

      {}
      <CoursePartners
        title={scf?.partners_title}
        videoUrl={scf?.partners_video_url}
        videoEmbed={scf?.partners_video_embed}
        videoThumbnail={scf?.partners_video_thumbnail}
        enabled={isEnabled(scf, "partners_enabled", true)}
      />

      {}
      <CourseAchievement
        title={scf?.achievement_title}
        description={scf?.achievement_description}
        logoImage={scf?.achievement_logo}
        videoUrl={scf?.achievement_video_url}
        videoEmbed={scf?.achievement_video_embed}
        videoThumbnail={scf?.achievement_video_thumbnail}
        enabled={isEnabled(scf, "achievement_enabled", true)}
      />

      {}
      <CoursePrerequisites
        enabled={isEnabled(scf, "prerequisites_enabled", true)}
      />

      {}
      <CourseFAQ
        enabled={isEnabled(scf, "faq_enabled", true)}
      />

      {}
      <CourseRecommended
        title={scf?.recommended_title || "Cursos Recomendados"}
        enabled={isEnabled(scf, "recommended_enabled", true)}
      />
    </>
  );
}
