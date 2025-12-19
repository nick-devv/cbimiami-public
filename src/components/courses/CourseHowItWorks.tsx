import FeatureCards from "@/components/common/FeatureCards";

interface HowItWorksItem {
  number: string;
  title: string;
  description: string;
}

interface CourseHowItWorksProps {
  title?: string;
  items?: HowItWorksItem[];
  enabled?: boolean;
}

export function CourseHowItWorks({
  title = "Como você vai conquistar conhecimento para atuar com segurança?",
  items,
  enabled = true,
}: CourseHowItWorksProps) {
  const defaultItems: HowItWorksItem[] = [
    {
      number: "1",
      title: "Conteúdo atualizado",
      description: "Com todas as técnicas e abordagens de maior referência no Brasil e no mundo.",
    },
    {
      number: "2",
      title: "Materiais práticos",
      description: "Personalizados para potencializar o seu aprendizado e facilitar seu dia a dia.",
    },
    {
      number: "3",
      title: "Mentorias ao vivo",
      description: "Oportunidade de tirar suas dúvidas com os mentores e receber atualizações exclusivas.",
    },
    {
      number: "4",
      title: "Dupla certificação",
      description: "Certificado nacional reconhecido pelo MEC e internacional como curso livre pelo CBI of Miami.",
    },
    {
      number: "5",
      title: "Acesso estendido",
      description: "Total de 36 meses de acesso ao conteúdo para que você consulte sempre que precisar.",
    },
  ];

  const displayItems = items && items.length > 0 ? items : defaultItems;

  const featureItems = displayItems.map((item) => ({
    number: item.number,
    title: item.title,
    description: item.description,
  }));

  return (
    <FeatureCards
      title={title}
      items={featureItems}
      layout="horizontal"
      enabled={enabled}
    />
  );
}

export default CourseHowItWorks;
