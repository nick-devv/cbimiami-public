import { Button } from "../common/Button";

interface InfoHighlightProps {
  title?: string;
  text?: string;
  buttonLabel?: string;
  buttonHref?: string;
  mediaType?: "image" | "video";
  mediaUrl?: string;
  background?: "primary" | "secondary" | "light" | "transparent";
  layout?: "container" | "infinite-right";
  enableTitle?: boolean;
  enableText?: boolean;
  enableButton?: boolean;
  enabled?: boolean;
}

const bgMap: Record<NonNullable<InfoHighlightProps["background"]>, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  light: "bg-primary-light",
  transparent: "bg-transparent",
};

const DEFAULT_TITLE = "As maiores referências<span>da sua área</span>";
const DEFAULT_TEXT = "A qualidade do professor impacta 60% do aprendizado. Por isso, selecionamos os maiores especialistas do Brasil para cada um dos cursos do CBI.";

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

export function InfoHighlightV1({
  title,
  text,
  buttonLabel = "Saiba mais",
  buttonHref = "#",
  mediaType = "image",
  mediaUrl = "/infoHighlight.png",
  background = "light",
  layout = "container",
  enableTitle = true,
  enableText = true,
  enableButton = true,
  enabled = true,
}: InfoHighlightProps) {
  if (!enabled) return null;
  const bgClass = bgMap[background];
  
  const buttonVariant = background === "secondary" ? "primary" : "secondary";
  
  const textColor = background === "primary" || background === "secondary" 
    ? "text-white" 
    : "text-primary-dark";

  const displayTitle = (title && typeof title === 'string' && title.trim()) ? title : DEFAULT_TITLE;
  const displayText = (text && typeof text === 'string' && text.trim()) ? text : DEFAULT_TEXT;

  const containerPadding = layout === "container" 
    ? (background === "transparent" ? "px-10 py-0" : "p-10")
    : "";

  return (
    <section className={`relative overflow-hidden section ${layout === "infinite-right" ? "overflow-x-hidden" : ""} ${layout === "container" ? bgClass : ""}`}>
      <div className={`container relative grid gap-0 md:grid-cols-2 md:items-center rounded-xl ${containerPadding}`}>
          <div className={`relative z-10 flex flex-col gap-4 ${layout === "infinite-right" ? `${bgClass} pl-10 py-space-xl rounded-tl-xl rounded-bl-xl rounded-tr-none rounded-br-none` : ""}`}>
            {layout === "infinite-right" && (
              <div className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-[3000px] bg-inherit rounded-tl-xl rounded-bl-xl" style={{ transform: "translateX(0%)" }} />
            )}
            {enableTitle && <h2 className={textColor} dangerouslySetInnerHTML={{ __html: displayTitle }} />}
            {enableText && <div className={textColor} dangerouslySetInnerHTML={{ __html: displayText }} />}
            {enableButton && (
              <div className="self-start">
                <Button href={buttonHref} variant={buttonVariant}>
                  {buttonLabel}
                </Button>
              </div>
            )}
          </div>
          <div className="relative z-10">
            {mediaType === "video" ? (
              <div className="aspect-video w-full overflow-hidden rounded-md bg-black/10">
                <iframe src={mediaUrl} className="h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            ) : (
              <img src={mediaUrl} alt={stripHtml(displayTitle)} className="w-full rounded-md object-cover" />
            )}
          </div>
        </div>
    </section>
  );
}

export default InfoHighlightV1;

