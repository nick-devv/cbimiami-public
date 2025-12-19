import Image from "next/image";

interface CourseTargetAudienceProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  enabled?: boolean;
}

export function CourseTargetAudience({
  title = "Público-alvo",
  subtitle = "Psicólogos e profissionais da saúde mental e educação.",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices laoreet tempor. Suspendisse in dolor mauris. Donec tincidunt sit amet massa vitae tincidunt.",
  imageUrl = "/publicoalvo.png",
  enabled = true,
}: CourseTargetAudienceProps) {
  if (!enabled) return null;

  return (
    <section className="section">
      <div className="container">
        <div className="rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] border border-primary px-10 py-5">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-10">
            {}
            <div className="flex flex-col gap-1 text-primary-dark lg:flex-[2]">
              <h2 className="text-[32px] font-bold leading-[30px]">{title}</h2>
              <p className="text-md font-bold leading-tight">{subtitle}</p>
              <p className="text-md font-normal leading-tight">{description}</p>
            </div>

            {}
            <div className="relative h-[150px] w-full overflow-hidden rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] lg:h-[122px] lg:w-[450px] lg:shrink-0">
              <Image
                src={imageUrl}
                alt="Público-alvo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseTargetAudience;

