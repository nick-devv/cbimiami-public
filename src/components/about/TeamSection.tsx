import Button from "@/components/common/Button";
import ProfessionalCard from "@/components/common/ProfessionalCard";

interface TeamMember {
  name: string;
  imageUrl?: string;
  href?: string;
}

interface TeamSectionProps {
  title?: string;
  titleBold?: string;
  description?: string;
  dreamTeamTitle?: string;
  members?: TeamMember[];
  ctaLabel?: string;
  ctaHref?: string;
  enabled?: boolean;
}

export function TeamSection({
  title = "Veja quem faz parte da ",
  titleBold = "nossa Equipe",
  description = `Ao chegar no Brasil, o CBI of Miami se preocupou em buscar os melhores profissionais de saúde mental e educação infantil para compor sua equipe de professores, conteudistas, coordenadores e apoiadores.

Gostamos de chamar nossa equipe de Dream Team (equipe dos sonhos), pois juntos a esses profissionais temos a garantia da qualidade de todos os nossos treinamentos e conteúdos.

Todos os profissionais do nosso DREAM TEAM são especialistas com pós-graduação em suas áreas de atuação, sendo mais de 50% deles com mestrado, doutorado ou pós-doutorado no Brasil e no exterior.`,
  dreamTeamTitle = "Dream Team",
  members,
  ctaLabel = "Mostrar mais",
  ctaHref = "/profissionais",
  enabled = true,
}: TeamSectionProps) {
  if (!enabled) return null;

  const defaultMembers: TeamMember[] = [
    { name: "Gustavo Teixeira", imageUrl: "/equipe.png" },
    { name: "Ana Christina Mageste", imageUrl: "/equipe.png" },
    { name: "Liubiana Arantes", imageUrl: "/equipe.png" },
    { name: "Lucelmo Lacerda de Brito", imageUrl: "/equipe.png" },
    { name: "Cesar de Moraes", imageUrl: "/equipe.png" },
    { name: "Marilia Piazzi Seno", imageUrl: "/equipe.png" },
    { name: "Iuri Victor Capelatto", imageUrl: "/equipe.png" },
    { name: "Thiago Barbosa Gusmão", imageUrl: "/equipe.png" },
    { name: "Gabriel Lopes Mangabeira", imageUrl: "/equipe.png" },
    { name: "Aline Kabarite", imageUrl: "/equipe.png" },
  ];

  const displayMembers = members && members.length > 0 ? members : defaultMembers;

  return (
    <section className="section border-l-4 border-primary">
      <div className="container">
        {}
        <div className="mb-10 flex items-start justify-between gap-8">
          {}
          <div className="flex flex-col items-start justify-center rounded-br-lg rounded-tl-lg rounded-tr-lg bg-primary p-5">
            <p className="text-4xl font-bold uppercase leading-tight tracking-tight text-white">
              Dream
            </p>
            <p className="text-5xl font-bold uppercase tracking-tight text-white">
              Team
            </p>
          </div>

          {}
          <div className="max-w-[869px] space-y-4 text-lg leading-relaxed text-primary-dark">
            {description.split("\n\n").map((paragraph, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{ __html: paragraph.replace(/CBI of Miami|Dream Team \(equipe dos sonhos\),|DREAM TEAM/g, "<strong>$&</strong>") }} />
            ))}
          </div>
        </div>

        {}
        <div className="mb-10 text-center">
          <h2 className="text-4xl leading-tight text-primary-dark">
            <span className="font-normal">{title}</span>
            <span className="font-bold">{titleBold}</span>
          </h2>
        </div>

        {}
        <div className="mb-10 space-y-7">
          {}
          <div className="flex justify-between">
            {displayMembers.slice(0, 5).map((member, idx) => (
              <ProfessionalCard
                key={idx}
                name={member.name}
                imageUrl={member.imageUrl}
                href={member.href}
                variant="compact"
              />
            ))}
          </div>

          {}
          {displayMembers.length > 5 && (
            <div className="flex justify-between">
              {displayMembers.slice(5, 10).map((member, idx) => (
                <ProfessionalCard
                  key={idx}
                  name={member.name}
                  imageUrl={member.imageUrl}
                  href={member.href}
                  variant="compact"
                />
              ))}
            </div>
          )}
        </div>

        {}
        <div className="flex justify-center">
          <Button href={ctaHref} variant="secondary">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;

