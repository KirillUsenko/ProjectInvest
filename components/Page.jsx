import Head from 'next/head'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import styles from '../styles/Page.module.scss'

const Page = ({ title, children }) => {
  return (
    <div className="content">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main className={'container' + ' ' + styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Page
