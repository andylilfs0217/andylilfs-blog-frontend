import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostById } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";

export default async function Post({ params }: Params) {
  const post = await getPostById(params.id);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Container>
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            updatedAt={post.updatedAt}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getPostById(params.id);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Andy's Blog`;

  return {
    title,
    openGraph: {
      title,
      images: [HOME_OG_IMAGE_URL],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post.id,
  }));
}
