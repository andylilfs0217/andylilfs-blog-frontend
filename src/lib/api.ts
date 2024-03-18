import { Post } from "@/interfaces/post";

const ANDYLILFS_BLOG_BACKEND_API_URL = process.env.ANDYLILFS_BLOG_BACKEND_API_URL;

export async function getPostById(id: string) {
  const response = await fetch(`${ANDYLILFS_BLOG_BACKEND_API_URL}/blogs/${id}`, { cache: 'no-store' });
  const res = await response.json();
  const post = res as Post;
  return post;
}

export async function getAllPosts(): Promise<Post[]> {
  const response = await fetch(`${ANDYLILFS_BLOG_BACKEND_API_URL}/blogs`, { cache: 'no-store' });
  const res = await response.json();
  const posts = res as Post[];
  return posts;
}
