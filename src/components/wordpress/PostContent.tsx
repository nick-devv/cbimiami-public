interface PostContentProps {
  html?: string;
}

export function PostContent({ html }: PostContentProps) {
  if (!html) return null;
  return (
    <div className="prose prose-lg prose-primary max-w-none">
      {}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default PostContent;

