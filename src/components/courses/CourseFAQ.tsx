"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface CourseFAQProps {
  title?: string;
  items?: FAQItem[];
  enabled?: boolean;
}

export function CourseFAQ({
  title = "Perguntas frequentes",
  items,
  enabled = true,
}: CourseFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!enabled) return null;

  const defaultItems: FAQItem[] = [
    {
      question: "Qual é a duração do curso?",
      answer: "O curso tem duração de 24 meses, com acesso ao conteúdo por até 30 meses após a matrícula.",
    },
    {
      question: "O curso é reconhecido pelo MEC?",
      answer: "Sim, nosso curso de pós-graduação é reconhecido pelo MEC e possui dupla certificação: nacional e internacional.",
    },
    {
      question: "Posso parcelar o pagamento?",
      answer: "Sim, oferecemos diversas opções de parcelamento para facilitar seu investimento na sua carreira.",
    },
    {
      question: "Preciso ter experiência prévia na área?",
      answer: "Não é necessário ter experiência prévia. O curso foi desenvolvido para atender desde iniciantes até profissionais experientes.",
    },
    {
      question: "As aulas são ao vivo ou gravadas?",
      answer: "O curso é 100% online com aulas gravadas, permitindo que você estude no seu ritmo. Além disso, oferecemos mentorias ao vivo regulares.",
    },
    {
      question: "Como funciona o certificado internacional?",
      answer: "Ao concluir o curso, você receberá um certificado de curso livre emitido pelo CBI of Miami, instituição de ensino sediada nos Estados Unidos.",
    },
  ];

  const displayItems = items && items.length > 0 ? items : defaultItems;

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="mb-10 text-4xl font-bold text-primary-dark">{title}</h2>

        <div className="flex flex-col gap-0">
          {displayItems.map((item, idx) => (
            <div key={idx} className="border-b border-primary/10">
              <button
                onClick={() => toggleItem(idx)}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="text-lg font-semibold text-primary-dark">
                  {item.question}
                </span>
                <div
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary p-[5px] transition-transform ${
                    openIndex === idx ? "" : "rotate-180"
                  }`}
                >
                  <svg
                    className="h-full w-full"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                  >
                    <path
                      d="M10.941 5.88102L6.324 1.26402V13.999H5.324V1.26602L0.707 5.88302L0 5.17602L4.718 0.459023C5.013 0.163023 5.406 2.28882e-05 5.825 2.28882e-05C6.244 2.28882e-05 6.637 0.163023 6.931 0.459023L11.648 5.17502L10.941 5.88202V5.88102Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </button>
              {openIndex === idx && (
                <div className="pb-5">
                  <p className="text-md leading-relaxed text-primary-dark/80">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CourseFAQ;

