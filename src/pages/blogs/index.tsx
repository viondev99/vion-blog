import BlogPage from '@/components/blogs'
import { NextPage } from 'next'
import Head from 'next/head'

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vion Nguyen - My Blog</title>
        <meta name='og:title' content='Hi, I am Vion - Frontend Developer' />
        <meta name='og:description' content='All of blogs, write to feel' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <BlogPage />
    </>
  )
}

export default Blog
