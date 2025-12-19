import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

interface ArticleCardProps {
  title: string;
  excerpt?: string;
  imageUrl?: string;
  date?: string;
  href?: string;
  variant?: "featured" | "horizontal" | "vertical" | "compact";
}

function formatDate(dateString?: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function ArticleCard({
  title,
  excerpt,
  imageUrl = "/noticia01.png",
  date,
  href = "#",
  variant = "vertical",
}: ArticleCardProps) {
  if (variant === "featured") {
    return (
      <article className="flex flex-col rounded-br-lg rounded-tl-lg rounded-tr-lg bg-primary-light">
        <div className="flex flex-col gap-5 p-5">
          {}
          <div className="relative h-[284px] w-full overflow-hidden rounded-br-sm rounded-tl-sm rounded-tr-sm">
            <Image src={imageUrl} alt={title} fill className="object-cover" />
          </div>

          {}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold tracking-tight text-primary-dark">
              {title}
            </h3>
            <div className="flex items-center justify-between">
              <Button href={href} variant="secondary" className="py-2 text-lg">
                Ler sobre
              </Button>
              {date && (
                <span className="text-xs font-light text-primary-dark">
                  {formatDate(date)}
                </span>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (variant === "horizontal") {
    return (
      <article className="flex w-full gap-4 rounded-br-lg rounded-tl-lg rounded-tr-lg bg-primary-light p-4">
        {}
        <div className="relative h-[124px] w-[198px] shrink-0 overflow-hidden rounded-br-xs rounded-tl-xs rounded-tr-xs">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>

        {}
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-1">
            <h4 className="text-xl font-semibold tracking-tight text-primary-dark">
              {title}
            </h4>
            {excerpt && (
              <p className="text-sm leading-normal text-primary-dark line-clamp-2">
                {excerpt}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <Link
              href={href}
              className="inline-flex items-center gap-1 rounded-sm bg-secondary px-3 py-1 text-sm font-bold text-white"
            >
              Ler sobre
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            {date && (
              <span className="text-xs font-light text-primary-dark">
                {formatDate(date)}
              </span>
            )}
          </div>
        </div>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article className="flex w-[227px] shrink-0 flex-col gap-4 rounded-br-lg rounded-tl-lg rounded-tr-lg bg-primary-light p-4">
        {}
        <div className="relative h-[124px] w-full overflow-hidden rounded-br-xs rounded-tl-xs rounded-tr-xs">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>

        {}
        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-semibold tracking-tight text-primary-dark line-clamp-2">
            {title}
          </h4>
          {excerpt && (
            <p className="text-sm leading-normal text-primary-dark line-clamp-3">
              {excerpt}
            </p>
          )}
        </div>

        {}
        <div className="flex flex-col gap-2">
          {date && (
            <span className="text-xs font-light text-primary-dark">
              {formatDate(date)}
            </span>
          )}
          <Link
            href={href}
            className="inline-flex w-fit items-center gap-1 rounded-sm bg-secondary px-3 py-1 text-sm font-bold text-white"
          >
            Ler sobre
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="flex w-full flex-col gap-4 rounded-br-lg rounded-tl-lg rounded-tr-lg bg-primary-light p-4">
      {}
      <div className="relative h-[94px] w-full overflow-hidden rounded-br-xs rounded-tl-xs rounded-tr-xs">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      {}
      <div className="flex flex-col gap-2">
        <h4 className="text-xl font-semibold tracking-tight text-primary-dark">
          {title}
        </h4>
        <div className="flex items-center justify-between">
          <Link
            href={href}
            className="inline-flex items-center gap-1 rounded-sm bg-secondary px-3 py-1 text-sm font-bold text-white"
          >
            Ler sobre
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          {date && (
            <span className="text-xs font-light text-primary-dark">
              {formatDate(date)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ArticleCard;

