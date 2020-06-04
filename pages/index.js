import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Trying out a Next.JS tutorial as I'm stuck in lockdown and had 5 days holiday that I had to take 👍
        </p>
      </section>
    </Layout>
  )
}