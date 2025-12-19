import Breadcrumb from "@/components/common/Breadcrumb";
import CTAWhatsApp from "@/components/common/CTAWhatsApp";
import ContactCards from "@/components/contact/ContactCards";
import FAQSection from "@/components/contact/FAQSection";
import { getPageScf, isEnabled } from "@/lib/wordpress/content";

export default async function ContactPage() {
  const scf = await getPageScf("contato");

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Contato" },
  ];

  return (
    <>
      {}
      <Breadcrumb items={breadcrumbItems} />

      {}
      <ContactCards
        title={scf?.contact_title || "Precisa de mais informações?"}
        subtitle={scf?.contact_subtitle || "Nosso time está de prontidão para tirar todas as suas dúvidas. Selecione uma das opções abaixo e te atenderemos em breve."}
        notStudentTitle={scf?.not_student_title || "Ainda não é aluno?"}
        notStudentSubtitle={scf?.not_student_subtitle || "Entre em contato com um consultor especializado."}
        notStudentCtaLabel={scf?.not_student_cta_label || "Contato"}
        notStudentCtaHref={scf?.not_student_cta_href || "https://wa.me/5511999999999"}
        studentTitle={scf?.student_title || "Já é nosso aluno?"}
        studentSubtitle={scf?.student_subtitle || "Acesse o portal de atendimento ao aluno."}
        studentCtaLabel={scf?.student_cta_label || "Contato"}
        studentCtaHref={scf?.student_cta_href || "/portal-aluno"}
        enabled={isEnabled(scf?.contact_cards_enabled)}
      />

      {}
      <FAQSection
        title={scf?.faq_title || "Dúvidas Frequentes"}
        enabled={isEnabled(scf?.faq_enabled)}
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
