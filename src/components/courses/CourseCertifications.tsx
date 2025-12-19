interface FeatureCard {
  title: string;
  description: string;
}

interface CourseCertificationsProps {
  title?: string;
  items?: FeatureCard[];
  enabled?: boolean;
}

export function CourseCertifications({
  title,
  items,
  enabled = true,
}: CourseCertificationsProps) {
  if (!enabled) return null;

  const defaultItems: FeatureCard[] = [
    {
      title: "Autonomia e Flexibilidade",
      description: "Acesso a aulas gravadas para maior praticidade no seu dia a dia e materiais direcionados para enriquecer sua rotina de estudos",
    },
    {
      title: "Metodologia Própria CBI of Miami",
      description: "Metodologia VAHA inspirada em Harvard, Columbia e Stanford com foco em casos de mercado de trabalho com a metodologia hands-on do CBI",
    },
    {
      title: "Certificado pelo MEC",
      description: "O Child Behavior Institute é parte da Faculdade Primum uma instituição de ensino superior devidamente reconhecida pelo MEC",
    },
    {
      title: "Sem TCC Acadêmico",
      description: "Receba seu certificado sem precisar apresentar um trabalho de pesquisa acadêmica.",
    },
  ];

  const displayItems = items && items.length > 0 ? items : defaultItems;

  return (
    <section className="section">
      <div className="container">
        <div className="relative flex flex-col items-center justify-center">
          <div className="relative grid grid-cols-2 gap-0">
            <div className="flex min-h-[230px] flex-col items-end gap-2 rounded-tl-[40px] bg-[#352d62] px-8 pb-8 pt-7 text-right">
              <p className="font-display text-[28px] font-bold leading-normal text-white">
                {displayItems[0]?.title || ""}
              </p>
              <p className="max-w-[468px] whitespace-pre-wrap font-display text-base leading-6 text-white">
                {displayItems[0]?.description || ""}
              </p>
            </div>

            <div className="flex min-h-[230px] flex-1 flex-col items-start gap-2 rounded-tr-[40px] bg-primary px-8 pb-8 pt-7">
              <p className="font-display text-[28px] font-bold leading-normal text-white">
                {displayItems[1]?.title || ""}
              </p>
              <p className="max-w-[505px] whitespace-pre-wrap font-display text-base leading-6 text-white">
                {displayItems[1]?.description || ""}
              </p>
            </div>

            <div className="flex min-h-[194px] flex-col items-end justify-center gap-2 rounded-bl-[40px] bg-[rgba(121,97,244,0.6)] px-8 pb-8 pt-[81px] text-right">
              <p className="font-display text-[28px] font-bold leading-normal text-white">
                {displayItems[2]?.title || ""}
              </p>
              <p className="max-w-[457px] whitespace-pre-wrap font-display text-base leading-6 text-white">
                {displayItems[2]?.description || ""}
              </p>
            </div>

            <div className="flex min-h-[194px] flex-1 flex-col items-start justify-center gap-2 rounded-br-[40px] bg-[rgba(121,97,244,0.2)] px-8 pb-8 pt-[78px] text-primary-dark">
              <p className="font-display text-[28px] font-bold leading-normal">
                {displayItems[3]?.title || ""}
              </p>
              <p className="max-w-[398px] whitespace-pre-wrap font-display text-base leading-6">
                {displayItems[3]?.description || ""}
              </p>
            </div>

            <div className="absolute left-1/2 top-[149px] flex w-[732px] -translate-x-1/2 items-center justify-center rounded-[40px] bg-white px-10 py-7">
              <p className="max-w-[644px] text-center font-sans text-[28px] leading-9 text-primary-dark">
                {title ? (
                  <>
                    <span className="font-normal">Como funciona a </span>
                    <span className="font-bold">{title}</span>
                  </>
                ) : (
                  <>
                    <span className="font-normal">Como funciona a </span>
                    <span className="font-bold">Pós-Graduação de Intervenção ABA para Autismo e Deficiência Intelectual</span>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseCertifications;
