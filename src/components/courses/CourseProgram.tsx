"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface ProgramModule {
  title: string;
  icon?: string;
  workload?: string;
  objective?: string;
}

interface CourseProgramProps {
  title?: string;
  modules?: ProgramModule[];
  ctaLabel?: string;
  ctaHref?: string;
  enabled?: boolean;
}

export function CourseProgram({
  title = "Programação Completa:",
  modules,
  ctaLabel = "Matricular",
  ctaHref = "#",
  enabled = true,
}: CourseProgramProps) {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  if (!enabled) return null;

  const defaultModules: ProgramModule[] = [
    { title: "Introdução ao autismo e deficiência intelectual", icon: "/icon01.png", workload: "20h", objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices laoreet tempor. Suspendisse in dolor mauris. Donec tincidunt sit amet massa vitae tincidunt." },
    { title: "Fundamentos filosóficos da análise do comportamento: O behaviorismo radical", icon: "/icon02.png", workload: "20h", objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices laoreet tempor. Suspendisse in dolor mauris. Donec tincidunt sit amet massa vitae tincidunt." },
    { title: "Conceitos e princípios da análise experimental do comportamento", icon: "/icon03.png", workload: "20h", objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices laoreet tempor. Suspendisse in dolor mauris. Donec tincidunt sit amet massa vitae tincidunt." },
    { title: "Comportamento Verbal", icon: "/icon04.png", workload: "20h", objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices laoreet tempor. Suspendisse in dolor mauris. Donec tincidunt sit amet massa vitae tincidunt." },
    { title: "Comportamento simbólico e alfabetização", icon: "/icon05.png", workload: "20h", objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices laoreet tempor. Suspendisse in dolor mauris. Donec tincidunt sit amet massa vitae tincidunt." },
    { title: "Delineamentos experimentais", icon: "/icon06.png", workload: "20h", objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices laoreet tempor. Suspendisse in dolor mauris. Donec tincidunt sit amet massa vitae tincidunt." },
    { title: "Mensuração do comportamento", icon: "/icon07.png", workload: "20h", objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices laoreet tempor. Suspendisse in dolor mauris. Donec tincidunt sit amet massa vitae tincidunt." },
    { title: "Avaliação comportamental", icon: "/icon08.png", workload: "20h", objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices laoreet tempor. Suspendisse in dolor mauris. Donec tincidunt sit amet massa vitae tincidunt." },
    { title: "Processos de ensino", icon: "/icon09.png", workload: "20h", objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices laoreet tempor. Suspendisse in dolor mauris. Donec tincidunt sit amet massa vitae tincidunt." },
    { title: "Ensino comportamental verbal", icon: "/icon10.png", workload: "20h", objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices laoreet tempor. Suspendisse in dolor mauris. Donec tincidunt sit amet massa vitae tincidunt." },
    { title: "Introdução à comunicação alternativa e ampliada", icon: "/icon11.png", workload: "20h", objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices laoreet tempor. Suspendisse in dolor mauris. Donec tincidunt sit amet massa vitae tincidunt." },
    { title: "Habilidades sociais no autismo leve", icon: "/icon12.png", workload: "20h", objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices laoreet tempor. Suspendisse in dolor mauris. Donec tincidunt sit amet massa vitae tincidunt." },
    { title: "Ética do analista do comportamento", icon: "/icon13.png", workload: "20h", objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices laoreet tempor. Suspendisse in dolor mauris. Donec tincidunt sit amet massa vitae tincidunt." },
    { title: "Implementando um plano de ensino individualizado/plano de tratamento singular", icon: "/icon15.png", workload: "20h", objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices laoreet tempor. Suspendisse in dolor mauris. Donec tincidunt sit amet massa vitae tincidunt." },
    { title: "Integração profissional na intervenção baseada em ABA", icon: "/icon16.png", workload: "20h", objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices laoreet tempor. Suspendisse in dolor mauris. Donec tincidunt sit amet massa vitae tincidunt." },
    { title: "Sexualidade e habilidades de segurança", icon: "/icon17.png", workload: "20h", objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices laoreet tempor. Suspendisse in dolor mauris. Donec tincidunt sit amet massa vitae tincidunt." },
    { title: "Recursos de tecnologia", icon: "/icon18.png", workload: "20h", objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices laoreet tempor. Suspendisse in dolor mauris. Donec tincidunt sit amet massa vitae tincidunt." },
    { title: "Metodologia de pesquisa", icon: "/icon19.png", workload: "20h", objective: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices laoreet tempor. Suspendisse in dolor mauris. Donec tincidunt sit amet massa vitae tincidunt." },
  ];

  const displayModules = modules && modules.length > 0 ? modules : defaultModules;

  const toggleModule = (idx: number) => {
    setExpandedModule(expandedModule === idx ? null : idx);
  };

  return (
    <section className="flex flex-col items-center gap-10 rounded-[32px] bg-primary py-20">
      <div className="container">
        {}
        <h2 className="text-center text-[40px] font-bold leading-[50px] text-white">
          {title}
        </h2>
      </div>

      <div className="container">
        {}
        <div className="flex w-full max-w-[1100px] flex-wrap justify-center gap-[18px]">
          {displayModules.map((module, idx) => {
            const isExpanded = expandedModule === idx;
            const hasDetails = module.workload || module.objective;
            const iconPath = module.icon || `/icon${String(idx + 1).padStart(2, '0')}.png`;

            return (
              <button
                key={idx}
                onClick={() => hasDetails && toggleModule(idx)}
                className={`flex w-[261px] flex-col gap-4 overflow-hidden rounded-[12px] bg-white/10 p-4 text-left transition-all ${
                  isExpanded ? "h-auto" : "h-[148px]"
                }`}
              >
                {}
                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between">
                    {}
                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-primary p-2">
                      <Image
                        src={iconPath}
                        alt={module.title}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>

                    {}
                    {hasDetails && (
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#0EDFE3]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="10"
                          viewBox="0 0 16 10"
                          fill="none"
                          className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                        >
                          <path
                            d="M1.5 1.5L8 8L14.5 1.5"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  {}
                  <p className="text-[16px] font-bold leading-[20px] text-white">
                    {module.title}
                  </p>
                </div>

                {}
                {isExpanded && hasDetails && (
                  <div className="flex flex-col gap-2 text-[16px]">
                    {module.workload && (
                      <p className="text-white">
                        <span className="font-bold text-white">Carga horária:</span>{" "}
                        <span className="font-normal text-white">{module.workload}</span>
                      </p>
                    )}
                    {module.objective && (
                      <p className="text-white">
                        <span className="font-bold text-white">Objetivo:</span>{" "}
                        <span className="font-normal text-white">{module.objective}</span>
                      </p>
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="container">
        {}
        <div className="flex w-full justify-center">
          <Link
            href={ctaHref}
            className="flex items-center gap-[9px] rounded-[12px] bg-[#F90F6B] px-[19px] py-[9px] transition-all hover:opacity-90"
          >
            <span className="text-[20px] font-bold text-white">{ctaLabel}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M10.5 7L17.5 14L10.5 21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CourseProgram;

