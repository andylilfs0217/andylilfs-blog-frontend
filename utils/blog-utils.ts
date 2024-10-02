import { BlogPost } from 'models/blogs'

export const POSTS_PER_PAGE = 2

export function currentPage(id: string, posts: BlogPost[]) {
  const postIndex = posts.findIndex((p) => p.id === id)
  const pageNumber = Math.floor(postIndex / POSTS_PER_PAGE) + 1
  return pageNumber
}

export function getTagData(posts: BlogPost[]): Record<string, number> {
  const tagData: Record<string, number> = {}
  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (tagData[tag]) {
        tagData[tag] += 1
      } else {
        tagData[tag] = 1
      }
    })
  })
  return tagData
}
