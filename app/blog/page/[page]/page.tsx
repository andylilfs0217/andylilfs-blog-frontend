import ListLayout from '@/layouts/ListLayoutWithTags'
import { fetchBlogs } from 'services/api'
import { POSTS_PER_PAGE } from 'utils/blog-utils'

export default async function Page({ params }: { params: { page: string } }) {
  const blogs = await fetchBlogs()
  const posts = blogs.blogs
  const pageNumber = parseInt(params.page as string)
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
