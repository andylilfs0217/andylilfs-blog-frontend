import { BlogPostList } from 'models/blogs'

const BLOG_BACKEND_URL = process.env.BLOG_POST_BACKEND_URL

/**
 * Fetches a list of blog posts from the server.
 *
 * @returns {Promise<BlogPostList>} A promise that resolves to a list of blog posts.
 * @throws {Error} If the request fails.
 */
export async function fetchBlogs(): Promise<BlogPostList> {
  if (!BLOG_BACKEND_URL) {
    throw new Error('BLOG_BACKEND_URL is not defined')
  }
  const response = await fetch(`${BLOG_BACKEND_URL}/blogs`)
  if (!response.ok) {
    throw new Error('Failed to fetch blogs')
  }

  return response.json() as Promise<BlogPostList>
}
