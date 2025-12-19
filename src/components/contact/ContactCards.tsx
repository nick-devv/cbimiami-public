import Link from "next/link";

interface ContactCardsProps {
  title?: string;
  subtitle?: string;
  notStudentTitle?: string;
  notStudentSubtitle?: string;
  notStudentCtaLabel?: string;
  notStudentCtaHref?: string;
  studentTitle?: string;
  studentSubtitle?: string;
  studentCtaLabel?: string;
  studentCtaHref?: string;
  enabled?: boolean;
}

export function ContactCards({
  title = "Precisa de mais informações?",
  subtitle = "Nosso time está de prontidão para tirar todas as suas dúvidas. Selecione uma das opções abaixo e te atenderemos em breve.",
  notStudentTitle = "Ainda não é aluno?",
  notStudentSubtitle = "Entre em contato com um consultor especializado.",
  notStudentCtaLabel = "Contato",
  notStudentCtaHref = "https://wa.me/5511999999999",
  studentTitle = "Já é nosso aluno?",
  studentSubtitle = "Acesse o portal de atendimento ao aluno.",
  studentCtaLabel = "Contato",
  studentCtaHref = "/portal-aluno",
  enabled = true,
}: ContactCardsProps) {
  if (!enabled) return null;

  return (
    <section className="section">
      <div className="container">
        {}
        <div className="mb-10 flex flex-col gap-1">
          <h1 className="text-4xl font-bold leading-tight text-primary-dark">
            {title}
          </h1>
          <p className="max-w-[586px] text-xl text-primary-dark">{subtitle}</p>
        </div>

        {}
        <div className="flex gap-5">
          {}
          <div className="flex flex-1 flex-col items-center justify-center gap-5 rounded-sm bg-primary p-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white">{notStudentTitle}</h3>
              <p className="text-md text-white">{notStudentSubtitle}</p>
            </div>
            <Link
              href={notStudentCtaHref}
              className="min-w-[160px] rounded-xs bg-white px-4 py-3 text-center text-md font-bold uppercase text-primary-dark transition-colors hover:bg-primary-light"
            >
              {notStudentCtaLabel}
            </Link>
          </div>

          {}
          <div className="flex flex-1 flex-col items-center justify-center gap-5 rounded-sm bg-primary/10 p-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary-dark">{studentTitle}</h3>
              <p className="text-md text-primary-dark">{studentSubtitle}</p>
            </div>
            <Link
              href={studentCtaHref}
              className="min-w-[160px] rounded-xs bg-primary px-4 py-3 text-center text-md font-bold uppercase text-white transition-colors hover:bg-primary-dark"
            >
              {studentCtaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCards;

