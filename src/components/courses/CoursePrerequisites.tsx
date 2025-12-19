interface Prerequisite {
  number: string;
  title?: string;
  description: string;
}

interface CoursePrerequisitesProps {
  title?: string;
  prerequisites?: Prerequisite[];
  disclaimer?: string;
  enabled?: boolean;
}

export function CoursePrerequisites({
  title = "Quais são os pré-requisitos para se matricular em uma pós CBI?",
  prerequisites,
  disclaimer = "Caso o aluno não cumpra com as obrigações aqui previstas, o referido curso será validado apenas como 'curso livre', não tendo qualquer direito à certificação de Pós-graduação. Se for apresentado um certificado de conclusão, o aluno deverá, até o final do curso, enviar o diploma de graduação para ser certificado na Pós-graduação.",
  enabled = true,
}: CoursePrerequisitesProps) {
  if (!enabled) return null;

  const defaultPrerequisites: Prerequisite[] = [
    {
      number: "1",
      title: "Graduação completa,",
      description: "com data de colação de grau anterior ao início do curso.",
    },
    {
      number: "2",
      title: "Documentos solicitados:",
      description: "cópia do documento de identificação e cópia do diploma de graduação.",
    },
    {
      number: "3",
      title: "Inscrição:",
      description: "Imprescindível o preenchimento das informações solicitadas na inscrição e comprovação de graduação completa reconhecida pelo MEC.",
    },
    {
      number: "4",
      title: "Documentos comprobatórios:",
      description: "Diploma ou certificado de conclusão, e deverão ser enviados em até 07 dias corridos após a matrícula.",
    },
  ];

  const displayPrerequisites = prerequisites && prerequisites.length > 0 
    ? prerequisites 
    : defaultPrerequisites;

  const titleParts = title.split("pré-requisitos");
  const beforeBreak = titleParts[0] || "Quais são os ";
  const afterBreak = titleParts[1] || " para se matricular em uma pós CBI?";

  const afterBreakParts = afterBreak.split("matricular em uma pós CBI?");
  const beforeBold = afterBreakParts[0] || " para se ";
  const boldPart = "matricular em uma pós CBI?";

  return (
    <section className="section bg-primary-light mt-0">
      <div className="container">
        <div className="flex flex-col gap-8 rounded-bl-xl rounded-br-xl pb-space-xl pt-[20px]">
          {}
          <div className="flex flex-col gap-8">
            {}
            <div className="flex flex-col">
              <h2 className="text-left text-[40px] leading-[44px] text-primary-dark">
                <span className="font-normal">{beforeBreak}</span>
                <span className="font-bold">pré-requisitos</span>
                <br />
                <span className="font-normal">{beforeBold}</span>
                <span className="font-bold">{boldPart}</span>
              </h2>
            </div>

            {}
            <div className="flex gap-[35px]">
              {displayPrerequisites.map((prereq, idx) => (
                <div
                  key={idx}
                  className="flex w-[259px] flex-col items-start rounded-md bg-white p-8"
                >
                  <p className="mb-3 text-[48px] font-bold leading-[22px] text-primary">
                    {prereq.number}.
                  </p>
                  <p className="text-[16px] leading-[22px] text-primary-dark">
                    {prereq.title && (
                      <span className="font-bold">{prereq.title}</span>
                    )}
                    {prereq.title && prereq.description && " "}
                    {prereq.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {}
          <p className="text-left text-[14px] italic leading-[18px] text-primary-dark">
            {disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}

export default CoursePrerequisites;

