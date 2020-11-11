import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Landing.module.css'

export default function Landing() {
  return (
    <div id={styles.landingContainer} className='container'>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet"></link>
      </Head>

      <div className={styles.topContainer}>
        <img src='/assets/images/logo-black.svg' alt='Propi' />
      </div>

      <div className={styles.welcomeContainer}>

        <div className={styles.welcomeTextContainer}>
          <div className={styles.welcomeTitleContainer}>
            <h1>Burocracia de imóveis Simplificada</h1>
            <p>Resolva toda a burocracia documental de imóveis online, em poucos minutos e sem sair de casa.</p>
          </div>
          <Link href="/contact"><button>Começar</button></Link>
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

      <div className={styles.testDriveContainer}>
        <h1>Faça um teste Grátis!</h1>
        <div className={styles.testDriveButtonContainer}>
          <Link href="/contact"><h4>Quero Testar</h4></Link>
        </div>
      </div>

      <div className={styles.marketValueContainer}>
        <h1>Porque a Propi?</h1>

        <div className={styles.marketValueItemsContainer}>
          <div className={styles.marketValueItemContainer}>
            <div className={styles.marketValueItemTitleContainer}>
              <img src='/assets/images/budget.svg' alt='Dinheiro' />
              <h3>Economize</h3>
            </div>
            <p>Através de bots, a Propi automatiza a coleta todas as certidões públicas e documentos cartórios, economizando muito tempo e dinheiro para imobiliária ou corretor.</p>
          </div>

          <div className={styles.marketValueItemContainer}>
            <div className={styles.marketValueItemTitleContainer}>
              <img src='/assets/images/aim.svg' alt='Mira' />
              <h3>Centralize</h3>
            </div>
            <p>Você não precisa contratar vários serviços para resolver o mesmo problema. Emita Certidões, pague boletos, colete documentação e assine contratos, tudo centralizado em um só lugar.</p>
          </div>

          <div className={styles.marketValueItemContainer}>
            <div className={styles.marketValueItemTitleContainer}>
              <img src='/assets/images/running.svg' alt='Homem correndo' />
              <h3>Agilize</h3>
            </div>
            <p>A plataforma da Propi acelera o fechamento da transação imobiliária, sendo muito mais barato e rápido que um despachante. Chega de desconfiança, lentidão ou cancelamento de negócios.</p>
          </div>
        </div>
        <div className={styles.marketValueItemsContainer}>
          <div className={styles.marketValueItemContainer}>
            <div className={styles.marketValueItemTitleContainer}>
              <img src='/assets/images/target.svg' alt='Alvo' />
              <h3>Foque no negócio</h3>
            </div>
            <p>Cuidamos da burocracia para que o corretor foque em fechar negócio, fazendo o trabalho repetitivo, demorado e pontual que toma boa parte do seu tempo.</p>
          </div>

          <div className={styles.marketValueItemContainer}>
            <div className={styles.marketValueItemTitleContainer}>
              <img src='/assets/images/shield.svg' alt='Escudo' />
              <h3>Seguro</h3>
            </div>
            <p>A pré-análise da Propi alerta pendências e acusa qualquer documento que possa travar a transação, dando mais segurança jurídica ao processo.</p>
          </div>

          <div className={styles.marketValueItemContainer}>
            <div className={styles.marketValueItemTitleContainer}>
              <img src='/assets/images/parking.svg' alt='Carro estacionado' />
              <h3>Sem Deslocamento</h3>
            </div>
            <p>Com a plataforma da Propi você não precisa mais ir até cartórios. Você faz solicitações, consultas e assinaturas online, com validade jurídica, sem sair de casa. </p>
          </div>
        </div>
      </div>

      <div className={styles.howItWorksContainer}>
        <h1>Como funciona</h1>
        <div className={styles.howItWorksItemsContainer}>
          <div className={styles.howItWorksItemContainer}>
            <img src='/assets/images/circle-pen.svg' alt='Caneta' />
            <h5>1</h5>
            <h4>Cadastro</h4>
            <p>Faça o cadastro na plataforma da Propi</p>
          </div>
          <img src='/assets/images/arrow-right.svg' alt='Seta para direita' />
          <div className={styles.howItWorksItemContainer}>
            <img src='/assets/images/circle-card.svg' alt='Caneta' />
            <h5>2</h5>
            <h4>Crédito</h4>
            <p>Selecione o pacote de créditos ideal para você</p>
          </div>
          <img src='/assets/images/arrow-right.svg' alt='Seta para direita' />
          <div className={styles.howItWorksItemContainer}>
            <img src='/assets/images/circle-tag.svg' alt='Caneta' />
            <h5>3</h5>
            <h4>Escolha</h4>
            <p>Escolha o serviço que deseja solicitar</p>
          </div>
          <img src='/assets/images/arrow-right.svg' alt='Seta para direita' />
          <div className={styles.howItWorksItemContainer}>
            <img src='/assets/images/circle-file.svg' alt='Caneta' />
            <h5>4</h5>
            <h4>Acompanhe</h4>
            <p>Acompanhe todo o processo documental online</p>
          </div>
        </div>
      </div>

      <div className={styles.plansContainer}>
        <h1>Créditos</h1>
        <div className={styles.plansItemsContainer}>
          <div className={styles.plansItemContainer}>
            <div className={styles.plansContentAreaContainer}>
              <div className={styles.plansItemTextContainer}>
                <h2>Básico</h2>
                <p>10 Créditos</p>
                <h1>R$ 15,00</h1>
              </div>
              <Link href="/contact"><button>Quero testar</button></Link>
            </div>
          </div>

          <div className={styles.plansItemContainer}>
            <div className={styles.plansContentAreaContainer}>
              <div className={styles.plansItemTextContainer}>
                <h2>Essêncial</h2>
                <p>30 Créditos</p>
                <h1>R$ 64,00</h1>
              </div>
              <p>Economize 15%</p>
              <Link href="/contact"><button>Quero testar</button></Link>
            </div>
          </div>

          <div className={styles.plansItemContainer}>
            <div className={styles.plansContentAreaContainer}>
              <div className={styles.plansItemTextContainer}>
                <h2>Profissional</h2>
                <p>100 Créditos</p>
                <h1>R$ 105,00</h1>
              </div>
              <p>Economize 30%</p>
              <Link href="/contact"><button>Quero testar</button></Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerContainer}>
        <div className={styles.footerContentAreaContainer}>
          <div className={styles.footerEmailSenderContainer}>
            <form>
              <img src='/assets/images/envelope.svg' alt='Envelope' />
              <input
                type='text'
                placeholder='Ficou com alguma dúvida?'
              >
              </input>
            </form>
            <Link href="/contact"><button>Entrar em Contato</button></Link>
          </div>

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
    </div>

  )
}
