import Breadcrumb from "@/components/common/Breadcrumb";
import CTAWhatsApp from "@/components/common/CTAWhatsApp";
import AboutInstitute from "@/components/about/AboutInstitute";
import MethodologySection from "@/components/home/MethodologySection";
import TeamSection from "@/components/about/TeamSection";
import CertificationsSection from "@/components/about/CertificationsSection";
import HowItWorksSection from "@/components/about/HowItWorksSection";
import { getPageScf, isEnabled } from "@/lib/wordpress/content";

export default async function AboutPage() {
  const scf = await getPageScf("sobre");

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Sobre Nós" },
  ];

  return (
    <>
      {}
      <Breadcrumb items={breadcrumbItems} />

      {}
      <AboutInstitute
        title={scf?.institute_title || "O maior ecossistema de ensino on-line em saúde mental do mundo."}
        subtitle={scf?.institute_subtitle || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae ipsum vitae mi volutpat vehicula at sed nibh. Mauris nec maximus neque, et ornare lorem."}
        instituteName={scf?.institute_name || "CBI of Miami"}
        description={scf?.institute_description}
        enabled={isEnabled(scf?.institute_enabled)}
      />

      {}
      <MethodologySection
        title={scf?.methodology_title || "Metodologia VAHA"}
        description={scf?.methodology_description || "O CBI of Miami possui uma metodologia de ensino importada de universidades americanas e europeias que garante que todo o aprendizado seja absorvido pelos alunos. Para cada módulo, existe um ciclo que garante a absorção do conteúdo não só no curto prazo, mas também no longo prazo."}
        ctaLabel={scf?.methodology_cta_label || "Conhecer o Instituto"}
        ctaHref={scf?.methodology_cta_href || "/sobre"}
        enabled={isEnabled(scf?.methodology_enabled)}
      />

      {}
      <TeamSection
        title={scf?.team_title || "Veja quem faz parte da "}
        titleBold={scf?.team_title_bold || "nossa Equipe"}
        description={scf?.team_description}
        dreamTeamTitle={scf?.dream_team_title || "Dream Team"}
        ctaLabel={scf?.team_cta_label || "Mostrar mais"}
        ctaHref={scf?.team_cta_href || "/profissionais"}
        enabled={isEnabled(scf?.team_enabled)}
      />

      {}
      <CertificationsSection
        title={scf?.certifications_title || "Certificações Institucionais"}
        subtitle={scf?.certifications_subtitle || "As certificações mais importantes da área de saúde mental e metodologia própria, inspirada nas melhores universidades do mundo."}
        enabled={isEnabled(scf?.certifications_enabled)}
      />

      {}
      <HowItWorksSection
        title={scf?.how_it_works_title || "Como funciona"}
        logo1Url={scf?.how_it_works_logo1}
        logo2Url={scf?.how_it_works_logo2}
        enabled={isEnabled(scf?.how_it_works_enabled, true)}
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
