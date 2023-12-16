import Head from 'next/head'
import HomePage from '@/components/home'
import CONFIG from '@/config/production.config'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vion Nguyen - Blogs and About Me</title>
        <meta name='title' content='Hi, I am Vion - Frontend Developer' />
        <meta
          name='description'
          content="I'm glad you here, welcome to visit my blog"
        />
        <meta name='og:title' content='Hi, I am Vion - Frontend Developer' />
        <meta
          name='og:description'
          content="I'm glad you here, welcome to visit my blog"
        />
        <meta
          name='og:author'
          content='Vion Nguyen - facebook.com/minhhiep.vip99'
        />
        <meta
          name='og:image'
          content={`${CONFIG.IMAGE_CDN_URL}/banner.png?updatedAt=1702729186930`}
        />
        <meta
          name='image'
          content={`${CONFIG.IMAGE_CDN_URL}/banner.png?updatedAt=1702729186930`}
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/nemo.favicon.ico' />
      </Head>
      <HomePage />
    </>
  )
}
