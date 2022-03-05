import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Script defer async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9362505928898272"
     crossorigin="anonymous" data-ad-client="ca-pub-9362505928898272"></Script>
     <Component {...pageProps} />
    </>
     
  )
}

export default MyApp
