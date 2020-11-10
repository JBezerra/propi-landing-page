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

      <div className={styles.welcomeContainer}>

        <div className={styles.welcomeTextContainer}>
          <div className={styles.welcomeTitleContainer}>
            <h1>Burocracia de imóveis Simplificada</h1>
            <p>Resolva toda a burocracia documental de imóveis online, em poucos minutos e sem sair de casa.</p>
          </div>
          <button>Começar</button>
        </div>

        <div className={styles.welcomeHeroContainer}>
          <img src='/assets/images/hero.svg' alt='Propi' />
        </div>

      </div>

      <div className={styles.featureContainer}>
        <h1>Focamos na burocracia, o corretor em fechar negócio</h1>
        <p>Entenda todos os nossos serviços.</p>

        <div className={styles.featureItemsContainer}>
          <div className={styles.featureItemContainer}>
            <div className={styles.featureItemTextContainer}>
              <h3>Emissão automática de certidões</h3>
              <p>Solicite todas as certidões públicas e documentos de cartório com um clique</p>
            </div>
          </div>

          <div className={styles.featureItemContainer}>
            <div className={styles.featureItemTextContainer}>
              <h3>Coleta centralizada de documentos</h3>
              <p>Colete os documentos do cliente enviando um link para upload de arquivos</p>
            </div>
          </div>

          <div className={styles.featureItemContainer}>
            <div className={styles.featureItemTextContainer}>
              <h3>Pré-análise de pendências</h3>
              <p>Saiba quais documentos e certidões tem pendências e destrave seus negócios</p>
            </div>
          </div>

          <div className={styles.featureItemContainer}>
            <div className={styles.featureItemTextContainer}>
              <h3>Assinatura online de contratos</h3>
              <p>Assine documentos online, com validade jurídica, sem precisar ir até o cartório</p>
            </div>
          </div>

        </div>
      </div>

    </div>

  )
}
