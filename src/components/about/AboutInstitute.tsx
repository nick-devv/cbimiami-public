"use client";

import { useState } from "react";
import Button from "@/components/common/Button";
import Image from "next/image";

interface AboutInstituteProps {
  title?: string;
  subtitle?: string;
  instituteName?: string;
  description?: string;
  ctaLabel?: string;
  enabled?: boolean;
}

export function AboutInstitute({
  title = "O maior ecossistema de ensino on-line em saúde mental do mundo.",
  subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae ipsum vitae mi volutpat vehicula at sed nibh. Mauris nec maximus neque, et ornare lorem.",
  instituteName = "CBI of Miami",
  description = `O CBI of Miami é uma marca pertencente ao Grupo Primum. Todos os nossos cursos de Graduação e Pós-Graduação são ofertados, operados e certificados pela Faculdade Primum, Instituição de Ensino Superior devidamente credenciada pelo Ministério da Educação ('MEC') sob o código e-MEC nº 362, com nota 4 no Indice Geral de Cursos ('IGC').

Os problemas comportamentais da infância e adolescência atingem cerca de 10% e 20% das crianças e adolescentes em idade escolar em todo o mundo.

O Child Behavior Institute of Miami foi criado na Flórida, Estados Unidos, com o objetivo inicial de oferecer consultoria e conhecimento psicoeducacional a familiares, educadores e profissionais da saúde mental infantil em toda a região metropolitana de Miami e sul do Estado da Flórida.`,
  ctaLabel = "Ler mais",
  enabled = true,
}: AboutInstituteProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!enabled) return null;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="section">
      <div className="container">
        {}
        <div className="mb-10 flex flex-col gap-3 px-10">
          <h1 className="max-w-[874px] text-5xl font-bold leading-tight tracking-wide text-primary-dark">
            {title}
          </h1>
          <p className="max-w-[854px] text-xl text-primary-dark">{subtitle}</p>
        </div>

        {}
        <div className="overflow-hidden rounded-t-xl bg-primary">
          <div className="flex items-end gap-10 px-10 py-0">
            {}
            <div className="flex max-w-[677px] flex-col gap-5 pb-8 pt-[42px]">
              <h2 className="text-3xl font-bold text-white">{instituteName}</h2>
              <div className={isExpanded ? "" : "overflow-hidden"}>
                <div
                  className={`space-y-4 text-md leading-relaxed text-white ${
                    isExpanded
                      ? ""
                      : "line-clamp-9"
                  }`}
                  style={
                    !isExpanded
                      ? {
                          display: "-webkit-box",
                          WebkitLineClamp: 9,
                          WebkitBoxOrient: "vertical",
                        }
                      : {}
                  }
                >
                  {description.split("\n\n").map((paragraph, idx) => (
                    <p key={idx} className={`text-white ${idx === 0 ? "italic" : ""}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <button
                onClick={toggleExpand}
                className="self-start text-sm font-bold text-white underline decoration-secondary"
              >
                {isExpanded ? "Ler menos" : ctaLabel}
              </button>
            </div>

            {}
            <div className="hidden shrink-0 pb-0 lg:block">
              <div className="relative">
                <Image
                  src="/sobre01.png"
                  alt="CBI of Miami"
                  width={285}
                  height={370}
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutInstitute;

