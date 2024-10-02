import 'css/prism.css'
import 'katex/dist/katex.css'

import PageTitle from '@/components/PageTitle'
import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import { allAuthors, allBlogs } from 'contentlayer/generated'
import type { Authors } from 'contentlayer/generated'
import PostSimple from '@/layouts/PostSimple'
import PostLayout from '@/layouts/PostLayout'
import PostBanner from '@/layouts/PostBanner'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { notFound } from 'next/navigation'
import { fetchBlogs } from 'services/api'
import md from 'markdown-it'

const defaultLayout = 'PostLayout'
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
}

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata | undefined> {
  const { id } = params
  const blogs = await fetchBlogs()
  const posts = blogs.blogs
  siteMetadata.posts = posts
  const post = posts.find((p) => p.id === id)
  const authorList = post?.authors || ['default']
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author)
    return coreContent(authorResults as Authors)
  })
  if (!post) {
    return
  }

  const publishedAt = new Date(post.date).toISOString()
  const modifiedAt = new Date(post.lastmod || post.date).toISOString()
  const authors = authorDetails.map((author) => author.name)
  let imageList = [siteMetadata.socialBanner]
  if (post.images) {
    imageList = typeof post.images === 'string' ? [post.images] : post.images
  }
  const ogImages = imageList.map((img) => {
    return {
      url: img.includes('http') ? img : siteMetadata.siteUrl + img,
    }
  })

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: imageList,
    },
  }
}

// export const generateStaticParams = async () => {
//   return allBlogs.map((p) => ({ slug: p.slug.split('/').map((name) => decodeURI(name)) }))
// }

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params
  const blogs = await fetchBlogs()
  const posts = blogs.blogs
  const postIndex = posts.findIndex((p) => p.id === id)
  const post = posts[postIndex]

  if (postIndex === -1) {
    return notFound()
  }

  const prev = posts[postIndex + 1]
  const next = posts[postIndex - 1]
  const authorList = post?.authors || ['default']
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author)
    return coreContent(authorResults as Authors)
  })

  const Layout = layouts[post?.layout || defaultLayout]

  return (
    <>
      <Layout content={post} authorDetails={authorDetails} next={next} prev={prev}>
        <div dangerouslySetInnerHTML={{ __html: md().render(post.content) }}></div>
      </Layout>
    </>
  )
}
