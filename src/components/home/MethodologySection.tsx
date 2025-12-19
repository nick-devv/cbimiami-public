import Button from "@/components/common/Button";

interface MethodologyItem {
  title: string;
  description: string;
  icon?: string;
}

interface MethodologySectionProps {
  title?: string;
  description?: string;
  items?: MethodologyItem[];
  ctaLabel?: string;
  ctaHref?: string;
  enabled?: boolean;
}

export function MethodologySection({
  title = "Metodologia VAHA",
  description = "O CBI of Miami possui uma metodologia de ensino importada de universidades americanas e europeias que garante que todo o aprendizado seja absorvido pelos alunos. Para cada módulo, existe um ciclo que garante a absorção do conteúdo não só no curto prazo, mas também no longo prazo.",
  items = [
    { 
      title: "Vídeo Aulas", 
      description: "Na primeira etapa, o aluno assiste às videoaulas com especialistas.\nÉ aqui que o conteúdo inicial é absorvido e registrado na memória de curto prazo." 
    },
    { 
      title: "Artigos e Cases", 
      description: "Na segunda etapa, o aluno aplica a teoria em artigos e cases reais.\nEsse processo começa a transformar o aprendizado da memória de curto prazo para a de longo prazo." 
    },
    { 
      title: "Hangout", 
      description: "Na terceira etapa, acontecem os hangouts com especialistas, com dinâmicas e tira-dúvidas.\nNessa fase, o conhecimento se consolida de vez na memória de longo prazo." 
    },
    { 
      title: "Avaliação", 
      description: "Por último, acontece a avaliação.\nNessa etapa, o aluno realiza um teste básico para garantir que o conhecimento permaneça na memória de longo prazo." 
    },
  ],
  ctaLabel = "Conhecer o Instituto",
  ctaHref = "/sobre",
  enabled = true,
}: MethodologySectionProps) {
  if (!enabled) return null;

  const defaultIcons: Record<string, string> = {
    "Vídeo Aulas": "/video.svg",
    "Artigos e Cases": "/news.svg",
    "Hangout": "/hangout.svg",
    "Avaliação": "/avaliacao.svg",
  };

  const getIcon = (itemTitle: string, customIcon?: string) => {
    const iconSrc = customIcon || defaultIcons[itemTitle] || "";
    if (iconSrc) {
      return <img src={iconSrc} alt="" className="h-6 w-7" />;
    }
    return null;
  };

  return (
    <section className="section">
      <div className="container">
        <div className="rounded-xl bg-primary-light p-10">
          <div className="flex flex-col items-center gap-5">
            {}
            <div className="flex flex-col items-center text-center">
              <h2 className="text-4xl font-bold text-primary-dark">{title}</h2>
              <p className="max-w-[752px] text-md leading-snug text-primary-dark">
                {description}
              </p>
            </div>

            {}
            <div className="w-full space-y-7">
              {}
              <div className="flex gap-7">
                {items.slice(0, 2).map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-1 flex-col gap-2 rounded-md bg-primary px-5 py-6"
                  >
                    {}
                    <div className="flex items-center gap-space-xs rounded-lg bg-white px-3 py-2">
                      <div className="flex h-6 items-center justify-center text-primary">
                        {getIcon(item.title, item.icon)}
                      </div>
                      <h3 className="text-xl font-bold leading-snug text-primary-dark">
                        {item.title}
                      </h3>
                    </div>
                    {}
                    <div className="flex-1 space-y-[17px]">
                      {item.description.split('\n').map((line, idx) => (
                        <p key={idx} className="text-md leading-tight text-white">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {}
              <div className="flex gap-7">
                {items.slice(2, 4).map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-1 flex-col gap-2 rounded-md bg-primary px-5 py-6"
                  >
                    {}
                    <div className="flex items-center gap-space-xs rounded-xl bg-white px-3 py-2">
                      <div className="flex h-6 items-center justify-center text-primary">
                        {getIcon(item.title, item.icon)}
                      </div>
                      <h3 className="text-xl font-bold leading-snug text-primary-dark">
                        {item.title}
                      </h3>
                    </div>
                    {}
                    <div className="flex-1 space-y-[17px]">
                      {item.description.split('\n').map((line, idx) => (
                        <p key={idx} className="text-md leading-tight text-white">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {}
            <Button href={ctaHref} variant="secondary" className="mt-5 self-center">
              {ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MethodologySection;

