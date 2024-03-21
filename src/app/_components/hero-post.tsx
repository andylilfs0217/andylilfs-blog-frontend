import AuthorAvatar from "@/app/_components/author-avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  updatedAt: string;
  subtitle: string;
  author: Author;
  id: string;
};

export function HeroPost({
  title,
  coverImage,
  updatedAt,
  subtitle,
  author,
  id,
}: Props) {
  return (
    <section>
      {coverImage && coverImage.trim() !== "" && (
        <div className="mb-8 md:mb-16">
          <CoverImage title={title} src={coverImage} id={id} />
        </div>
      )}
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/posts/${id}`}
              href="/posts/[id]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={updatedAt} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{subtitle}</p>
          <AuthorAvatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
}
