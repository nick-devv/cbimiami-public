import ArticleCard from "@/components/common/ArticleCard";
import Button from "@/components/common/Button";

interface Article {
  title: string;
  excerpt?: string;
  imageUrl?: string;
  date?: string;
  href?: string;
}

interface ArticlesPopularProps {
  title?: string;
  articles?: Article[];
  ctaLabel?: string;
  ctaHref?: string;
  showCta?: boolean;
  enabled?: boolean;
}

export function ArticlesPopular({
  title = "Artigos populares",
  articles,
  ctaLabel = "Mostrar mais",
  ctaHref = "/artigos",
  showCta = true,
  enabled = true,
}: ArticlesPopularProps) {
  if (!enabled) return null;

  const defaultArticles: Article[] = [
    {
      title: "7 dicas para Autismo e Deficiência Intelectual",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, leo at commodo cursus, ex enim blandit justo.",
      imageUrl: "/noticia01.png",
      date: "2025-11-20",
      href: "/artigos/7-dicas-autismo",
    },
    {
      title: "7 dicas para Autismo e Deficiência Intelectual",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, leo at commodo cursus, ex enim blandit justo.",
      imageUrl: "/noticia02.png",
      date: "2025-11-20",
      href: "/artigos/7-dicas-autismo-2",
    },
    {
      title: "7 dicas para Autismo e Deficiência Intelectual",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, leo at commodo cursus, ex enim blandit justo.",
      imageUrl: "/noticia03.png",
      date: "2025-11-20",
      href: "/artigos/7-dicas-autismo-3",
    },
  ];

  const displayArticles = articles && articles.length > 0 ? articles : defaultArticles;

  return (
    <section className="section">
      <div className="container">
        {}
        <h2 className="mb-5 text-2xl font-bold text-primary-dark">{title}</h2>

        {}
        <div className="mb-10 flex flex-col gap-3">
          {displayArticles.map((article, idx) => (
            <ArticleCard
              key={idx}
              title={article.title}
              excerpt={article.excerpt}
              imageUrl={article.imageUrl}
              date={article.date}
              href={article.href}
              variant="horizontal"
            />
          ))}
        </div>

        {}
        {showCta && (
          <div className="flex justify-center">
            <Button href={ctaHref} variant="secondary">
              {ctaLabel}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ArticlesPopular;

