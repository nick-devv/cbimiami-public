import PrivacyPolicyContent from "@/components/legal/PrivacyPolicyContent";
import CTAWhatsApp from "@/components/common/CTAWhatsApp";
import { getPageScf, isEnabled } from "@/lib/wordpress/content";

export default async function PrivacyPolicyPage() {
  const scf = await getPageScf("politica-privacidade");

  return (
    <>
      {}
      <PrivacyPolicyContent enabled={isEnabled(scf?.enabled, true)} />

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

