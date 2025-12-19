import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/Button";
import { getMedia, getPosts } from "@/lib/wordpress/client";
import { WPImage } from "@/lib/wordpress/types";

interface FeaturedArticlesProps {
  title?: string;
  ctaLabel?: string;
  ctaHref?: string;
  enabled?: boolean;
}

async function loadArticles() {
  const { data } = await getPosts("noticias", { per_page: 3, _embed: true });
  const images: Record<number, WPImage | null> = {};

  const limitedData = data.slice(0, 3);

  for (const post of limitedData) {
    if (post.featured_media) {
      images[post.featured_media] = await getMedia(post.featured_media);
    }
  }

  return { data: limitedData, images };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

export async function FeaturedArticles({
  title = "Publicações",
  ctaLabel = "Acessar mais Artigos",
  ctaHref = "/artigos",
  enabled = true,
}: FeaturedArticlesProps) {
  if (!enabled) return null;
  const { data: posts, images } = await loadArticles();

  const defaultArticles = [
    {
      id: 1,
      title: { rendered: 'Terapia ABA para crianças com TDAH.' },
      excerpt: { rendered: 'Quando pensamos em Terapia ABA, muitas vezes, associamos essa abordagem ao autismo. Mas você sabia que a Terapia ABA também pode ser extremamente útil para' },
      date: '2025-11-10',
      slug: 'terapia-aba-tdah',
    },
    {
      id: 2,
      title: { rendered: 'Curso ABA: entenda o conceito e saiba onde estudar' },
      excerpt: { rendered: 'A Análise do Comportamento Aplicada (ABA) é uma das abordagens mais eficazes no tratamento de condições como autismo e TDAH, mas o que realmente significa' },
      date: '2025-11-09',
      slug: 'curso-aba',
    },
    {
      id: 3,
      title: { rendered: 'Psicoeducação: o que é intervenção psicoeducativa?' },
      excerpt: { rendered: 'Vamos bater um papo simples e direto sobre o que é a psicoeducação, como funciona a intervenção psicoeducativa e porque isso pode fazer toda ...' },
      date: '2025-11-08',
      slug: 'psicoeducacao',
    },
  ];

  const fallbackImages = ['/noticia01.png', '/noticia02.png', '/noticia03.png'];

  const displayArticles = posts.length > 0 
    ? posts.map((post, index) => ({
        ...post,
        fallbackImage: fallbackImages[index % fallbackImages.length],
      }))
    : defaultArticles.map((article, index) => ({
        ...article,
        fallbackImage: fallbackImages[index % fallbackImages.length],
      }));

  return (
    <section className="section">
      <div className="container">
        <div className="rounded-xl bg-primary-light p-10">
          <div className="flex flex-col gap-10">
            {}
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-bold text-primary-dark">{title}</h2>
              <Button href={ctaHref} variant="primary">
                {ctaLabel}
              </Button>
            </div>

            {}
            <div className="flex gap-8">
              {displayArticles.map((article, index) => {
                const imageUrl = posts.length > 0 
                  ? images[(article as any).featured_media || 0]?.source_url || (article as any).fallbackImage
                  : (article as any).fallbackImage;

                return (
                  <Link
                    key={article.id || index}
                    href={article.slug ? `/artigos/${article.slug}` : '#'}
                    className="flex flex-1 flex-col gap-4"
                  >
                    {}
                    {imageUrl && (
                      <div className="relative h-[173px] w-full overflow-hidden rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px]">
                        <Image
                          src={imageUrl}
                          alt={article.title.rendered}
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                    )}

                    {}
                    <div className="flex items-center gap-4">
                      <img
                        src="/calendario1.svg"
                        alt=""
                        className="h-4 w-4"
                      />
                      <p className="text-sm font-semibold text-primary-dark">
                        {formatDate((article as any).date || article.date || new Date().toISOString())}
                      </p>
                    </div>

                    {}
                    <div className="flex flex-col gap-2">
                      <h3
                        className="text-2xl font-bold leading-tight text-primary-dark"
                        dangerouslySetInnerHTML={{ __html: article.title.rendered }}
                      />
                      <p
                        className="text-md leading-snug text-primary-dark"
                        dangerouslySetInnerHTML={{ __html: article.excerpt?.rendered ?? "" }}
                      />
                    </div>

                    {}
                    <span className="text-md font-normal text-primary-dark underline decoration-primary">
                      Ler mais
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedArticles;

