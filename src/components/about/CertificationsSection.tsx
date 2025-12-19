"use client";

import { useState, useRef, useEffect } from "react";

interface Certification {
  name: string;
  shortName: string;
  description: string;
  logoUrl?: string;
}

interface CertificationsSectionProps {
  title?: string;
  subtitle?: string;
  certifications?: Certification[];
  enabled?: boolean;
}

export function CertificationsSection({
  title = "Certificações Institucionais",
  subtitle = "As certificações mais importantes da área de saúde mental e metodologia própria, inspirada nas melhores universidades do mundo.",
  certifications,
  enabled = true,
}: CertificationsSectionProps) {
  if (!enabled) return null;

  const defaultCertifications: Certification[] = [
    {
      name: "European Association For Distance Learning (EADL)",
      shortName: "EADL",
      description: "A EUROPEAN ASSOCIATION FOR DISTANCE LEARNING (EADL) é a maior associação de educação online na Europa e tem como missão representar todas as organizações europeias privadas e não governamentais que oferecem educação à distância de qualidade. Fundada em 1985, a EADL trabalha incansavelmente para promover a excelência no ensino online, estabelecendo padrões elevados de qualidade e inovação. A associação reúne instituições de ensino, empresas de tecnologia educacional e profissionais dedicados ao avanço da educação digital. Através de conferências, publicações e programas de certificação, a EADL facilita o intercâmbio de conhecimento e melhores práticas entre seus membros. O CBI of Miami orgulha-se de fazer parte desta prestigiosa organização, compartilhando o compromisso com a excelência educacional e o acesso democrático ao conhecimento.",
    },
    {
      name: "United States Distance Learning Association (USDLA)",
      shortName: "USDLA",
      description: "A USDLA é a maior associação de educação à distância do mundo e tem como missão apoiar o desenvolvimento, a aplicação de ensino e treinamentos online ao redor do mundo.",
    },
    {
      name: "National Association of Scholars",
      shortName: "NAS",
      description: "O CBI of Miami é membro associado da National Association of Scholars, através do Dr. Gustavo Teixeira, nosso co-fundador residente nos Estados Unidos.",
    },
    {
      name: "Autism Society of America (ASA)",
      shortName: "ASA",
      description: "O CBI of Miami é membro associado da Autism Society of America através do Dr. Gustavo Teixeira, nosso Diretor Acadêmico nos Estados Unidos.",
    },
    {
      name: "Florida Distance Learning Association (FDLA)",
      shortName: "FDLA",
      description: "Orgulhosamente somos associados da FDLA através do nosso co-fundador nos Estados Unidos, Dr. Gustavo Teixeira.",
    },
    {
      name: "American Association of University Professors (AAUP)",
      shortName: "AAUP",
      description: "O CBI of Miami é membro associado da Associação Americana de Professores Universitários (AAUP), através do Dr. Gustavo Teixeira, nosso Diretor Executivo nos Estados.",
    },
  ];

  const displayCertifications = certifications && certifications.length > 0 
    ? certifications 
    : defaultCertifications;

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [needsExpand, setNeedsExpand] = useState<boolean[]>(
    new Array(displayCertifications.length).fill(false)
  );
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const hasCheckedRef = useRef(false);

  useEffect(() => {
    
    const checkNeedsExpand = () => {
      if (textRefs.current.length === 0) return;
      
      const needs: boolean[] = [];
      
      textRefs.current.forEach((ref, index) => {
        if (ref && index < displayCertifications.length) {
          
          const tempDiv = document.createElement('div');
          tempDiv.style.position = 'absolute';
          tempDiv.style.visibility = 'hidden';
          tempDiv.style.width = getComputedStyle(ref).width;
          tempDiv.style.fontSize = getComputedStyle(ref).fontSize;
          tempDiv.style.fontFamily = getComputedStyle(ref).fontFamily;
          tempDiv.style.lineHeight = getComputedStyle(ref).lineHeight;
          tempDiv.style.padding = getComputedStyle(ref).padding;
          tempDiv.textContent = ref.textContent;
          
          document.body.appendChild(tempDiv);
          
          const lineHeight = parseFloat(getComputedStyle(ref).lineHeight) || parseFloat(getComputedStyle(ref).fontSize) * 1.5 || 24;
          const maxHeight = lineHeight * 7;
          const scrollHeight = tempDiv.scrollHeight;
          
          const needsExpand = scrollHeight > maxHeight;
          needs.push(needsExpand);
          
          document.body.removeChild(tempDiv);
        } else {
          needs.push(false);
        }
      });

      if (needs.length > 0) {
        setNeedsExpand((prev) => {
          const changed = prev.length !== needs.length || 
            prev.some((val, idx) => val !== needs[idx]);
          return changed ? needs : prev;
        });
      }
    };

    const timeoutId1 = setTimeout(() => {
      checkNeedsExpand();
    }, 100);
    
    const timeoutId2 = setTimeout(() => {
      checkNeedsExpand();
      hasCheckedRef.current = true;
    }, 300);

    const handleResize = () => {
      if (hasCheckedRef.current) {
        checkNeedsExpand();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
      window.removeEventListener("resize", handleResize);
    };
  }, [displayCertifications.length]);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="section border-l-4 border-primary py-10">
      <div className="container">
        {}
        <div className="mb-[60px] max-w-[992px]">
          <h2 className="mb-2 text-5xl font-bold leading-tight text-primary-dark">
            {title}
          </h2>
          <p className="text-xl text-primary-dark">{subtitle}</p>
        </div>

        {}
        <div className="flex flex-wrap justify-between gap-10">
          {displayCertifications.map((cert, idx) => (
            <article
              key={idx}
              className="flex w-[312px] flex-col gap-5 rounded-sm bg-primary-light px-5 py-6"
            >
              {}
              <div className="flex items-start gap-5">
                {}
                <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-xs border border-primary bg-white">
                  <span className="text-sm font-bold text-primary">{cert.shortName}</span>
                </div>
                <h4 className="text-lg font-bold leading-tight text-primary-dark">
                  {cert.name}
                </h4>
              </div>

              {}
              <div className="relative flex-1">
                <p
                  ref={(el) => {
                    if (el) {
                      textRefs.current[idx] = el;
                    }
                  }}
                  className="text-md leading-relaxed text-primary-dark"
                  style={
                    expandedIndex !== idx && needsExpand[idx]
                      ? {
                          display: "-webkit-box",
                          WebkitLineClamp: 7,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }
                      : {}
                  }
                >
                  {cert.description}
                </p>
                {}
                {expandedIndex !== idx && needsExpand[idx] === true && (
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-primary-light to-transparent pointer-events-none" />
                )}
              </div>

              {}
              {needsExpand[idx] === true && (
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="text-sm font-bold text-primary-dark underline decoration-primary"
                  >
                    {expandedIndex === idx ? "Ler menos" : "Ler mais"}
                  </button>
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                  </svg>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificationsSection;

