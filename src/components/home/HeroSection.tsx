'use client';

import { useRef, useState } from "react";
import Image from "next/image";
import Button from "@/components/common/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export interface HeroSlide {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageUrl?: string;
  enableCta?: boolean;
}

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageUrl?: string;
  enableCta?: boolean;
  items?: HeroSlide[];
  autoplay?: boolean;
}

export function HeroSection({
  items,
  autoplay = false,
}: HeroSectionProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const defaultSlides: HeroSlide[] = [
    { 
      title: "Transformamos vidas através da educação <span>— a começar pela sua.</span>",
      subtitle: "O CBI of Miami tem o propósito de dar acesso, independência e oportunidades para pessoas com autismo e outros transtornos.",
      ctaLabel: "Saber mais",
      ctaHref: "/",
      imageUrl: "/heroFallback.png",
      enableCta: true
    },
    {
      title: "Segundo slide de exemplo",
      subtitle: "Este é um segundo slide para demonstrar a navegação do carrossel.",
      ctaLabel: "Ver mais",
      ctaHref: "/cursos",
      imageUrl: "/heroFallback.png",
      enableCta: true
    }
  ];
  
  const slides: HeroSlide[] = items && items.length > 0 
    ? items 
    : defaultSlides;

  const stripHtml = (html: string) => html.replace(/<[^>]*>/g, "");

  return (
    <section className="section">
      <div className="container relative">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={slides.length > 1}
          autoplay={autoplay ? { delay: 5000, disableOnInteraction: false } : false}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="hero-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="grid gap-10 md:grid-cols-2 md:items-center">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-3">
                    <h2 className="text-primary-dark" dangerouslySetInnerHTML={{ __html: slide.title || "" }} />
                    <p className="text-xl">{slide.subtitle}</p>
                    {slide.enableCta && (
                      <Button href={slide.ctaHref || "#"} variant="secondary" className="self-start">
                        {slide.ctaLabel}
                      </Button>
                    )}
                  </div>

                  {slides.length > 1 && (
                    <div className="flex items-center justify-start gap-2">
                      {slides.map((_, dotIndex) => (
                        <button
                          key={dotIndex}
                          onClick={() => swiperRef.current?.slideToLoop(dotIndex)}
                          className={`h-3 w-12 rounded-lg transition-all ${
                            dotIndex === activeIndex 
                              ? "bg-primary" 
                              : "bg-primary/20 hover:bg-primary/40"
                          }`}
                          aria-label={`Ir para slide ${dotIndex + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
                <div className="relative flex justify-center">
                  <Image
                    src={slide.imageUrl || "/heroFallback.png"}
                    alt={stripHtml(slide.title || "Hero")}
                    width={520}
                    height={360}
                    className="h-auto w-full max-w-lg rounded-xl object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {slides.length > 1 && (
          <>
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute -left-10 top-1/2 z-10 -translate-y-1/2"
              aria-label="Slide anterior"
            >
              <img src="/arrowHR.svg" alt="Anterior" className="w-[17px] h-[31px]" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute -right-10 top-1/2 z-10 -translate-y-1/2"
              aria-label="Próximo slide"
            >
              <img src="/arrowHL.svg" alt="Próximo" className="w-[17px] h-[31px]" />
            </button>
          </>
        )}
      </div>
    </section>
  );
}

export default HeroSection;

