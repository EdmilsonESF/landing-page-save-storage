import GlobalStyle from '../styles/pages/GlobalStyle'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500&display=swap" rel="stylesheet"/>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
