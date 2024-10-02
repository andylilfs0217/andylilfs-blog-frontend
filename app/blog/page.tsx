import ListLayout from '@/layouts/ListLayoutWithTags'
import { genPageMetadata } from 'app/seo'
import { fetchBlogs } from 'services/api'
import { POSTS_PER_PAGE } from 'utils/blog-utils'

export const metadata = genPageMetadata({ title: 'Blog' })

export default async function BlogPage() {
  const blogs = await fetchBlogs()
  const posts = blogs.blogs
  const pageNumber = 1
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  )
}
