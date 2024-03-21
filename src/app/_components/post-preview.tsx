import { type Author } from "@/interfaces/author";
import Link from "next/link";
import AuthorAvatar from "./author-avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  updatedAt: string;
  subtitle: string;
  author: Author;
  id: string;
};

export function PostPreview({
  title,
  coverImage,
  updatedAt,
  subtitle,
  author,
  id,
}: Props) {
  return (
    <div>
      {coverImage && coverImage.trim() !== "" && (
        <div className="mb-5">
          <CoverImage id={id} title={title} src={coverImage} />
        </div>
      )}
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/posts/${id}`}
          href="/posts/[id]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={updatedAt} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{subtitle}</p>
      <AuthorAvatar name={author.name} picture={author.picture} />
    </div>
  );
}
