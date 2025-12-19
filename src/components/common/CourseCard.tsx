import Link from "next/link";
import Image from "next/image";

export type CourseType = "pos-graduacao" | "extensao" | "profissionalizante";

interface CourseCardProps {
  title: string;
  imageUrl?: string;
  type?: CourseType;
  typeLabel?: string;
  typeIconUrl?: string; 
  href?: string;
  ctaLabel?: string;
}

function GraduationIcon({ className = "" }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 12 12" 
      fill="currentColor"
      className={className}
    >
      <path d="M2.5 6.59V8.59L6 10.5L9.5 8.59V6.59L6 8.5L2.5 6.59ZM6 1.5L0.5 4.5L6 7.5L10.5 5.045V8.5H11.5V4.5L6 1.5Z" />
    </svg>
  );
}

function BookIcon({ className = "" }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 11 11" 
      fill="currentColor"
      className={className}
    >
      <path d="M9 0L6.5 2.5V8L9 5.75V0ZM0 2.5V9.825C0 9.95 0.125 10.075 0.25 10.075C0.3 10.075 0.325 10.05 0.375 10.05C1.05 9.725 2.025 9.5 2.75 9.5C3.725 9.5 4.775 9.7 5.5 10.25V2.5C4.775 1.95 3.725 1.75 2.75 1.75C1.775 1.75 0.725 1.95 0 2.5ZM11 2.5C10.7 2.275 10.375 2.125 10 2V8.75C9.45 8.575 8.85 8.5 8.25 8.5C7.4 8.5 6.175 8.825 5.5 9.25V10.25C6.175 9.825 7.4 9.5 8.25 9.5C9.075 9.5 9.925 9.65 10.625 10.025C10.675 10.05 10.7 10.05 10.75 10.05C10.875 10.05 11 9.925 11 9.8V2.5Z" />
    </svg>
  );
}

function BriefcaseIcon({ className = "" }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 12 12" 
      fill="currentColor"
      className={className}
    >
      <path d="M10 3.25H8V2.25C8 1.695 7.555 1.25 7 1.25H5C4.445 1.25 4 1.695 4 2.25V3.25H2C1.445 3.25 1.005 3.695 1.005 4.25L1 9.75C1 10.305 1.445 10.75 2 10.75H10C10.555 10.75 11 10.305 11 9.75V4.25C11 3.695 10.555 3.25 10 3.25ZM7 3.25H5V2.25H7V3.25Z" />
    </svg>
  );
}

const typeConfig: Record<CourseType, { label: string; IconComponent: React.ComponentType<{ className?: string }> }> = {
  "pos-graduacao": { label: "Pós-graduação", IconComponent: GraduationIcon },
  "extensao": { label: "Curso de extensão", IconComponent: BookIcon },
  "profissionalizante": { label: "Curso profissionalizante", IconComponent: BriefcaseIcon },
};

function CategoryIcon({ 
  type, 
  iconUrl, 
  className = "" 
}: { 
  type: CourseType; 
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

  const config = typeConfig[type];
  const IconComponent = config.IconComponent;
  return <IconComponent className={className} />;
}

export function CourseCard({
  title,
  imageUrl = "/cursoCat01.png",
  type = "pos-graduacao",
  typeLabel,
  typeIconUrl,
  href = "#",
  ctaLabel = "Saber Mais",
}: CourseCardProps) {
  const config = typeConfig[type];

  return (
    <article className="flex w-[260px] shrink-0 flex-col rounded-md bg-primary-light">
      <div className="flex flex-col gap-4 p-4">
        {}
        <div className="relative">
          <div className="relative h-[146px] w-full overflow-hidden rounded-br-sm rounded-tl-sm rounded-tr-sm">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
            />
            {}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
          </div>
          
          {}
          <div className="absolute left-2 top-2 flex items-center gap-2 rounded-sm bg-primary px-2 py-1">
            <CategoryIcon 
              type={type} 
              iconUrl={typeIconUrl} 
              className="h-3 w-3 text-white" 
            />
            <span className="text-xs font-medium text-white">
              {typeLabel || config.label}
            </span>
          </div>
        </div>

        {}
        <h4 className="text-md font-semibold leading-normal tracking-tight text-primary-dark">
          {title}
        </h4>

        {}
        <Link
          href={href}
          className="inline-flex w-fit items-center gap-1 rounded-sm bg-secondary px-3 py-1 text-md font-bold text-white transition-colors hover:bg-primary-dark"
        >
          {ctaLabel}
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

export default CourseCard;
