import Link from "next/link";
import { WPImage, WPPost } from "@/lib/wordpress/types";
import { formatDate, truncate } from "@/lib/utils";
import FeaturedImage from "./FeaturedImage";

interface PostCardProps {
  post: WPPost;
  image?: WPImage | null;
  href?: string;
  variant?: "course" | "article";
}

export function PostCard({ post, image, href, variant = "article" }: PostCardProps) {
  const link = href || `/artigos/${post.slug}`;
  const excerpt = truncate(post.excerpt?.rendered ?? "", 140);

  return (
    <article className="flex h-full flex-col rounded-md bg-primary-light p-4">
      <FeaturedImage image={image} alt={post.title.rendered} className="mb-4" />
      <div className="flex flex-1 flex-col gap-3">
        <p className="text-sm font-semibold uppercase text-primary-dark">{formatDate(post.date)}</p>
        <h3 className="text-lg font-semibold text-primary-dark" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        <p className="text-sm text-foreground-strong" dangerouslySetInnerHTML={{ __html: excerpt }} />
        <Link href={link} className="mt-auto text-md font-semibold text-primary underline">
          {variant === "course" ? "Saiba mais" : "Ler mais"}
        </Link>
      </div>
    </article>
  );
}

export default PostCard;

