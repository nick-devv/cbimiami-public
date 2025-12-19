import Image from "next/image";
import { WPImage } from "@/lib/wordpress/types";

interface FeaturedImageProps {
  image?: WPImage | null;
  alt?: string;
  priority?: boolean;
  className?: string;
}

export function FeaturedImage({ image, alt, priority = false, className }: FeaturedImageProps) {
  if (!image?.source_url) return null;
  return (
    <div className={className}>
      <Image
        src={image.source_url}
        alt={alt || image.alt_text || ""}
        width={800}
        height={450}
        className="h-auto w-full rounded-md object-cover"
        priority={priority}
      />
    </div>
  );
}

export default FeaturedImage;

