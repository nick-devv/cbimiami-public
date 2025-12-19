import Breadcrumb from "@/components/common/Breadcrumb";
import CTAWhatsApp from "@/components/common/CTAWhatsApp";
import ArticleDetail from "@/components/articles/ArticleDetail";
import { getMedia, getPostBySlug, getPosts } from "@/lib/wordpress/client";
import { getPageScf, isEnabled } from "@/lib/wordpress/content";
import { WPImage } from "@/lib/wordpress/types";
import { notFound } from "next/navigation";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

async function getRelatedArticles() {
  const { data } = await getPosts("noticias", { per_page: 4, _embed: true });
  const images: Record<number, WPImage | null> = {};
  for (const post of data) {
    if (post.featured_media) {
      images[post.featured_media] = await getMedia(post.featured_media);
    }
  }
  return { data, images };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getPostBySlug("noticias", slug);
  const scf = await getPageScf("artigos");

  const { data: relatedData, images: relatedImages } = await getRelatedArticles();

  const relatedArticles = relatedData.map((post) => {
    const image = relatedImages[post.featured_media || 0];
    return {
      title: post.title.rendered.replace(/<[^>]*>/g, ""),
      excerpt: post.excerpt?.rendered?.replace(/<[^>]*>/g, "") || "",
      imageUrl: image?.source_url || "/noticia01.png",
      date: post.date,
      href: `/artigos/${post.slug}`,
    };
  });

  const articleTitle = article 
    ? article.title.rendered.replace(/<[^>]*>/g, "") 
    : "7 dicas para Autismo e Deficiência Intelectual";

  const articleImage = article?.featured_media 
    ? (await getMedia(article.featured_media))?.source_url 
    : "/noticia01.png";

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Artigos CBI", href: "/artigos" },
    { label: articleTitle },
  ];

  return (
    <>
      {}
      <Breadcrumb items={breadcrumbItems} />

      {}
      <ArticleDetail
        title={articleTitle}
        author={article?.author_name || "Marcelo Filipe"}
        date={article?.date}
        readTime="5 minutos de leitura"
        imageUrl={articleImage || "/noticia01.png"}
        content={article?.content?.rendered?.replace(/<[^>]*>/g, "\n\n")}
        relatedArticles={relatedArticles}
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

