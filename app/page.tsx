import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import { fetchBlogs } from 'services/api'

export default async function Page() {
  const blogPostList = await fetchBlogs()
  const posts = blogPostList.blogs
  return <Main posts={posts} />
}
