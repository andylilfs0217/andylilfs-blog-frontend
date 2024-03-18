import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default async function Index() {
  const allPosts = await getAllPosts();

  const heroPost = allPosts && allPosts[0];

  const morePosts = allPosts && allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        {heroPost && (<HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          updatedAt={heroPost.updatedAt}
          author={heroPost.author}
          id={heroPost.id}
          subtitle={heroPost.subtitle}
        />)}
        {morePosts && morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
