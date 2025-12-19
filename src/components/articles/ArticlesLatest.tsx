import ArticleCard from "@/components/common/ArticleCard";

interface Article {
  title: string;
  excerpt?: string;
  imageUrl?: string;
  date?: string;
  href?: string;
}

interface Video {
  url?: string;
  embed?: string;
  type?: "youtube" | "embed";
}

interface ArticlesLatestProps {
  title?: string;
  articles?: Article[];
  videos?: Video[];
  enabled?: boolean;
}

function getYouTubeId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

function getVideoEmbed(video: Video): string | null {
  if (!video.url && !video.embed) return null;
  
  if (video.type === "embed" || video.embed) {
    return video.embed || video.url || null;
  }
  
  if (video.type === "youtube" || video.url) {
    const youtubeId = getYouTubeId(video.url || "");
    if (youtubeId) {
      return `https://www.youtube.com/embed/${youtubeId}?si=O0oadFFbZdhp8H-v`;
    }
    
    if (video.url?.includes("youtube.com/embed")) {
      return video.url;
    }
  }
  
  return null;
}

export function ArticlesLatest({
  title = "Últimos artigos",
  articles,
  videos,
  enabled = true,
}: ArticlesLatestProps) {
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
        <div className="flex gap-6">
          {}
          <div className="flex flex-1 flex-col gap-3">
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
          <div className="flex h-[493px] w-[438px] flex-col gap-4 rounded-bl-lg rounded-tl-lg rounded-tr-lg bg-[#9481f6] p-6">
            <div className="flex items-center gap-2 px-2">
              <svg className="h-6 w-6 text-[#0edfe3]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
              </svg>
              <span className="text-xl font-semibold text-white">Destaques do Youtube</span>
            </div>

            {}
            <div className="flex flex-1 flex-col gap-5">
              {videos && videos.length > 0 ? (
                videos.map((video, idx) => {
                  const embedUrl = getVideoEmbed(video);
                  if (!embedUrl) return null;
                  
                  return (
                    <div
                      key={idx}
                      className="relative h-[172px] w-full overflow-hidden rounded-br-xs rounded-tl-xs rounded-tr-xs"
                    >
                      <iframe
                        src={embedUrl}
                        title={`Vídeo ${idx + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="h-full w-full"
                      />
                    </div>
                  );
                })
              ) : (
                
                [1, 2].map((idx) => (
                  <div
                    key={idx}
                    className="relative h-[172px] w-full overflow-hidden rounded-br-xs rounded-tl-xs rounded-tr-xs"
                  >
                    <iframe
                      src="https://www.youtube.com/embed/0wvP0k10CLA?si=O0oadFFbZdhp8H-v"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  </div>
                ))
              )}
            </div>

            {}
            <button className="inline-flex w-fit items-center gap-1 rounded-sm bg-secondary px-3 py-1 text-sm font-bold text-white">
              Ver mais
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticlesLatest;

