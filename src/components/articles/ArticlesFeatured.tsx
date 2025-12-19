import ArticleCard from "@/components/common/ArticleCard";

interface Article {
  title: string;
  excerpt?: string;
  imageUrl?: string;
  date?: string;
  href?: string;
}

interface ArticlesFeaturedProps {
  mainArticle?: Article;
  sideArticles?: Article[];
  enabled?: boolean;
}

export function ArticlesFeatured({
  mainArticle,
  sideArticles,
  enabled = true,
}: ArticlesFeaturedProps) {
  if (!enabled) return null;

  const defaultMainArticle: Article = {
    title: "7 dicas para Autismo e Deficiência Intelectual",
    imageUrl: "/noticia01.png",
    date: "2025-11-20",
    href: "/artigos/7-dicas-autismo",
  };

  const defaultSideArticles: Article[] = [
    {
      title: "7 dicas para Autismo e Deficiência Intelectual",
      imageUrl: "/noticia02.png",
      date: "2025-11-20",
      href: "/artigos/7-dicas-autismo-2",
    },
    {
      title: "7 dicas para Autismo e Deficiência Intelectual",
      imageUrl: "/noticia03.png",
      date: "2025-11-20",
      href: "/artigos/7-dicas-autismo-3",
    },
  ];

  const displayMainArticle = mainArticle || defaultMainArticle;
  const displaySideArticles = sideArticles && sideArticles.length > 0 
    ? sideArticles 
    : defaultSideArticles;

  return (
    <section className="section mt-10">
      <div className="container">
        <div className="flex gap-6">
          {}
          <div className="flex-1">
            <ArticleCard
              title={displayMainArticle.title}
              imageUrl={displayMainArticle.imageUrl}
              date={displayMainArticle.date}
              href={displayMainArticle.href}
              variant="featured"
            />
          </div>

          {}
          <div className="flex w-[440px] flex-col gap-3">
            {displaySideArticles.map((article, idx) => (
              <ArticleCard
                key={idx}
                title={article.title}
                imageUrl={article.imageUrl}
                date={article.date}
                href={article.href}
                variant="vertical"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticlesFeatured;

