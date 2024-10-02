/**
 * Represents a list of blog posts along with a count of the total number of posts.
 */
export interface BlogPostList {
  count: number
  blogs: BlogPost[]
}

/**
 * Represents a blog post with various metadata and content.
 *
 * @interface BlogPost
 *
 * @property {string} id - The unique identifier for the blog post.
 * @property {string} title - The title of the blog post.
 * @property {string} date - The publication date of the blog post.
 * @property {string[]} tags - An array of tags associated with the blog post.
 * @property {string} lastmod - The last modification date of the blog post.
 * @property {boolean} draft - Indicates if the blog post is a draft.
 * @property {string} summary - A brief summary of the blog post.
 * @property {any} images - Images associated with the blog post. Consider defining a more specific type.
 * @property {string[]} authors - An array of authors who contributed to the blog post.
 * @property {string} layout - The layout used for the blog post.
 * @property {string} bibliography - Bibliographic references for the blog post.
 * @property {string} canonicalURL - The canonical URL of the blog post.
 * @property {string} content - The main content of the blog post.
 */
export interface BlogPost {
  id: string
  title: string
  date: string
  tags: string[]
  lastmod: string
  draft: boolean
  summary: string
  images: any // Assuming JSON can be any type, you might want to define a more specific type
  authors: string[]
  layout: string
  bibliography: string
  canonicalURL: string
  content: string
}
