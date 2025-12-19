"use client";

import { useState } from "react";

interface CourseAchievementProps {
  title?: string;
  description?: string;
  logoImage?: string;
  videoUrl?: string;
  videoEmbed?: string;
  videoThumbnail?: string;
  enabled?: boolean;
}

export function CourseAchievement({
  title = "Mais uma grande conquista pela causa autista no Brasil.",
  description = "O CBI of Miami é reconhecido pela qualidade de seus treinamentos no Brasil e no mundo, e agora a Pós-graduação em Intervenção ABA para Autismo e Deficiência Intelectual é a primeira da América Latina a conseguir o selo Approved Content Providers (ACP) do International Behavior Analysis Organization (IBAO), um dos principais certificados internacionais de ABA do mundo!",
  logoImage,
  videoUrl,
  videoEmbed,
  videoThumbnail,
  enabled = true,
}: CourseAchievementProps) {
  if (!enabled) return null;

  const [isPlaying, setIsPlaying] = useState(false);

  const defaultVideoUrl = "https://www.youtube.com/embed/GO4JS24-wyg?si=hyS5kePgM_sr7mf8";

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
    <section className="section bg-primary-light mb-0">
      <div className="container">
        <div className="relative flex items-center justify-center rounded-t-xl rounded-tr-xl py-space-xl">
          <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-[5%]">
            <img
              src="/emblema.png"
              alt="Emblema"
              className="h-auto w-auto"
            />
          </div>

          <div className="flex w-[1100px] items-center gap-5 rounded-xl bg-primary px-0 py-6 pr-6">
            <div className="flex min-h-0 min-w-0 flex-1 flex-col items-start gap-5 px-4">
              <div className="relative flex w-full flex-col gap-5">
                <div className="relative flex w-full items-end gap-5">
                  <p className="w-[401px] whitespace-pre-wrap font-display text-[32px] font-bold leading-[36px] text-white">
                    {title}
                  </p>
                  {logoImage && (
                    <div className="absolute left-[421px] top-[-69.38px] flex flex-col items-start rounded-br-[18.384px] rounded-tl-[18.384px] rounded-tr-[18.384px] bg-white px-[12.256px] py-[18.384px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.08)]">
                      <div className="relative aspect-[308/228] w-full">
                        <img
                          src={logoImage}
                          alt="Certificado ACP"
                          className="pointer-events-none absolute inset-0 h-full w-full max-w-none object-cover object-[50%_50%]"
                        />
                      </div>
                    </div>
                  )}
                </div>
                <p className="w-full whitespace-pre-wrap font-display text-base font-normal leading-[1.2] tracking-[0.32px] text-white">
                  {description}
                </p>
              </div>
            </div>

            <div className="relative flex h-[202px] w-[363px] shrink-0 flex-col items-center justify-center overflow-clip rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px] px-[150px] py-[92px]">
              <div className="absolute inset-0 pointer-events-none rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px]">
                {videoThumbnail && !isPlaying && (
                  <div className="absolute inset-0 overflow-hidden rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px]">
                    <img
                      src={videoThumbnail}
                      alt="Thumbnail do vídeo"
                      className="absolute left-0 top-[-17.73%] h-[135.26%] w-full max-w-none"
                    />
                  </div>
                )}
                <div
                  className="absolute inset-0 rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px]"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0) 66.106%, rgba(0, 0, 0, 0) 96.507%), linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%)",
                  }}
                />
              </div>

              {!isPlaying && hasVideo && (
                <button
                  onClick={handlePlayClick}
                  className="relative z-20 h-[66px] w-[66px] shrink-0"
                  aria-label="Reproduzir vídeo"
                >
                  <svg
                    className="h-full w-full"
                    viewBox="0 0 66 66"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="33" cy="33" r="33" fill="white" />
                    <path
                      d="M26 20L42 33L26 46V20Z"
                      fill="#7961f4"
                    />
                  </svg>
                </button>
              )}

              {isPlaying && hasVideo && (
                <div className="absolute inset-0 z-20 flex items-center justify-center rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px]">
                  {videoEmbed ? (
                    <div
                      className="h-full w-full overflow-hidden rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px]"
                      dangerouslySetInnerHTML={{ __html: videoEmbed }}
                    />
                  ) : (
                    <iframe
                      src={getEmbedUrl(finalVideoUrl || "")}
                      className="h-full w-full rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      title="YouTube video player"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseAchievement;

