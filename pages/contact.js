import Head from 'next/head'
import styles from '../styles/Contact.module.css'

export default function Contact() {
    return (
        <div id={styles.contactContainer} className='container'>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet"></link>
            </Head>

            <div className={styles.topContainer}>
                <img src='/assets/images/logo-black.svg' alt='Propi' />
            </div>

            <div className={styles.formContainer}>
                <h1>Foque em fechar negócio</h1>
                <h3>Acelere a burocracia documental do imóveis com um clique e sem sair de casa.</h3>
                <br />
                <p>Por favor, preencha as informações abaixo e entraremos em contato em instantes.</p>
                <form>
                    <img src='/assets/images/envelope.svg' alt='Envelope' />
                    <input type='text' placeholder='Nome' />
                    <input type='text' placeholder='Email' />
                    <input type='number' placeholder='Telefone' />
                </form>
                <button>Enviar</button>
            </div>

            <div className={styles.footerContainer}>
                <div className={styles.footerContentAreaContainer}>
                    <div className={styles.footerInformationsContainer}>
                        <div className={styles.footerDescriptionContainer}>
                            <img src='/assets/images/logo-white.svg' alt='Propi' />
                            <p>A Propi é uma plataforma que simplifica a burocracia documental de imóveis para imobiliárias. Automatizamos o trabalho repetitivo para o corretor economizar tempo, dinheiro e focar em fecha negócio.</p>
                        </div>
                        <div className={styles.footerContactContainer}>
                            <h2>Contato</h2>
                            <div className={styles.footerContactInformationContainer}>
                                <img src='/assets/images/phone.svg' alt='Telefone' />
                                <h4>+55 11 981790503</h4>
                            </div>

                            <div className={styles.footerContactInformationContainer}>
                                <img src='/assets/images/envelope.svg' alt='Envelope' />
                                <h4>contato@propi.com.br</h4>
                            </div>
                        </div>
                    </div>
                    <p>© 2020 Propi</p>
                </div>

            </div>
        </div >

    )
}
