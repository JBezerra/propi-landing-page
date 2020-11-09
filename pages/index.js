import Head from 'next/head'
import styles from '../styles/LandingPage.module.css'

export default function LandingPage() {
  return (
    <div id={styles.landingPageContainer} className='container'>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <div className={styles.topContainer}>
        <h1>Hello World!</h1>
      </div>
    </div>

  )
}
