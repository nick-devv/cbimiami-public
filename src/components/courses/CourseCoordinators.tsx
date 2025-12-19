"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Coordinator {
  name: string;
  title: string;
  image: string;
  isCoordinator?: boolean;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}

interface CourseCoordinatorsProps {
  title?: string;
  coordinators?: Coordinator[];
  enabled?: boolean;
}

export function CourseCoordinators({
  title = "Conheça os nossos Professores Especialistas",
  coordinators,
  enabled = true,
}: CourseCoordinatorsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showArrow, setShowArrow] = useState(true);
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

  const defaultCoordinators: Coordinator[] = [
    {
      name: "Dr. Lucermo Lacerda",
      title: "Doutor em educação",
      image: "/tab01.png",
      isCoordinator: true,
    },
    {
      name: "Dr. Andre Vinícius",
      title: "Doutor em Neurociência",
      image: "/tab01.png",
    },
    {
      name: "Dra. Roberta Colombo",
      title: "Doutora em Análise do Comportamento",
      image: "/tab01.png",
    },
    {
      name: "Dra. Andrea Mello",
      title: "Psicóloga Especialista em Neurodesenvolvimento",
      image: "/tab01.png",
      socialLinks: {
        facebook: "https://www.facebook.com/cbiofmiami",
        instagram: "https://www.instagram.com/cbiofmiami/",
        linkedin: "https://www.linkedin.com/company/cbiofmiami/",
        youtube: "https://www.youtube.com/cbiofmiami",
      },
    },
  ];

  const displayCoordinators = coordinators && coordinators.length > 0 
    ? coordinators 
    : defaultCoordinators;

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 367, 
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowArrow(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  return (
    <section className="section relative overflow-x-hidden">
      <div ref={containerRef} className="container relative z-10">
        <div className="flex flex-col">
          {}
          <div className="flex w-full flex-col items-start">
            <h2 className="text-left text-[40px] leading-[50px] text-[#352d62]">
              <span className="font-normal">Conheça os nossos </span>
              <span className="font-bold">Professores Especialistas</span>
            </h2>
          </div>
        </div>
      </div>

      {}
      <div className="relative z-10" style={{ paddingLeft, marginTop: 28 }}>
        {}
        <div
          className="absolute left-0 top-0 z-0 h-full w-[3000px] rounded-[20px] bg-[#eceaf5]"
          style={{ left: 0 }}
        />
        
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="scrollbar-hide relative z-10 flex gap-10 overflow-x-auto rounded-[20px] py-10 pl-10 pr-0"
        >
              {displayCoordinators.map((coordinator, idx) => (
                <div
                  key={idx}
                  className="relative flex h-[377px] w-[327px] shrink-0 items-end justify-start overflow-hidden rounded-[12px] px-8 py-5"
                >
                  {}
                  <div className="absolute inset-0">
                    <Image
                      src={coordinator.image}
                      alt={coordinator.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[20%] to-black/56" />
                  </div>

                  {}
                  {coordinator.isCoordinator && (
                    <div className="absolute left-8 top-5 flex h-8 w-[180px] items-center justify-center gap-[8px] rounded-[12px] bg-[rgba(249,15,107,0.6)]">
                      <span className="text-center text-[16px] font-bold leading-normal text-white">
                        COORDENADOR
                      </span>
                      {}
                      <div className="absolute left-[160px] top-[18px] flex size-[36px] rotate-[346.263deg] items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="31"
                          height="35"
                          viewBox="0 0 31 35"
                          fill="none"
                        >
                          <path
                            d="M20.8091 10.5261L11.7223 10.9113L9.92573 3.56202C9.68328 2.51096 9.07879 1.57869 8.21812 0.928491C7.35744 0.278292 6.29546 -0.0483872 5.21815 0.00566563C4.56908 0.0526805 3.93808 0.240724 3.36916 0.556681C2.80023 0.872639 2.30708 1.3089 1.9241 1.83505C1.54112 2.36119 1.27753 2.96455 1.15171 3.60304C1.02589 4.24154 1.04087 4.89979 1.19561 5.5319L3.55459 15.1817L0.802897 21.4413C-0.0431046 23.1179 -0.228218 25.0512 0.284254 26.8579C0.796728 28.6646 1.96937 30.2128 3.5697 31.1956L7.9054 33.8587C9.60434 34.8941 11.6447 35.2131 13.5786 34.7456L24.5684 32.059C26.4883 31.5873 28.1426 30.3733 29.1686 28.6834C30.1946 26.9936 30.5084 24.9657 30.0412 23.0448L28.3693 16.2055C27.9566 14.5326 26.9787 13.0537 25.6011 12.0188C24.2235 10.9839 22.5307 10.4566 20.8091 10.5261ZM27.1438 23.7531C27.4256 24.9057 27.2379 26.1231 26.6221 27.1374C26.0063 28.1517 25.0128 28.8799 23.8602 29.1616L12.8703 31.8482C11.7086 32.1286 10.483 31.9362 9.46321 31.3132L5.12645 28.6457C4.1563 28.0451 3.44923 27.0998 3.14722 25.9995C2.84521 24.8992 2.97061 23.7254 3.49825 22.7137L4.71761 19.9393L6.15368 25.8137C6.2476 26.198 6.49031 26.5291 6.82841 26.7344C7.16651 26.9397 7.57231 27.0022 7.95653 26.9083C8.34075 26.8144 8.67192 26.5717 8.87719 26.2336C9.08246 25.8955 9.14501 25.4897 9.05108 25.1054L4.09302 4.8236C4.04109 4.61172 4.03627 4.39103 4.07891 4.17708C4.12154 3.96314 4.2106 3.76115 4.33979 3.58537C4.46898 3.40959 4.63516 3.26429 4.82662 3.15972C5.01807 3.05514 5.23014 2.99385 5.44786 2.98015C5.81959 2.98025 6.17989 3.10869 6.46786 3.34377C6.75582 3.57884 6.9538 3.90613 7.02832 4.27032L9.11531 12.8075C9.19688 13.1415 9.39135 13.4371 9.66579 13.6441C9.94023 13.8512 10.2778 13.9571 10.6213 13.9439L20.9299 13.5073C21.9636 13.4648 22.9802 13.7806 23.8078 14.4013C24.6355 15.022 25.2233 15.9095 25.4719 16.9138L27.1438 23.7531Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  )}

                  {}
                  <div className="relative z-10 flex w-full flex-col gap-1">
                    <p className="text-left text-[18px] font-bold leading-normal text-white">
                      {coordinator.name}
                    </p>
                    <p className="text-left text-[14px] font-normal leading-normal text-white">
                      {coordinator.title}
                    </p>

                    {}
                    {coordinator.socialLinks && (
                      <div className="mt-2 flex items-center justify-start gap-3 rounded-br-[16px] rounded-tr-[16px] py-1 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]">
                        {coordinator.socialLinks.facebook && (
                          <Link
                            href={coordinator.socialLinks.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block size-6"
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"
                                fill="white"
                              />
                            </svg>
                          </Link>
                        )}
                        {coordinator.socialLinks.instagram && (
                          <Link
                            href={coordinator.socialLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block size-6"
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                fill="white"
                              />
                            </svg>
                          </Link>
                        )}
                        {coordinator.socialLinks.linkedin && (
                          <Link
                            href={coordinator.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block size-6"
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                fill="white"
                              />
                            </svg>
                          </Link>
                        )}
                        {coordinator.socialLinks.youtube && (
                          <Link
                            href={coordinator.socialLinks.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block size-6"
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                                fill="white"
                              />
                            </svg>
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
        </div>

        {}
        {showArrow && (
          <button
            onClick={scrollRight}
            className="absolute right-10 top-1/2 z-20 flex size-12 -translate-y-1/2 items-center justify-center transition-all hover:opacity-80"
          >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <rect
                    x="0.500002"
                    y="47.5"
                    width="47"
                    height="47"
                    rx="23.5"
                    transform="rotate(-90 0.500002 47.5)"
                    fill="#0EDFE3"
                  />
                  <rect
                    x="0.500002"
                    y="47.5"
                    width="47"
                    height="47"
                    rx="23.5"
                    transform="rotate(-90 0.500002 47.5)"
                    stroke="#0EDFE3"
                  />
                  <path
                    d="M16.5898 14.82L25.7498 24L16.5898 33.18L19.4098 36L31.4098 24L19.4098 12L16.5898 14.82Z"
                    fill="#7961F4"
                  />
                </svg>
          </button>
        )}
      </div>
    </section>
  );
}

export default CourseCoordinators;

