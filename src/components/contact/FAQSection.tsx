"use client";

import { useState } from "react";
import Accordion from "@/components/common/Accordion";

interface FAQCategory {
  name: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

interface FAQSectionProps {
  title?: string;
  categories?: FAQCategory[];
  enabled?: boolean;
}

export function FAQSection({
  title = "Dúvidas Frequentes",
  categories,
  enabled = true,
}: FAQSectionProps) {
  const [activeCategory, setActiveCategory] = useState(0);

  if (!enabled) return null;

  const defaultCategories: FAQCategory[] = [
    {
      name: "Geral",
      questions: [
        {
          question: "Qual a metodologia do CBI? Como funcionam os cursos?",
          answer: `O CBI of Miami possui uma metodologia de ensino importada de universidades americanas e europeias que garante que todo o aprendizado seja absorvido pelos alunos.
Todos os módulos possuem videoaulas de acordo com a ementa do curso.
Os professores disponibilizam também material recomendado e complementar para enriquecer sua experiência.
Além disso, conforme os conteúdos são abordados, os alunos realizam testes para garantir que o conhecimento fixe na memória de longo prazo.
Assim que os bate-papos ao vivo são agendados com o(a) professor(a) responsável e nossa equipe de suporte, avisamos aos alunos da turma por e-mail. Após o agendamento, a data e o horário também estarão disponíveis em sua área do aluno.`,
        },
        {
          question: "O curso já começou. Posso realizar a inscrição?",
          answer: "Se o curso ainda estiver disponível no nosso site, você poderá se inscrever e terá acesso as aulas já disponibilizadas sem prejuízos ao seu aprendizado.",
        },
        {
          question: "Posso assistir as aulas no celular?",
          answer: `Pode. Nós temos o aplicativo CBI Alunos que é exclusivo para que nossos alunos possam estudar pelo celular ou tablet.
Clique aqui para baixar o app CBI Alunos na Play Store
Clique aqui para baixar o app CBI Alunos na App Store`,
        },
        {
          question: "Posso terminar o curso antes da previsão de término?",
          answer: "Com a metodologia de ensino atual, não é possível terminar o curso antecipadamente.",
        },
        {
          question: "As aulas são todas online?",
          answer: `As aulas teóricas são 100% online, o que lhe permitirá assistir de onde estiver e no momento que for melhor para você.
As aulas são liberadas por módulo, a cada 2 semanas.
Em parceria com a Faculdade BWS|Primum, oferecemos dois cursos nos quais as aulas práticas ocorrem presencialmente em São Paulo.`,
        },
      ],
    },
    {
      name: "Pagamento",
      questions: [
        {
          question: "Quais são as formas de pagamento aceitas?",
          answer: "Aceitamos pagamento via cartão de crédito (parcelado em até 12x), boleto bancário e PIX.",
        },
        {
          question: "Posso parcelar o curso?",
          answer: "Sim, você pode parcelar em até 12x no cartão de crédito sem juros.",
        },
      ],
    },
    {
      name: "Acesso ao Aluno",
      questions: [
        {
          question: "Como faço para acessar minha área do aluno?",
          answer: "Após a confirmação do pagamento, você receberá um e-mail com as instruções de acesso à plataforma.",
        },
      ],
    },
    {
      name: "Certificado e MEC",
      questions: [
        {
          question: "O certificado é reconhecido pelo MEC?",
          answer: "Sim, todos os nossos cursos de pós-graduação são certificados pela Faculdade Primum, instituição credenciada pelo MEC.",
        },
      ],
    },
  ];

  const displayCategories = categories && categories.length > 0 
    ? categories 
    : defaultCategories;

  const currentCategory = displayCategories[activeCategory];

  return (
    <section className="section">
      <div className="container">
        {}
        <h2 className="mb-10 text-3xl font-bold text-primary-dark">{title}</h2>

        {}
        <div className="mb-10 flex justify-between gap-2">
          {displayCategories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`flex-1 rounded-xs px-4 py-3 text-md font-bold transition-colors ${
                activeCategory === idx
                  ? "bg-primary text-white"
                  : "bg-primary/20 text-primary-dark hover:bg-primary/30"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {}
        <Accordion items={currentCategory.questions} />
      </div>
    </section>
  );
}

export default FAQSection;

