import Button from "@/components/common/Button";
import ProfessionalCard from "@/components/common/ProfessionalCard";

interface Professional {
  name: string;
  description?: string;
  imageUrl?: string;
  href?: string;
  linkedinUrl?: string;
}

interface ProfessionalsGridProps {
  title?: string;
  subtitle?: string;
  professionals?: Professional[];
  ctaLabel?: string;
  ctaHref?: string;
  showCta?: boolean;
  enabled?: boolean;
}

export function ProfessionalsGrid({
  title = "Nossos profissionais",
  subtitle = "Conecte-se com nosso Corpo Docente CBI. Selecionamos um time composto pelos especialistas, mestres e doutores mais requisitados no Brasil e afora.",
  professionals,
  ctaLabel = "Mostrar mais",
  ctaHref = "#",
  showCta = true,
  enabled = true,
}: ProfessionalsGridProps) {
  if (!enabled) return null;

  const defaultProfessionals: Professional[] = [
    {
      name: "Gustavo Teixeira Teixeira",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, leo at commodo cursus, ex enim blandit justo, ac consectetur nisl libero nec eros. Integer imperdiet urna ante, mollis pulvinar metus bibendum eget. Nulla maximus diam vitae pharetra luctus. Nam luctus quam non pellentesque auctor. Mauris facilisis augue sit amet nibh fringilla malesuada.",
      imageUrl: "/equipe.png",
      linkedinUrl: "https://www.linkedin.com/in/gustavo-teixeira",
    },
    {
      name: "Ana Christina Mageste",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, leo at commodo cursus, ex enim blandit justo, ac consectetur nisl libero nec eros. Integer imperdiet urna ante, mollis pulvinar metus bibendum eget. Nulla maximus diam vitae pharetra luctus. Nam luctus quam non pellentesque auctor. Mauris facilisis augue sit amet nibh fringilla malesuada.",
      imageUrl: "/equipe.png",
      linkedinUrl: "https://www.linkedin.com/in/ana-christina-mageste",
    },
    {
      name: "Liubiana Arantes",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, leo at commodo cursus, ex enim blandit justo, ac consectetur nisl libero nec eros. Integer imperdiet urna ante, mollis pulvinar metus bibendum eget. Nulla maximus diam vitae pharetra luctus. Nam luctus quam non pellentesque auctor. Mauris facilisis augue sit amet nibh fringilla malesuada.",
      imageUrl: "/equipe.png",
      linkedinUrl: "https://www.linkedin.com/in/liubiana-arantes",
    },
    {
      name: "Lucelmo Lacerda de Brito",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, leo at commodo cursus, ex enim blandit justo, ac consectetur nisl libero nec eros. Integer imperdiet urna ante, mollis pulvinar metus bibendum eget. Nulla maximus diam vitae pharetra luctus. Nam luctus quam non pellentesque auctor. Mauris facilisis augue sit amet nibh fringilla malesuada.",
      imageUrl: "/equipe.png",
      linkedinUrl: "https://www.linkedin.com/in/lucelmo-lacerda",
    },
  ];

  const displayProfessionals = professionals && professionals.length > 0 
    ? professionals 
    : defaultProfessionals;

  const rows: Professional[][] = [];
  for (let i = 0; i < displayProfessionals.length; i += 4) {
    rows.push(displayProfessionals.slice(i, i + 4));
  }

  return (
    <section className="section">
      <div className="container">
        {}
        <div className="mb-[60px] flex flex-col gap-2">
          <h1 className="text-4xl font-bold leading-tight text-primary-dark">
            {title}
          </h1>
          <p className="max-w-[706px] text-xl text-primary-dark">{subtitle}</p>
        </div>

        {}
        <div className="mb-[60px] space-y-[60px]">
          {rows.map((row, rowIdx) => (
            <div key={rowIdx} className="flex justify-center gap-6">
              {row.map((professional, idx) => (
                <ProfessionalCard
                  key={idx}
                  name={professional.name}
                  description={professional.description}
                  imageUrl={professional.imageUrl}
                  href={professional.href}
                  linkedinUrl={professional.linkedinUrl}
                  variant="full"
                />
              ))}
            </div>
          ))}
        </div>

        {}
        {showCta && (
          <div className="flex justify-center">
            <Button href={ctaHref} variant="secondary">
              {ctaLabel}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProfessionalsGrid;

