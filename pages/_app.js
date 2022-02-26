import '../styles/globals.css'
import Script from 'next/script'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Head>
      <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js'></Script>
    </Head>
     <Component {...pageProps} />
    </>
     
  )
}

export default MyApp
