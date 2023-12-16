import ContactPage from '@/components/contact'
import { NextPage } from 'next'
import Head from 'next/head'

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vion Nguyen - Contact Me</title>
        <meta name='og:title' content='Hi, I am Vion - Frontend Developer' />
        <meta name='og:description' content='Contact About Me' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ContactPage />
    </>
  )
}

export default Blog
