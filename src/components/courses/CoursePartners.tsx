"use client";

import { useState } from "react";

interface CoursePartnersProps {
  title?: string;
  videoUrl?: string;
  videoEmbed?: string;
  videoThumbnail?: string;
  enabled?: boolean;
}

export function CoursePartners({
  title = "Entenda tudo o que o curso proporciona",
  videoUrl,
  videoEmbed,
  videoThumbnail,
  enabled = true,
}: CoursePartnersProps) {
  if (!enabled) return null;

  const [isPlaying, setIsPlaying] = useState(false);

  const defaultVideoUrl = "https://www.youtube.com/embed/GO4JS24-wyg?si=3UeBXX5ZFQNDelnD";

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const getEmbedUrl = (url: string): string => {
    if (url.includes("youtube.com/embed/") || url.includes("youtu.be/")) {
      return url;
    }
    if (url.includes("youtube.com/watch?v=")) {
      const videoId = url.split("v=")[1]?.split("&")[0];
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }
    return url;
  };

  const finalVideoUrl = videoUrl || (!videoEmbed ? defaultVideoUrl : undefined);
  const hasVideo = finalVideoUrl || videoEmbed;

  return (
    <section className="section">
      <div className="container">
        <div className="relative flex flex-col items-center justify-center gap-10 py-5">
          <p className="w-[888px] whitespace-pre-wrap text-center font-sans text-[40px] leading-[50px] text-primary-dark">
            <span className="font-normal">Entenda tudo o que o </span>
            <span className="font-bold">curso proporciona</span>
          </p>

          <div className="relative flex h-[429px] w-[888px] items-center justify-center rounded-[30px]">
            <div className="absolute inset-0 pointer-events-none rounded-[30px]">
              <div className="absolute inset-0 rounded-[30px] bg-[#e0e0e0]" />
              {videoThumbnail && !isPlaying && (
                <div className="absolute inset-0 overflow-hidden rounded-[30px]">
                  <img
                    src={videoThumbnail}
                    alt="Thumbnail do vídeo"
                    className="absolute left-[-24.55%] top-[-15.89%] h-[138%] w-full max-w-none"
                  />
                </div>
              )}
              <div className="absolute inset-0 rounded-[30px] bg-gradient-to-r from-[rgba(224,224,224,0)] via-50% to-[#dee5ee] to-[75.056%]" />
            </div>

            {!isPlaying && (
              <button
                onClick={handlePlayClick}
                className="relative z-20 h-[86px] w-[86px]"
                aria-label="Reproduzir vídeo"
              >
                <svg
                  className="h-full w-full text-primary"
                  viewBox="0 0 86 86"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="43" cy="43" r="43" fill="currentColor" />
                  <path
                    d="M35 28L58 43L35 58V28Z"
                    fill="white"
                  />
                </svg>
              </button>
            )}

            {isPlaying && hasVideo && (
              <div className="absolute inset-0 z-20 flex items-center justify-center rounded-[30px]">
                {videoEmbed ? (
                  <div
                    className="h-full w-full rounded-[30px] overflow-hidden"
                    dangerouslySetInnerHTML={{ __html: videoEmbed }}
                  />
                ) : (
                  <iframe
                    src={getEmbedUrl(finalVideoUrl || "")}
                    className="h-full w-full rounded-[30px]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    title="YouTube video player"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                )}
              </div>
            )}

            <div className="pointer-events-none absolute inset-0 z-30">
              <svg
                className="absolute -left-12 bottom-0 h-[170px] w-[101px]"
                xmlns="http://www.w3.org/2000/svg"
                width="101"
                height="170"
                viewBox="0 0 101 170"
                fill="none"
              >
                <path
                  d="M2.12421 78.4854C2.12421 78.4854 -15.0952 166.65 48.5237 169.462C106.79 172.06 101.143 122.905 93.4475 110.652C91.0413 106.836 73.718 81.8009 78.5384 62.2403C84.7175 37.131 109.915 4.72942 96.8323 0.500879C83.7495 -3.72766 23.1902 18.5312 2.14241 78.4583L2.12421 78.4854Z"
                  fill="#F71168"
                />
              </svg>

              <svg
                className="absolute -right-12 top-0 h-[83px] w-[121px]"
                xmlns="http://www.w3.org/2000/svg"
                width="121"
                height="83"
                viewBox="0 0 121 83"
                fill="none"
              >
                <path
                  d="M13.4077 11.4536C13.4077 11.4536 35.726 -5.65392 64.9716 1.94676C94.2172 9.54745 111.807 23.49 118.84 48.1143C125.503 71.4559 115.158 81.2984 109.317 82.6171C98.5352 85.0388 89.9787 75.448 83.4091 68.6026C79.5414 64.5745 64.6405 54.3124 28.6133 56.4703C-7.42711 58.6282 -5.74496 24.3172 13.421 11.4536H13.4077Z"
                  fill="#AFA0F8"
                />
              </svg>

              <svg
                className="absolute -bottom-8 -right-16 h-[175px] w-[269px]"
                xmlns="http://www.w3.org/2000/svg"
                width="269"
                height="175"
                viewBox="0 0 269 175"
                fill="none"
              >
                <path
                  d="M259.897 23.5207C252.037 7.07766 232.694 -2.35129 212.925 0.50775C198.208 2.66096 180.518 9.46041 170.188 28.4066C150.267 64.9786 148.827 75.3029 137.999 89.4118C127.171 103.521 90.8688 124.57 52.1842 115.506C13.4996 106.443 13.0628 101.307 6.85174 103.121C0.640664 104.936 -2.24483 110.555 2.03189 118.245C6.30859 125.935 26.2924 159.694 116.523 172.875C206.754 186.056 275.831 87.6536 267.333 46.4754C265.39 37.0682 262.796 29.5487 259.897 23.5207Z"
                  fill="#0EDFE3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoursePartners;
