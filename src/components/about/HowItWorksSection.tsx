import Image from "next/image";

interface CertificationItem {
  title: string;
  description: string;
  boldText?: string;
}

interface HowItWorksSectionProps {
  title?: string;
  logo1Url?: string;
  logo2Url?: string;
  items?: CertificationItem[];
  enabled?: boolean;
}

export function HowItWorksSection({
  title = "Como funciona",
  logo1Url,
  logo2Url,
  items,
  enabled = true,
}: HowItWorksSectionProps) {
  if (!enabled) return null;

  const defaultItems: CertificationItem[] = [
    {
      title: "Certificação – Pós-graduações",
      description: "A certificação de pós-graduação é emitida pela Faculdade Primum, instituição do mesmo grupo educacional do CBI of Miami, ",
      boldText: "também composto pelo BBI of Chicago, Aristo, BWS, MedQ e Território Saber.",
    },
    {
      title: "Certificado Internacional de Excelência (CIE)",
      boldText: "O Certificado Internacional de Excelência (CIE) é emitido em todos os cursos e é válido como curso livre. ",
      description: "O CIE é garantia de qualidade para profissionais de todos os segmentos de mercado. Para obter a certificação, o aluno deve ter participado de pelo menos 70% das aulas do treinamento, além de realizar as avaliações de conhecimentos básicos que são passadas ao longo do curso. Isso tudo sem precisar sair de casa.",
    },
    {
      title: "Certificação – Cursos Livres e de Extensão",
      boldText: "Os cursos dessas modalidades, de duração variável, proporcionam aos alunos conhecimentos que lhe permitam profissionalizar-se, qualificar-se e atualizar-se para o trabalho.",
      description: "\n\nOs cursos livres têm como Base Legal o Decreto Presidencial N° 5.154, de 23 de julho de 2004, Art. 1° e 3° e PORTARIA Nº 008, de 25/06/2002 publicado no DIÁRIO OFICIAL – SC – Nº 16.935 – 27.06.2002. Assim as organizações que oferecem este tipo de curso têm direito de emitir certificado ao aluno em conformidade com a Lei nº 9394/96; Decreto nº 5.154/04; Deliberação CEE 14/97 (Indicação CEE 14/97). Esses Certificados têm validade legal para diversos fins. Desta forma a jurisprudência do Conselho Nacional de Educação tem sido no sentido de declarar-lhes a equivalência, de acordo com regras amplas e flexíveis.",
    },
  ];

  const displayItems = items && items.length > 0 ? items : defaultItems;

  return (
    <section className="section">
      <div className="container">
        <div className="relative flex flex-col items-center justify-center gap-space-xl rounded-xl bg-primary-light py-space-xl">
          <div className="flex h-[109px] items-center justify-center">
            <div className="flex h-[161px] items-center justify-center gap-4 rounded-lg">
              <div className="relative h-[140px] w-[192px] shrink-0">
                <Image
                  src={logo1Url || "/logo01.png"}
                  alt="Primum"
                  fill
                  className="object-contain"
                />
              </div>

              <p className="font-display text-[40px] leading-[1.3] text-primary-dark">+</p>

              <div className="relative h-[57px] w-[230px] shrink-0">
                <Image
                  src={logo2Url || "/logo02.png"}
                  alt="CBI of Miami"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {displayItems.map((item, idx) => (
              <div
                key={idx}
                className="flex w-[840px] gap-[10px] rounded-md bg-primary p-[30px]"
              >
                <div className="relative h-[50px] w-[50px] shrink-0">
                  <svg
                    className="h-full w-full"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.27848 27.4504V33.3046C9.27848 34.8254 10.1118 36.2421 11.4451 36.9713L21.8618 42.6588C23.1118 43.3463 24.6118 43.3463 25.8618 42.6588L36.2785 36.9713C37.6118 36.2421 38.4451 34.8254 38.4451 33.3046V27.4504L25.8618 34.3254C24.6118 35.0129 23.1118 35.0129 21.8618 34.3254L9.27848 27.4504ZM21.8618 7.32544L4.29932 16.9088C2.86182 17.7004 2.86182 19.7838 4.29932 20.5754L21.8618 30.1588C23.1118 30.8463 24.6118 30.8463 25.8618 30.1588L42.6118 21.0129V33.3254C42.6118 34.4713 43.5493 35.4088 44.6951 35.4088C45.841 35.4088 46.7785 34.4713 46.7785 33.3254V19.9713C46.7785 19.2004 46.3618 18.5129 45.6951 18.1379L25.8618 7.32544C24.6118 6.65877 23.1118 6.65877 21.8618 7.32544Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <div className="flex-1">
                  <p className="mb-[17px] font-sans text-[30px] font-bold leading-[1.3] text-white">
                    {item.title}
                  </p>
                  <p className="font-sans text-base leading-[1.3] text-white">
                    {item.boldText && (
                      <span className="font-bold">{item.boldText}</span>
                    )}
                    {item.description && (
                      <span className="font-normal whitespace-pre-wrap">{item.description}</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute right-0 top-[121px] z-10 hidden lg:block">
            <svg
              className="h-[138px] w-[70px]"
              viewBox="0 0 70 138"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.2482 0.0202176C12.1144 0.298208 3.90551 7.2619 1.26112 16.9059C-0.696251 24.0907 -1.11286 33.5789 5.52908 42.1488C18.354 58.6823 22.8122 61.4315 27.1304 69.2512C31.4487 77.0708 33.8563 97.9771 21.942 113.884C10.0277 129.791 7.5791 128.953 7.1695 132.168C6.75991 135.384 8.76555 137.844 13.1576 137.438C17.5496 137.032 37.0723 134.697 61.2025 95.9836C85.3327 57.2706 53.9248 5.6864 33.2909 1.25367C28.5768 0.241692 24.6002 -0.0897452 21.2482 0.0202176Z"
                fill="#0EDFE3"
              />
            </svg>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 z-10 hidden lg:block">
            <svg
              className="h-[232px] w-[155px]"
              viewBox="0 0 155 232"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.53252 146.39C4.53252 146.39 48.4495 258.826 119.49 224.603C184.569 193.286 143.536 139.583 126.484 129.901C121.163 126.892 84.5851 108.053 75.9267 82.5181C64.8028 49.7451 69.141 -2.69461 51.94 0.108015C34.739 2.91064 -15.1781 64.4183 4.53302 146.348L4.53252 146.39Z"
                fill="#F90F6B"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;

