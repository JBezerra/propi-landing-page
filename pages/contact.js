import { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Contact.module.css'

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    async function sendEmailHandler() {
        const { status } = await fetch('/api/send-email',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, phone })
            })
        if (status == 200) {
            setEmailSent(true)
        }
    }

    return (
        <div id={styles.contactContainer} className='container'>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet"></link>
            </Head>

            {emailSent &&
                <div className={styles.emailSentContainer}>
                    <div className={styles.emailSentCardContainer}>
                        <img src='/assets/images/smartphone-love.svg' alt='Smartphone' />
                        <h1>E-mail enviado!</h1>
                        <p>Enviaremos uma resposta o mais rápido possível =)</p>
                        <Link href="/"><button>Ir para home</button></Link>
                    </div>
                </div>
            }

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
                    <input type='text' placeholder='Nome' onChange={(e) => setName(e.target.value)} />
                    <input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    <input type='text' placeholder='Telefone' onChange={(e) => setPhone(e.target.value)} />
                </form>
                <button onClick={sendEmailHandler}>Enviar</button>
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
