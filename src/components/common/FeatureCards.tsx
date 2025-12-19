import Link from "next/link";

interface FeatureItem {
  icon?: React.ReactNode;
  number?: string;
  title: string;
  description?: string;
  link?: {
    label: string;
    href: string;
  };
}

interface FeatureCardsProps {
  title?: string;
  items: FeatureItem[];
  layout?: "horizontal" | "vertical";
  variant?: "compact" | "default";
  cardBackground?: string;
  enabled?: boolean;
}

export function FeatureCards({
  title,
  items,
  layout = "horizontal",
  variant = "default",
  cardBackground = "bg-primary-light",
  enabled = true,
}: FeatureCardsProps) {
  if (!enabled) return null;

  const isHorizontal = layout === "horizontal";
  const isCompact = variant === "compact";

  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col gap-3">
          {title && (
            <h2 className={`font-bold text-primary-dark ${isCompact ? "text-xl" : "mb-5 max-w-[743px] text-3xl leading-tight"}`}>
              {title}
            </h2>
          )}
          
          <div className={`flex ${isHorizontal ? "flex-col gap-4 md:flex-row" : "gap-0"} `}>
            {items.map((item, idx) => (
              <article
                key={idx}
                className={
                  isHorizontal
                    ? `flex min-w-0 flex-1 gap-4 rounded-md ${cardBackground} px-4 py-5`
                    : "flex w-[220px] flex-col"
                }
              >
                {isHorizontal ? (
                  
                  <div className="flex flex-col gap-3">
                    {}
                    <div className="flex items-center gap-3">
                      {}
                      <div className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-md bg-primary">
                        {item.icon || (
                          item.number ? (
                            <span className="text-md font-bold text-white">{item.number}</span>
                          ) : (
                            <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                            </svg>
                          )
                        )}
                      </div>
                      {}
                      <h3 className="text-lg font-bold leading-tight text-primary-dark">
                        {item.title}
                      </h3>
                    </div>

                    {}
                    {item.description && (
                      <p className="text-sm leading-relaxed text-dark-500">
                        {item.description}
                      </p>
                    )}

                    {}
                    {item.link && (
                      <Link
                        href={item.link.href}
                        className="text-sm font-bold text-primary-dark underline decoration-primary-dark"
                      >
                        {item.link.label}
                      </Link>
                    )}
                  </div>
                ) : (
                  
                  <>
                    {}
                    <div className="flex h-[56px] items-center gap-2 border-b border-primary/20">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xs bg-primary">
                        {item.icon || (
                          <span className="text-md font-bold text-white">{item.number || idx + 1}</span>
                        )}
                      </div>
                      <span className="text-md font-semibold text-primary-dark">{item.title}</span>
                    </div>

                    {}
                    {item.description && (
                      <div className="border-l border-primary/20 py-4 pl-4">
                        <p className="text-sm leading-relaxed text-primary-dark">{item.description}</p>
                      </div>
                    )}
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureCards;

