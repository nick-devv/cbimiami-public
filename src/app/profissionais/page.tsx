import Breadcrumb from "@/components/common/Breadcrumb";
import CTAWhatsApp from "@/components/common/CTAWhatsApp";
import ProfessionalsGrid from "@/components/professionals/ProfessionalsGrid";
import { getPageScf, isEnabled } from "@/lib/wordpress/content";

export default async function ProfessionalsPage() {
  const scf = await getPageScf("profissionais");

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Professores CBI" },
  ];

  return (
    <>
      {}
      <Breadcrumb items={breadcrumbItems} />

      {}
      <ProfessionalsGrid
        title={scf?.title || "Nossos profissionais"}
        subtitle={scf?.subtitle || "Conecte-se com nosso Corpo Docente CBI. Selecionamos um time composto pelos especialistas, mestres e doutores mais requisitados no Brasil e afora."}
        ctaLabel={scf?.cta_label || "Mostrar mais"}
        ctaHref={scf?.cta_href || "#"}
        showCta={isEnabled(scf?.show_cta)}
        enabled={true}
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
