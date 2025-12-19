import Breadcrumb from "@/components/common/Breadcrumb";
import CTAWhatsApp from "@/components/common/CTAWhatsApp";
import ArticlesHero from "@/components/articles/ArticlesHero";
import ArticlesFeatured from "@/components/articles/ArticlesFeatured";
import ArticlesLatest from "@/components/articles/ArticlesLatest";
import ArticlesPopular from "@/components/articles/ArticlesPopular";
import { getMedia, getPosts } from "@/lib/wordpress/client";
import { getPageScf, isEnabled } from "@/lib/wordpress/content";
import { WPImage } from "@/lib/wordpress/types";

async function getArticles() {
  const { data } = await getPosts("noticias", { per_page: 9, _embed: true });
  const images: Record<number, WPImage | null> = {};
  for (const post of data) {
    if (post.featured_media) {
      images[post.featured_media] = await getMedia(post.featured_media);
    }
  }
  return { data, images };
}

export default async function ArticlesPage() {
  const scf = await getPageScf("artigos");
  const { data: articles, images } = await getArticles();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Artigos CBI" },
  ];

  const formattedArticles = articles.map((article) => {
    const image = images[article.featured_media || 0];
    return {
      title: article.title.rendered.replace(/<[^>]*>/g, ""),
      excerpt: article.excerpt?.rendered?.replace(/<[^>]*>/g, "") || "",
      imageUrl: image?.source_url || "/noticia01.png",
      date: article.date,
      href: `/artigos/${article.slug}`,
    };
  });

  const mainArticle = formattedArticles[0];
  const sideArticles = formattedArticles.slice(1, 3);
  const latestArticles = formattedArticles.slice(0, 3);
  const popularArticles = formattedArticles.slice(3, 6);

  return (
    <>
      {}
      <Breadcrumb items={breadcrumbItems} />

      {}
      <ArticlesHero
        title={scf?.title || "Artigos CBI"}
        searchPlaceholder={scf?.search_placeholder || "Busque por artigo"}
      />

      {}
      <ArticlesFeatured
        mainArticle={mainArticle}
        sideArticles={sideArticles}
        enabled={isEnabled(scf?.featured_enabled)}
      />

      {}
      <ArticlesLatest
        title={scf?.latest_title || "Últimos artigos"}
        articles={latestArticles}
        videos={scf?.latest_videos || undefined}
        enabled={isEnabled(scf?.latest_enabled)}
      />

      {}
      <ArticlesPopular
        title={scf?.popular_title || "Artigos populares"}
        articles={popularArticles}
        ctaLabel={scf?.popular_cta_label || "Mostrar mais"}
        ctaHref={scf?.popular_cta_href || "/artigos"}
        showCta={isEnabled(scf?.popular_cta_enabled)}
        enabled={isEnabled(scf?.popular_enabled)}
      />

      {}
      <CTAWhatsApp
        title={scf?.cta_title || "Ainda precisa de "}
        titleBold={scf?.cta_title_bold || "alguma ajuda?"}
        description={scf?.cta_description || "Identifique hoje mesmo o melhor curso para seu momento profissional. Basta clicar no botão para falar diretamente com nossos consultores de carreira."}
        buttonLabel={scf?.cta_button_label || "Falar com Consultores CBI"}
        buttonHref={scf?.cta_button_href || "https://wa.me/5511999999999"}
        enabled={isEnabled(scf?.cta_enabled)}
      />
    </>
  );
}
