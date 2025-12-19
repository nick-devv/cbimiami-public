import Link from "next/link";

interface CTAWhatsAppProps {
  
  variant?: "default" | "simple";
  
  title?: string;
  titleBold?: string;
  description?: string;
  
  subtitleText?: string;
  mainText?: string;
  
  buttonLabel?: string;
  buttonHref?: string;
  enabled?: boolean;
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function EnvelopeIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

export function CTAWhatsApp({
  variant = "default",
  
  title = "Ainda precisa de ",
  titleBold = "alguma ajuda?",
  description = "Identifique hoje mesmo o melhor curso para seu momento profissional. Basta clicar no botão para falar diretamente com nossos consultores de carreira.",
  
  subtitleText = "Precisa de mais informações?",
  mainText = "Entrar em Contato",
  
  buttonLabel = "Fale Conosco",
  buttonHref = "https://wa.me/5511999999999",
  enabled = true,
}: CTAWhatsAppProps) {
  if (!enabled) return null;

  if (variant === "simple") {
    return (
      <section className="section py-20 px-4 bg-primary-light rounded-tl-lg rounded-tr-lg">
        <div className="container">
          <div className="flex flex-col gap-1">
            {}
            <div className="flex flex-col gap-0">
              <span className="text-3xl md:text-[40px] font-normal text-primary leading-tight">
                {subtitleText}
              </span>
              <span className="text-4xl md:text-[63px] font-bold text-primary-dark leading-tight">
                {mainText}
              </span>
            </div>

            {}
            <Link
              href={buttonHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit items-center gap-4 rounded-br-lg rounded-tl-lg rounded-tr-lg bg-green/80 px-6 py-2.5 font-bold text-white transition-opacity hover:opacity-90"
            >
              <WhatsAppIcon className="h-9 w-9" />
              <span className="text-2xl">{buttonLabel}</span>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section cta-last">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-8 rounded-br-lg rounded-tl-lg rounded-tr-lg bg-primary px-10 py-10 md:flex-row md:px-[60px]">
          {}
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl leading-tight text-white">
              <span className="font-normal">{title}</span>
              <span className="font-bold">{titleBold}</span>
            </h2>
            <p className="max-w-[778px] text-lg leading-snug text-white">
              {description}
            </p>
            <Link
              href={buttonHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit items-center gap-3 rounded-bl-lg rounded-tl-lg rounded-tr-lg bg-green px-5 py-2 font-bold text-white transition-opacity hover:opacity-90"
            >
              <WhatsAppIcon className="h-7 w-7" />
              <span className="text-lg">{buttonLabel}</span>
            </Link>
          </div>

          {}
          <div className="flex h-[146px] w-[146px] shrink-0 items-center justify-center rounded-br-lg rounded-tl-lg rounded-tr-lg bg-white">
            <EnvelopeIcon className="h-[88px] w-[88px] text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTAWhatsApp;
