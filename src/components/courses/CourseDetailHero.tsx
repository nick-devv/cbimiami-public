import Image from "next/image";
import Button from "@/components/common/Button";

interface CourseDetailHeroProps {
  title: string;
  subtitle?: string;
  
  startDateLabel?: string;
  startDateValue?: string;
  modalityLabel?: string;
  modalityValue?: string;
  durationLabel?: string;
  durationValue?: string;
  accessTimeLabel?: string;
  accessTimeValue?: string;
  coordinatorName?: string;
  coordinatorTitle?: string;
  coordinatorRole?: string;
  coordinatorImage?: string;
  price?: string;
  originalPrice?: string;
  discountBadge?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function CourseDetailHero({
  title = "Intervenção ABA para Autismo e Deficiência Intelectual",
  subtitle = "Curso de pós-graduação Lato Sensu com 24 meses de duração e acesso ilimitado a todo conteúdo online por 30 meses.",
  
  startDateLabel = "Turma online.",
  startDateValue = "04/11/2024",
  modalityLabel = "",
  modalityValue = "100% digital",
  durationLabel = "",
  durationValue = "24 meses",
  accessTimeLabel = "",
  accessTimeValue = "30 meses",
  coordinatorName = "Dr. Lucermo Lacerda",
  coordinatorTitle = "Doutor em educação",
  coordinatorRole = "COORDENAÇÃO",
  coordinatorImage = "/depoimentos.png",
  price = "198,28",
  originalPrice = "927,00",
  discountBadge = "Vagas limitadas",
  ctaLabel = "Matricular",
  ctaHref = "#",
}: CourseDetailHeroProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="flex items-start justify-between gap-8">
          {}
          <div className="flex max-w-[617px] flex-col gap-6">
            {}
            <div className="relative h-[84px] w-[526px]">
              <Image
                src="/cursoPresencial.png"
                alt="Curso Presencial"
                fill
                className="object-contain object-left"
              />
            </div>

            {}
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold leading-tight text-primary-dark">
                {title}
              </h1>
              <p className="text-lg text-primary-dark">{subtitle}</p>
            </div>

            {}
            <div className="flex flex-wrap gap-4">
              {}
              <div className="flex items-center gap-2 rounded-lg bg-primary-light px-4 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="10" viewBox="0 0 8 10" fill="none">
                  <path d="M0 0.746838V8.47323C0 9.0624 0.648838 9.42038 1.14852 9.09969L7.21925 5.2365C7.68164 4.94564 7.68164 4.27443 7.21925 3.97611L1.14852 0.120374C0.648838 -0.200316 0 0.157664 0 0.746838Z" fill="#7961F4"/>
                </svg>
                <span className="text-md text-primary-dark">
                  {startDateLabel && <span className="font-normal">{startDateLabel} </span>}
                  <span className="font-bold">{startDateValue}</span>
                </span>
              </div>
              {}
              <div className="flex items-center gap-2 rounded-lg bg-primary-light px-4 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none">
                  <path d="M14.9158 0H1.49158C0.671211 0 0 0.671212 0 1.49158V3.72895H1.49158V1.49158H14.9158V11.9326H9.69528V13.4242H14.9158C15.7362 13.4242 16.4074 12.753 16.4074 11.9326V1.49158C16.4074 0.671212 15.7362 0 14.9158 0ZM0 11.1869V13.4242H2.23737C2.23737 12.1862 1.23801 11.1869 0 11.1869ZM0 8.2037V9.69528C2.05838 9.69528 3.72895 11.3658 3.72895 13.4242H5.22053C5.22053 10.538 2.88621 8.2037 0 8.2037ZM0 5.22053V6.71212C3.70658 6.71212 6.71211 9.71765 6.71211 13.4242H8.2037C8.2037 8.88982 4.52695 5.22053 0 5.22053ZM7.45791 6.03345V7.52503L10.0682 8.94949L12.6784 7.52503V6.03345L10.0682 7.45791L7.45791 6.03345ZM10.0682 2.23737L5.96632 4.47474L10.0682 6.71212L14.17 4.47474L10.0682 2.23737Z" fill="#7961F4"/>
                </svg>
                <span className="text-md text-primary-dark">
                  {modalityLabel && <span className="font-normal">{modalityLabel} </span>}
                  <span className="font-bold">{modalityValue}</span>
                </span>
              </div>
              {}
              <div className="flex items-center gap-2 rounded-lg bg-primary-light px-4 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                  <path d="M8.94949 0H4.47474V1.49158H8.94949V0Z" fill="#7961F4"/>
                  <path d="M11.955 4.7656L13.014 3.70658C12.6934 3.32623 12.3428 2.96825 11.9625 2.65501L10.9035 3.71404C9.74748 2.78926 8.29319 2.23737 6.71212 2.23737C3.00554 2.23737 0 5.24291 0 8.94949C0 12.6561 2.99808 15.6616 6.71212 15.6616C10.4262 15.6616 13.4242 12.6561 13.4242 8.94949C13.4242 7.36841 12.8723 5.91412 11.955 4.7656ZM7.45791 9.69528H5.96632V5.22053H7.45791V9.69528Z" fill="#7961F4"/>
                </svg>
                <span className="text-md text-primary-dark">
                  {durationLabel && <span className="font-normal">{durationLabel} </span>}
                  <span className="font-bold">{durationValue}</span>
                </span>
              </div>
              {}
              <div className="flex items-center gap-2 rounded-lg bg-primary-light px-4 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">
                  <path d="M13.4242 1.49158H12.6784V0H11.1869V1.49158H3.72895V0H2.23737V1.49158H1.49158C0.671212 1.49158 0 2.16279 0 2.98316V14.9158C0 15.7362 0.671212 16.4074 1.49158 16.4074H13.4242C14.2446 16.4074 14.9158 15.7362 14.9158 14.9158V2.98316C14.9158 2.16279 14.2446 1.49158 13.4242 1.49158ZM13.4242 14.9158H1.49158V5.22053H13.4242V14.9158Z" fill="#7961F4"/>
                </svg>
                <span className="text-md text-primary-dark">
                  {accessTimeLabel && <span className="font-normal">{accessTimeLabel} </span>}
                  <span className="font-bold">{accessTimeValue}</span>
                </span>
              </div>
            </div>

            {}
            <div className="flex items-start gap-4">
              <div className="relative h-[52px] w-[54px] shrink-0 overflow-hidden rounded-[12px] border border-primary">
                <Image
                  src={coordinatorImage}
                  alt={coordinatorName}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-medium uppercase text-primary">{coordinatorRole}</span>
                <span className="text-[20px] font-bold text-[#352D62]">{coordinatorName}</span>
                <span className="text-[14px] font-medium text-[#352D62]">{coordinatorTitle}</span>
              </div>
            </div>
          </div>

          {}
          <div className="relative flex w-[326px] flex-col items-start gap-4 rounded-lg bg-[#ECEAF5] p-8">
            {}
            <svg 
              className="absolute -right-2 -top-2" 
              xmlns="http://www.w3.org/2000/svg" 
              width="82" 
              height="101" 
              viewBox="0 0 82 101" 
              fill="none"
            >
              <path d="M26.393 0.0317988C26.393 0.0317988 50.7489 -1.60114 66.2359 18.5305C81.7229 38.6622 85.9089 57.7231 77.1571 79.4779C68.8583 100.097 56.5223 102.274 51.8766 100.357C43.3082 96.8114 42.809 85.4556 42.142 77.1212C41.7484 72.216 37.3544 57.2182 11.9709 40.9662C-13.4216 24.7076 6.48641 0.0847566 26.4019 0.0383692L26.393 0.0317988Z" fill="#7961F4"/>
            </svg>

            {}
            <svg 
              className="absolute -bottom-4 -left-4" 
              xmlns="http://www.w3.org/2000/svg" 
              width="108" 
              height="119" 
              viewBox="0 0 108 119" 
              fill="none"
            >
              <path d="M100.109 108.104C107.571 101.652 109.717 90.9562 105.381 82.1136C102.14 75.5344 96.0432 68.3297 84.6582 66.6242C62.6844 63.3414 57.0826 64.3868 48.1536 61.6385C39.2246 58.8903 23.0064 45.2908 22.1805 25.5378C21.3547 5.78489 23.9754 4.72108 22.1342 2.09582C20.2931 -0.529438 16.942 -0.951208 13.5387 2.34975C10.1353 5.65071 -4.63097 20.7118 1.4544 65.4553C7.53979 110.199 68.8891 126.329 89.1839 115.444C93.82 112.957 97.3761 110.477 100.109 108.104Z" fill="#0EDFE3"/>
            </svg>

            {}
            <div className="relative z-10 flex flex-col items-start gap-2">
              <span className="text-[28px] font-bold text-[#352D62]">Mensalidade</span>
              <div className="flex flex-col items-start">
                <span className="text-[24px] font-normal text-[#352D62] line-through">
                  De: {originalPrice}
                </span>
                <span className="font-sans text-[40px] font-bold text-primary">
                  Por: {price}
                </span>
              </div>
            </div>

            {}
            <div className="relative z-10 rounded-[17px] border border-secondary px-3 py-2">
              <span className="text-[16px] font-bold uppercase tracking-wide text-primary-dark">
                {discountBadge}
              </span>
            </div>

            <p className="relative z-10 text-left text-[16px] font-semibold text-[#352D62]">
              Bolsa de estudo aplicada a todas as mensalidades
            </p>

            <Button href={ctaHref} variant="secondary" className="relative z-10">
              {ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseDetailHero;

