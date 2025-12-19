import { WPImage, WPPost } from "@/lib/wordpress/types";
import PostCard from "./PostCard";

interface PostListProps {
  posts: WPPost[];
  images?: Record<number, WPImage | null>;
  variant?: "course" | "article";
}

export function PostList({ posts, images = {}, variant = "article" }: PostListProps) {
  if (!posts.length) return <p className="text-sm text-foreground-strong">Nenhum conteúdo encontrado.</p>;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          image={images[post.featured_media || 0]}
          variant={variant}
          href={variant === "course" ? `/curso/${post.slug}` : `/artigos/${post.slug}`}
        />
      ))}
    </div>
  );
}

export default PostList;

