"use client";

import Link from "next/link";
import Image from "next/image";

interface RecommendedCourse {
  id: number;
  title: string;
  slug: string;
  imageUrl?: string;
  type?: "pos-graduacao" | "extensao" | "profissionalizante";
  typeLabel?: string;
  typeIconUrl?: string;
}

interface CourseRecommendedProps {
  title?: string;
  courses?: RecommendedCourse[];
  enabled?: boolean;
}

function ExtensionIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      fill="currentColor"
      className={className}
    >
      <path d="M9 0L6.5 2.5V8L9 5.75V0ZM0 2.5V9.825C0 9.95 0.125 10.075 0.25 10.075C0.3 10.075 0.325 10.05 0.375 10.05C1.05 9.725 2.025 9.5 2.75 9.5C3.725 9.5 4.775 9.7 5.5 10.25V2.5C4.775 1.95 3.725 1.75 2.75 1.75C1.775 1.75 0.725 1.95 0 2.5ZM11 2.5C10.7 2.275 10.375 2.125 10 2V8.75C9.45 8.575 8.85 8.5 8.25 8.5C7.4 8.5 6.175 8.825 5.5 9.25V10.25C6.175 9.825 7.4 9.5 8.25 9.5C9.075 9.5 9.925 9.65 10.625 10.025C10.675 10.05 10.7 10.05 10.75 10.05C10.875 10.05 11 9.925 11 9.8V2.5Z" />
    </svg>
  );
}

function CategoryIcon({
  type,
  iconUrl,
  className = "",
}: {
  type?: "pos-graduacao" | "extensao" | "profissionalizante";
  iconUrl?: string;
  className?: string;
}) {
  
  if (iconUrl) {
    return (
      <Image
        src={iconUrl}
        alt=""
        width={12}
        height={12}
        className={className}
      />
    );
  }

  return <ExtensionIcon className={className} />;
}

export function CourseRecommended({
  title = "Cursos Recomendados",
  courses = [],
  enabled = true,
}: CourseRecommendedProps) {
  if (!enabled) return null;

  const defaultCourses: RecommendedCourse[] = [
    {
      id: 1,
      title: "Intervenção ABA para Autismo e Deficiência Intelectual",
      slug: "intervencao-aba",
      imageUrl: "/cursoCat01.png",
      type: "extensao",
      typeLabel: "Curso de extensão",
    },
    {
      id: 2,
      title: "Intervenção ABA para Autismo e Deficiência Intelectual",
      slug: "intervencao-aba-2",
      imageUrl: "/cursoCat01.png",
      type: "extensao",
      typeLabel: "Curso de extensão",
    },
    {
      id: 3,
      title: "Intervenção ABA para Autismo e Deficiência Intelectual",
      slug: "intervencao-aba-3",
      imageUrl: "/cursoCat01.png",
      type: "extensao",
      typeLabel: "Curso de extensão",
    },
    {
      id: 4,
      title: "Intervenção ABA para Autismo e Deficiência Intelectual",
      slug: "intervencao-aba-4",
      imageUrl: "/cursoCat01.png",
      type: "extensao",
      typeLabel: "Curso de extensão",
    },
    {
      id: 5,
      title: "Intervenção ABA para Autismo e Deficiência Intelectual",
      slug: "intervencao-aba-5",
      imageUrl: "/cursoCat01.png",
      type: "extensao",
      typeLabel: "Curso de extensão",
    },
  ];

  const allCourses = courses && courses.length > 0 ? courses : defaultCourses;
  const displayCourses = allCourses.slice(0, 4);

  return (
    <section className="section bg-primary-light">
      <div className="container">
        <div className="flex flex-col gap-10 rounded-t-xl rounded-tr-xl pb-[120px] pt-[80px]">
          <p className="w-full whitespace-pre-wrap font-sans text-[36px] font-bold leading-[50px] text-primary-dark">
            {title}
          </p>

          <div className="scrollbar-hide flex gap-[24px] overflow-x-auto overflow-y-clip">
            {displayCourses.map((course) => (
              <div
                key={course.id}
                className="flex shrink-0 flex-col items-start rounded-[16px] bg-white"
              >
                <div className="flex w-[260px] flex-col gap-4 rounded-[9px] px-4 pb-5 pt-4">
                  <div className="relative flex w-full flex-col items-center gap-6">
                    <div className="relative h-[146px] w-full overflow-hidden rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px]">
                      <Image
                        src={course.imageUrl || "/cursoCat01.png"}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.4)] from-[0.327%] to-[rgba(0,0,0,0)] to-[35.943%]" />
                      
                      <div className="absolute left-2 top-2 flex items-center gap-1 rounded-sm bg-primary px-2 py-1">
                        <CategoryIcon
                          type={course.type}
                          iconUrl={course.typeIconUrl}
                          className="h-3 w-3 shrink-0 text-white"
                        />
                        <p className="font-sans text-xs font-medium leading-normal text-white">
                          {course.typeLabel || "Curso de extensão"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full flex-col items-start justify-center">
                    <p className="w-full whitespace-pre-wrap font-sans text-base font-semibold leading-normal tracking-[-0.16px] text-primary-dark">
                      {course.title}
                    </p>
                  </div>

                  <Link
                    href={`/curso/${course.slug}`}
                    className="inline-flex w-fit items-center gap-1 rounded-sm bg-secondary px-3 py-1 text-base font-bold text-white transition-colors hover:bg-primary-dark"
                  >
                    Saber Mais
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseRecommended;

