import Layout from '../src/components/layout/Index'
import './../styles/style.scss'

function MyApp({ Component, pageProps }) {
  return (
    
      <Layout>
        <Component {...pageProps} />
      </Layout>
    
    
  )
}

export default MyApp
