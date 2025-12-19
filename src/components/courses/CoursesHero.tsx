import Image from "next/image";

interface CoursesHeroProps {
  title?: string;
  titleHighlight?: string;
  description?: string;
  certificationText?: string;
  imageUrl?: string;
}

function CertificationIcon({ className = "" }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 44 55" 
      fill="none"
      className={className}
    >
      <path 
        d="M19.03 28.6821L22 26.4942L24.9425 28.6554C26.015 29.4291 27.4725 28.4419 27.0875 27.1879L25.9325 23.5593L29.2325 21.0246C30.25 20.2775 29.6725 18.6767 28.3525 18.6767H24.5025L23.32 15.1014C22.9075 13.8741 21.12 13.8741 20.7075 15.1014L19.4975 18.6767H15.62C14.3275 18.6767 13.75 20.2775 14.7675 21.0513L18.04 23.586L16.885 27.2146C16.5 28.4686 17.9575 29.4558 19.03 28.6821ZM5.5 52.3214C5.5 54.1357 7.3425 55.4164 9.13 54.8561L22 50.6939L34.87 54.8561C36.6575 55.4431 38.5 54.1624 38.5 52.3214V35.4323C41.91 31.6703 44 26.761 44 21.3448C44 9.55179 34.155 0 22 0C9.845 0 0 9.55179 0 21.3448C0 26.761 2.09 31.6703 5.5 35.4323V52.3214ZM22 5.3362C31.1025 5.3362 38.5 12.5134 38.5 21.3448C38.5 30.1762 31.1025 37.3534 22 37.3534C12.8975 37.3534 5.5 30.1762 5.5 21.3448C5.5 12.5134 12.8975 5.3362 22 5.3362Z" 
        fill="#7961F4"
      />
    </svg>
  );
}

export function CoursesHero({
  title = "Pós Graduação",
  titleHighlight = "Lato Sensu",
  description = "Todas as pós-graduações são online e os cursos são lecionados pelos principais profissionais de cada assunto, trazendo aulas em formato de vídeo, textos explicativos e bate-papo com o especialista em formato de hang-out.",
  certificationText,
  imageUrl = "/cursoPresencial.png",
}: CoursesHeroProps) {
  
  const defaultCertificationPrefix = "Cursos com ";
  const defaultCertificationHighlight = "Certificação Internacional CBI";

  return (
    <section className="pb-6 pt-4">
      <div className="container">
        <div className="flex flex-col gap-6">
          {}
          <div className="relative h-[180px] w-[280px]">
            <Image
              src={imageUrl}
              alt="Cursos CBI"
              fill
              className="object-contain"
              priority
            />
          </div>

          {}
          <div className="flex max-w-[714px] flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h1 className="text-[44px] leading-tight text-primary-dark">
                <span className="font-bold">{title} </span>
                <span className="font-normal">{titleHighlight}</span>
              </h1>
              <p className="text-lg leading-relaxed text-dark-500">
                {description}
              </p>
            </div>

            {}
            <div className="relative inline-flex w-fit items-center rounded-full border-2 border-primary py-2 pl-12 pr-4">
              {}
              <div className="absolute -left-[15px] top-0 rounded-full bg-white">
                <CertificationIcon className="h-[55px] w-[44px]" />
              </div>
              <p className="text-2xl text-primary-dark">
                {certificationText ? (
                  certificationText
                ) : (
                  <>
                    <span className="font-normal">{defaultCertificationPrefix}</span>
                    <span className="font-bold">{defaultCertificationHighlight}</span>
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

export default CoursesHero;
