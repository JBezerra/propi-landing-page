import Head from 'next/head'
import styles from '../styles/Landing.module.css'

export default function Landing() {
  return (
    <div id={styles.landingContainer} className='container'>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet"></link>
      </Head>

      <div className={styles.topContainer}>
        <img src='/assets/images/logo.svg' alt='Propi' />
      </div>

      <div className={styles.mainContent}>

        <div className={styles.mainTextContainer}>
          <div className={styles.titleContainer}>
            <h1>Burocracia de imóveis Simplificada</h1>
            <p>Resolva toda a burocracia documental de imóveis online, em poucos minutos e sem sair de casa.</p>
          </div>
          <button>Começar</button>
        </div>

        <div className={styles.heroContainer}>
          <img src='/assets/images/hero.svg' alt='Propi' />
        </div>

      </div>
    </div>

  )
}
