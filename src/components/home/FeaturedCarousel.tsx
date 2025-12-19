import Link from "next/link";
import { getTaxonomyTerms } from "@/lib/wordpress/client";
import { WPTerm } from "@/lib/wordpress/types";

interface FeaturedCarouselProps {
  title?: string;
  items?: Array<{ title: string; image?: string; href?: string }>;
  enabled?: boolean;
}

async function loadCategories() {
  const categories = await getTaxonomyTerms("categoria_curso");
  return { categories };
}

export async function FeaturedCarousel({
  title = "Programas educacionais ideais para seu momento",
  items,
  enabled = true,
}: FeaturedCarouselProps) {
  if (!enabled) return null;

  let displayItems: Array<{ title: string; image?: string; href: string }> = [];
  
  if (items && items.length > 0) {
    displayItems = items.map(item => ({
      title: item.title,
      image: item.image,
      href: item.href || `/categoria-curso/${item.title.toLowerCase().replace(/\s+/g, '-')}`,
    }));
  } else {
    
    const { categories } = await loadCategories();
    displayItems = categories.slice(0, 3).map(category => {
      
      const image = category.category_image && category.category_image.trim() !== '' 
        ? category.category_image 
        : undefined;
      
      return {
        title: category.name,
        image,
        href: `/categoria-curso/${category.slug}`,
      };
    });

    displayItems = displayItems.map((item, index) => {
      if (!item.image) {
        const fallbackImages = ["/cursoCat01.png", "/cursoCat02.png", "/cursoCat03.png"];
        return { ...item, image: fallbackImages[index] || undefined };
      }
      return item;
    });

    if (displayItems.length === 0) {
      displayItems = [
        { title: "Pós Graduação", image: "/cursoCat01.png", href: "/categoria-curso/pos-graduacao" },
        { title: "Cursos Profissionalizantes", image: "/cursoCat02.png", href: "/categoria-curso/cursos-profissionalizantes" },
        { title: "Cursos de extensão", image: "/cursoCat03.png", href: "/categoria-curso/cursos-de-extensao" },
      ];
    }
  }

  return (
    <section className="section border-l-[3.556px] border-primary">
      <div className="container">
        <div className="flex flex-col items-center gap-10">
          {}
          <h2 className="text-center text-5xl leading-tight text-primary-dark">
            <span className="font-bold">Programas educacionais</span>
            {' '}
            <span>ideais para seu momento</span>
          </h2>

          {}
          <div className="flex w-full gap-6">
            {displayItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group relative flex flex-1 flex-col items-start overflow-hidden rounded-sm p-6"
              >
                {}
                {item.image ? (
                  <>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 rounded-sm bg-black/10" />
                    {}
                    <img
                      src={item.image}
                      alt=""
                      className="w-full opacity-0 pointer-events-none"
                      aria-hidden="true"
                    />
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 rounded-sm bg-primary-light" />
                    <div className="h-[528px] w-full opacity-0 pointer-events-none" aria-hidden="true" />
                  </>
                )}

                {}
                <div className="relative z-10 mt-auto flex h-10 w-fit items-center gap-2 rounded-sm bg-secondary px-4 py-3 transition-all group-hover:bg-primary-dark">
                  <p className="text-md font-bold leading-none text-white">
                    {item.title}
                  </p>
                  <img src="/arrowR.svg" alt="" className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCarousel;

