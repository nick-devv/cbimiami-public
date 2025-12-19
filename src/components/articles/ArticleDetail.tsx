import Image from "next/image";
import ArticleCard from "@/components/common/ArticleCard";

interface RelatedArticle {
  title: string;
  excerpt?: string;
  imageUrl?: string;
  date?: string;
  href?: string;
}

interface ArticleDetailProps {
  title: string;
  author?: string;
  date?: string;
  readTime?: string;
  imageUrl?: string;
  content?: string;
  relatedArticles?: RelatedArticle[];
}

function formatDate(dateString?: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function ArticleDetail({
  title,
  author = "Marcelo Filipe",
  date,
  readTime = "5 minutos de leitura",
  imageUrl = "/noticia01.png",
  content,
  relatedArticles,
}: ArticleDetailProps) {
  
  const defaultContent = `O Autismo (TEA — Transtorno do Espectro Autista) e a Deficiência Intelectual (DI) são condições que impactam o desenvolvimento, a comunicação e o aprendizado. Apesar de diferentes entre si, podem estar presentes simultaneamente em uma mesma pessoa. Por isso, compreender as necessidades e potencialidades de cada indivíduo é essencial para promover inclusão, autonomia e qualidade de vida.

Se você é familiar, educador ou profissional de saúde, confira 7 dicas essenciais para oferecer apoio adequado e humanizado:

## 1. Comunicação clara e adaptada
Nem todas as pessoas com TEA e DI apresentam boa habilidade verbal. Utilize frases simples, objetivas e, se necessário, apoios visuais como imagens e gestos. A comunicação alternativa pode facilitar a compreensão e evitar frustrações.

## 2. Estabeleça rotinas
A previsibilidade traz segurança. Criar uma rotina estruturada ajuda a organizar o dia e diminui a ansiedade diante de mudanças. Use quadros de atividades ou agendas visuais para reforçar o que será feito.

## 3. Reforce comportamentos positivos
Elogie e reconheça as conquistas — mesmo as pequenas! O reforço positivo é uma poderosa ferramenta para estimular aprendizados e promover confiança e motivação.

## 4. Respeite o tempo de cada um
Pessoas com TEA e DI têm ritmos diferentes de aprendizagem. Evite comparações e ofereça tempo para assimilar novos conteúdos ou habilidades. O progresso pode ser mais lento, mas cada avanço é significativo.

## 5. Estimule a autonomia
Incentive a participação em tarefas do cotidiano, como arrumar o próprio espaço ou escolher suas roupas. Simplifique os passos e, sempre que possível, permita que a pessoa realize atividades sozinha — mesmo que leve mais tempo.

## 6. Promova a integração social
Atividades em grupo, momentos de lazer e convivência ajudam a desenvolver habilidades sociais e emocionais. O apoio adequado pode favorecer conexões verdadeiras e fortalecer a autoestima.

## 7. Peça ajuda profissional sempre que necessário
Ter o acompanhamento de profissionais capacitados — como psicólogos, terapeutas ocupacionais, fonoaudiólogos e educadores especializados — contribui para a evolução do desenvolvimento e melhora da qualidade de vida.

## Por uma inclusão real e afetuosa
A convivência com pessoas com Autismo e Deficiência Intelectual nos ensina a olhar além das limitações e valorizar o que há de mais único em cada ser humano. O acolhimento, o respeito e o amor devem ser sempre o ponto de partida.

Com informação e empatia, todos podemos contribuir para um mundo mais acessível e inclusivo. 💙🧩

**Lembre-se: apoio, paciência e empatia transformam vidas.**`;

  const defaultRelatedArticles: RelatedArticle[] = [
    {
      title: "7 dicas para Autismo e Deficiência Intelectual",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, leo at commodo cursus, ex enim blandit justo.",
      imageUrl: "/noticia01.png",
      date: "2025-11-20",
      href: "/artigos/7-dicas-autismo",
    },
    {
      title: "7 dicas para Autismo e Deficiência Intelectual",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, leo at commodo cursus, ex enim blandit justo.",
      imageUrl: "/noticia02.png",
      date: "2025-11-20",
      href: "/artigos/7-dicas-autismo-2",
    },
    {
      title: "7 dicas para Autismo e Deficiência Intelectual",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, leo at commodo cursus, ex enim blandit justo.",
      imageUrl: "/noticia03.png",
      date: "2025-11-20",
      href: "/artigos/7-dicas-autismo-3",
    },
    {
      title: "7 dicas para Autismo e Deficiência Intelectual",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, leo at commodo cursus, ex enim blandit justo.",
      imageUrl: "/noticia01.png",
      date: "2025-11-20",
      href: "/artigos/7-dicas-autismo-4",
    },
  ];

  const displayContent = content || defaultContent;
  const displayRelatedArticles = relatedArticles && relatedArticles.length > 0 
    ? relatedArticles 
    : defaultRelatedArticles;

  const processContent = (text: string) => {
    return text.split("\n\n").map((paragraph, idx) => {
      if (paragraph.startsWith("## ")) {
        const headingText = paragraph.replace("## ", "");
        
        const numberMatch = headingText.match(/^(\d+)\./);
        if (numberMatch) {
          return (
            <h3 key={idx} className="mb-4 mt-8 text-2xl font-bold text-primary-dark">
              <span className="text-primary">{numberMatch[1]}.</span>
              {headingText.replace(/^\d+\./, "")}
            </h3>
          );
        }
        return (
          <h3 key={idx} className="mb-4 mt-8 text-2xl font-bold text-primary-dark">
            {headingText}
          </h3>
        );
      }
      if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
        return (
          <p key={idx} className="mb-4 text-2xl font-bold text-primary">
            {paragraph.replace(/\*\*/g, "")}
          </p>
        );
      }
      return (
        <p key={idx} className="mb-4 text-md leading-relaxed text-primary-dark">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div>
      {}
      <section className="section">
        <div className="container">
          <div className="flex flex-col gap-5">
            {}
            <div className="relative h-[156px] w-full max-w-[596px] overflow-hidden rounded-br-sm rounded-tl-sm rounded-tr-sm">
              <Image src={imageUrl} alt={title} fill className="object-cover" />
            </div>

            {}
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-bold tracking-tight text-primary-dark">
                {title}
              </h1>
              <div className="flex items-center gap-8 text-xs text-primary-dark">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <span className="font-bold">Por {author}</span>
                </div>
                {date && (
                  <span className="font-light">{formatDate(date)}</span>
                )}
                <span className="font-light">{readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="section">
        <div className="container">
          <article className="max-w-[796px]">
            {processContent(displayContent)}
          </article>
        </div>
      </section>

      {}
      <section className="section">
        <div className="container">
          <h2 className="mb-5 text-2xl font-bold text-primary-dark">
            Artigos recomendados
          </h2>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {displayRelatedArticles.map((article, idx) => (
              <ArticleCard
                key={idx}
                title={article.title}
                excerpt={article.excerpt}
                imageUrl={article.imageUrl}
                date={article.date}
                href={article.href}
                variant="compact"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticleDetail;

