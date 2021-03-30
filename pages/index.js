import Head from 'next/head'
import Experience from '../src/components/experience'
import Layout from '../src/components/layout'

export default function Home() {
  return (

    <Layout>
      <Head>
        <title>Mir Ashiful Karim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Experience />
    </Layout>
    

    
  )
}
