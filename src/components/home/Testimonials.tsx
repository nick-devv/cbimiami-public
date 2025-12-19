"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
}

interface TestimonialsProps {
  title?: string;
  items?: Testimonial[];
  enabled?: boolean;
}

export function Testimonials({
  title = "O que dizem sobre o CBI",
  items,
  enabled = true,
}: TestimonialsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [paddingLeft, setPaddingLeft] = useState(20);

  useEffect(() => {
    const updatePadding = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setPaddingLeft(rect.left);
      }
    };

    updatePadding();
    window.addEventListener("resize", updatePadding);
    return () => window.removeEventListener("resize", updatePadding);
  }, []);

  if (!enabled) return null;

  const fallbackItems: Testimonial[] = [
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      name: "Juliana Sampaio",
      role: "Cargo, Empresa",
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      name: "Cristina Coimbra",
      role: "Cargo, Empresa",
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      name: "Raquel Marques",
      role: "Cargo, Empresa",
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      name: "Raquel Marques",
      role: "Cargo, Empresa",
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      name: "Maria Silva",
      role: "Cargo, Empresa",
    },
  ];

  const testimonials = items && items.length > 0 ? items : fallbackItems;

  let beforeTitle = "O que dizem sobre o ";
  let boldTitle = "CBI";
  if (title) {
    const match = title.match(/(.*?)\s*(CBI)/i);
    if (match) {
      beforeTitle = match[1] || "O que dizem sobre o ";
      boldTitle = match[2] || "CBI";
    } else {
      
      beforeTitle = "";
      boldTitle = title;
    }
  }

  return (
    <section className="section relative overflow-x-hidden">
      {}
      <div className="absolute left-12 top-[101px] z-0 hidden h-[135px] w-[180px] lg:block 2xl:h-[75px] 2xl:w-[140px]">
        <Image src="/depoimentosIcon.svg" alt="" width={180} height={135} className="h-full w-full" />
      </div>

      <div ref={containerRef} className="container relative z-10">
        {}
        <div className="mb-10 text-left">
          <h2 className="text-4xl leading-tight text-primary-dark">
            <span className="font-normal">{beforeTitle}</span>
            <span className="font-bold">{boldTitle}</span>
          </h2>
        </div>
      </div>

      {}
      <div 
        className="relative z-10"
        style={{ paddingLeft }}
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={3.5}
          autoplay={
            testimonials.length > 4
              ? {
                  delay: 5000,
                  disableOnInteraction: false,
                }
              : false
          }
          loop={testimonials.length > 4}
          className="!pb-4"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={`${testimonial.name}-${index}`}>
              <div className="flex flex-col gap-5">
                {}
                <div className="rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px] bg-primary p-5">
                  <p className="text-lg leading-normal text-white">{testimonial.quote}</p>
                </div>

                {}
                <div className="flex items-center gap-4">
                  {}
                  <div className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-sm bg-primary-light">
                    <Image
                      src={testimonial.avatar || "/depoimentos.png"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {}
                  <div className="flex flex-col">
                    <p className="text-2xl font-bold leading-normal text-primary-dark">{testimonial.name}</p>
                    <p className="text-lg font-normal leading-normal text-primary-dark">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;

