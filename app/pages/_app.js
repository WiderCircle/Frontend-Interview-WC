import Head from 'next/head';
import { Montserrat } from 'next/font/google'
import '../styles/global.css';

const montserrat = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Patient Referral Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}