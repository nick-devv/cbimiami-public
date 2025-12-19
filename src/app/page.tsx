import FeaturedArticles from "@/components/home/FeaturedArticles";
import FeaturedCarousel from "@/components/home/FeaturedCarousel";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import HeroSection from "@/components/home/HeroSection";
import InfoHighlightV1 from "@/components/home/InfoHighlightV1";
import MethodologySection from "@/components/home/MethodologySection";
import Testimonials from "@/components/home/Testimonials";
import { getPageScf, isEnabled } from "@/lib/wordpress/content";

type InfoBlock = {
  info_enabled?: boolean;
  info_title?: string;
  info_text?: string;
  info_button_label?: string;
  info_button_url?: string;
  info_media_type?: "image" | "video";
  info_media_url?: string;
  info_background?: "primary" | "secondary" | "light" | "transparent";
  info_layout?: "container" | "infinite-right";
  info_show_title?: boolean;
  info_show_text?: boolean;
  info_show_button?: boolean;
};

export default async function Home() {
  const scf = await getPageScf("home");

  const baseBlock: Omit<InfoBlock, "info_background" | "info_layout" | "info_button_label" | "info_button_url"> = {
    info_enabled: true,
    info_media_type: "image",
    info_show_title: true,
    info_show_text: true,
    info_show_button: true,
  };

  const defaultInfoBlocks: InfoBlock[] = [
    { ...baseBlock, info_button_label: "Saiba mais", info_button_url: "/sobre", info_background: "transparent", info_layout: "container" },
    { ...baseBlock, info_button_label: "Ver cursos", info_button_url: "/cursos", info_background: "primary", info_layout: "infinite-right" },
    { ...baseBlock, info_button_label: "Saiba mais", info_button_url: "/sobre", info_background: "transparent", info_layout: "container" },
    { ...baseBlock, info_button_label: "Fale conosco", info_button_url: "/contato", info_background: "light", info_layout: "container" },
  ];

  const infoBlocks = (scf?.info_blocks as InfoBlock[] | undefined)?.filter(Boolean) || defaultInfoBlocks;

  return (
    <>
      {isEnabled(scf?.hero_enabled) && (
        <HeroSection
          title={scf?.hero_title}
          subtitle={scf?.hero_subtitle}
          ctaLabel={scf?.hero_cta_label}
          ctaHref={scf?.hero_cta_url}
          imageUrl={scf?.hero_image}
          enableCta={isEnabled(scf?.hero_cta_enabled)}
        />
      )}

      <FeaturedCourses title={scf?.featured_courses_title} enabled={isEnabled(scf?.featured_courses_enabled)} />

      {infoBlocks[0] && (
        <InfoHighlightV1
          title={infoBlocks[0].info_title}
          text={infoBlocks[0].info_text}
          buttonLabel={infoBlocks[0].info_button_label}
          buttonHref={infoBlocks[0].info_button_url}
          mediaType={infoBlocks[0].info_media_type}
          mediaUrl={infoBlocks[0].info_media_url}
          background={infoBlocks[0].info_background}
          layout={infoBlocks[0].info_layout}
          enableTitle={isEnabled(infoBlocks[0].info_show_title)}
          enableText={isEnabled(infoBlocks[0].info_show_text)}
          enableButton={isEnabled(infoBlocks[0].info_show_button)}
          enabled={isEnabled(infoBlocks[0].info_enabled)}
        />
      )}

      <MethodologySection
        enabled={isEnabled(scf?.methodology_enabled)}
        title={scf?.methodology_title}
        description={scf?.methodology_description}
        items={scf?.methodology_items}
        ctaLabel={scf?.methodology_cta_label}
        ctaHref={scf?.methodology_cta_url}
      />

      <FeaturedCarousel
        enabled={isEnabled(scf?.carousel_enabled)}
        title={scf?.carousel_title}
        items={scf?.carousel_items}
      />

      {infoBlocks[1] && (
        <InfoHighlightV1
          title={infoBlocks[1].info_title}
          text={infoBlocks[1].info_text}
          buttonLabel={infoBlocks[1].info_button_label}
          buttonHref={infoBlocks[1].info_button_url}
          mediaType={infoBlocks[1].info_media_type}
          mediaUrl={infoBlocks[1].info_media_url}
          background={infoBlocks[1].info_background}
          layout={infoBlocks[1].info_layout}
          enableTitle={isEnabled(infoBlocks[1].info_show_title)}
          enableText={isEnabled(infoBlocks[1].info_show_text)}
          enableButton={isEnabled(infoBlocks[1].info_show_button)}
          enabled={isEnabled(infoBlocks[1].info_enabled)}
        />
      )}

      {infoBlocks[2] && (
        <InfoHighlightV1
          title={infoBlocks[2].info_title}
          text={infoBlocks[2].info_text}
          buttonLabel={infoBlocks[2].info_button_label}
          buttonHref={infoBlocks[2].info_button_url}
          mediaType={infoBlocks[2].info_media_type}
          mediaUrl={infoBlocks[2].info_media_url}
          background={infoBlocks[2].info_background}
          layout={infoBlocks[2].info_layout}
          enableTitle={isEnabled(infoBlocks[2].info_show_title)}
          enableText={isEnabled(infoBlocks[2].info_show_text)}
          enableButton={isEnabled(infoBlocks[2].info_show_button)}
          enabled={isEnabled(infoBlocks[2].info_enabled)}
        />
      )}

      <FeaturedArticles
        enabled={isEnabled(scf?.featured_articles_enabled)}
        title={scf?.featured_articles_title}
        ctaLabel={scf?.featured_articles_cta_label}
        ctaHref={scf?.featured_articles_cta_url}
      />

      <Testimonials
        enabled={isEnabled(scf?.testimonials_enabled)}
        title={scf?.testimonials_title}
        items={scf?.testimonials_items}
            />

      {infoBlocks[3] && (
        <InfoHighlightV1
          title={infoBlocks[3].info_title}
          text={infoBlocks[3].info_text}
          buttonLabel={infoBlocks[3].info_button_label}
          buttonHref={infoBlocks[3].info_button_url}
          mediaType={infoBlocks[3].info_media_type}
          mediaUrl={infoBlocks[3].info_media_url}
          background={infoBlocks[3].info_background}
          layout={infoBlocks[3].info_layout}
          enableTitle={isEnabled(infoBlocks[3].info_show_title)}
          enableText={isEnabled(infoBlocks[3].info_show_text)}
          enableButton={isEnabled(infoBlocks[3].info_show_button)}
          enabled={isEnabled(infoBlocks[3].info_enabled)}
        />
      )}
    </>
  );
}
