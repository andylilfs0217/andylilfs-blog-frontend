import { Post } from "@/interfaces/post";

const ANDYLILFS_BLOG_BACKEND_API_URL = process.env.ANDYLILFS_BLOG_BACKEND_API_URL;
const REVALIDATE_TIME = parseInt(process.env.REVALIDATE_TIME ?? "60");

export async function getPostById(id: string) {
  const response = await fetch(`${ANDYLILFS_BLOG_BACKEND_API_URL}/blogs/${id}`, { next: { revalidate: REVALIDATE_TIME } });
  const res = await response.json();
  const post = res as Post;
  return post;
}

export async function getAllPosts(): Promise<Post[]> {
  const response = await fetch(`${ANDYLILFS_BLOG_BACKEND_API_URL}/blogs`, { next: { revalidate: REVALIDATE_TIME } });
  const res = await response.json();
  const posts = res as Post[];
  return posts;
}
