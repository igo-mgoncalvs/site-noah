'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

import Header from '@/components/header'

import phone from '@/assets/Celular.png'
import image1 from '@/assets/Image1.png'
import image2 from '@/assets/Image2.png'
import image3 from '@/assets/Image3.png'
import image4 from '@/assets/Image4.png'
import image5 from '@/assets/Image5.png'
import spotify from '@/assets/spotify.png'
import youtube from '@/assets/youtube.png'

import backgroundPaper from '@/assets/backgroundPaper.png'
import icone from '@/assets/icons/icone-noah.svg'
import iconeGradient from '@/assets/icons/Icone-gradient.svg'

import shepherds from '@/mockdata/shepherds.json'

import styles from './page.module.css'
import 'swiper/css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />

        <div className={styles.container}>
          <div className={styles.welcomeContainer}>
            <p className={styles.title}>
              Seja bem-<br/>vindo à Noah!
            </p>

            <div className={styles.description}>
              <div className={styles.verse}>
                <p>
                  &quot;Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei
                  <span className={styles.medium}> descanso </span>
                  a vocês.” 
                </p>
                <p>
                  <br/>
                  Mateus 11:28
                </p>
              </div>

              <Image 
                src={icone}
                width={83}
                alt='Ícone apóstrofe'
              />
            </div>
          </div>
        </div>

        <div className={styles.aboutUsContainer}>
          <Image
            src={backgroundPaper}
            className={styles.aboutUs_imageBackground}
            alt=''
          />
          <div className={styles.aboutUs_Main}>
            <Image
              src={phone}
              alt="Celular com ilustração do nome no'ah"
              width={208}
            />
            <div className={styles.aboutUs}>
              <p className={styles.aboutUs_title}>Sobre Nós</p>
              <p className={styles.aboutUs_listTitle}>Significado do nome:</p>

              <div className={styles.aboutUs_list}>
                <p className={styles.aboutUs_listPoint}>
                  Descanso
                </p>
                <p className={styles.aboutUs_listPoint}>
                  Repouso
                </p>
                <p className={styles.aboutUs_listPoint}>
                  De longa vida
                </p>
              </div>

              <p className={styles.aboutUs_description}>
                Noah é um nome bíblico, de origem hebraica, derivado da palavra <samp className={styles.medium}>noach</samp> que por sua vez significa descanso.
              </p>
          </div>
          </div>
        </div>

        <p className={styles.cells_header}>Células</p>

        <div className={styles.cellsContainer}>
          <p className={styles.cells_title}>Sobre as células</p>
          <div className={styles.cells_text}>
            <p>As células são grupos de pessoas que se reúnem nos lares, <br />buscando a presença de Deus e compartilhando a palabra de forma <br/>presencial uma vez na semana.<br/>Com isso nós cremos que as células são as extenções da igreja nos lares.<br/>
            
            <br/>Os grupos são organizados por rede: <span className={styles.medium}>Rede da família & Rede de jovens.</span>
            <br/>Células da rede da família: <span className={styles.medium}>Quarta & Quinta às 20h</span>
            <br/>Células da rede dos jovens: <span className={styles.medium}>Sábado às 18h.</span><br/>

            <br/>Se você está na cidade de mauá ou região e tem interesse em<br/>participar de alguma célula, participe de algum prédio Noah <br/>e faça parte deste corpo!
            </p>
          </div>
        </div>

        <div className={styles.ministriesContainer}>
          <p className={styles.ministries_title}>Ministérios</p>

          <div className={styles.ministries_list}>
            <div className={styles.ministries_item}>
              <Image src={image1} alt=''/>
              <div>
                <p className={styles.ministries_listTitles}>
                  <span className={styles.ministries_k}>K</span>
                  <span className={styles.ministries_i}>i</span>
                  <span className={styles.ministries_d}>d</span>
                  <span className={styles.ministries_s}>s</span>
                </p>
                <p className={styles.ministries_listDescription}>O Ministério Infantil é a porta de entrada para o evangelho. É nele que as crianças irão aprender a base dos estudos bíblicos de forma que continuarão a conhecer todo o caminho de Deus no decorrer de sua vida.</p>
              </div>
            </div>
            <div className={styles.ministries_item}>
              <Image src={image2} alt=''/>
              <div>
                <p className={styles.ministries_listTitles}>Louvor e adoração</p>
                <p className={styles.ministries_listDescription}>
                  O louvor e adoração é a expressão da igreja para com o Senhor, nós o adoramos pelo o que Ele é, e não pelo o que ele tem!<br/><br/>
                  
                  Damos ao Senhor toda Honra Glória com as canções em nossos lábios que ecoam em nossos corações.
                </p>
              </div>
            </div>
            <div className={styles.ministries_item}>
              <Image src={image3} alt=''/>
              <div>
                <p className={styles.ministries_listTitles}>Jovens <span className={styles.ministries_rlsp}>RLSP</span></p>
                <p className={styles.ministries_listDescription}>Somos jovens radicalmente apaixonados por JESUS! Entregamos toda a nossa energia da juventude aos pés do Senhor, vivendo uma vida totalmente contra mão do mundo por amor ao a Ele!</p>
              </div>
            </div>
            <div className={styles.ministries_item}>
              <Image src={image4} alt=''/>
              <div>
                <p className={styles.ministries_listTitles}>Mídia</p>
                <p className={styles.ministries_listDescription}>A mídia é toda equipe responsável por comunicação digital, seja com videos ou fotos. Esta equipe é quem faz gravações dos cultos e posta no Instagram. Mas a função da mídia não é apenas fazer registros, mas sim de levar o evangelho através das midias da igreja.</p>
              </div>
            </div>
            <div className={styles.ministries_item}>
              <Image src={image5} alt=''/>
              <div>
                <p className={styles.ministries_listTitles}>Diaconato</p>
                <p className={styles.ministries_listDescription}>O diaconato é a equipe responsável de arrumar as cadeiras para o culto, adicionar copos nos bebedouros, verificar se tem papéis nos banheiros e recepcionar os irmãos ao chegarem no culto. O objetivo do diaconato é servir e proporcinar conforto para os membros e visitantes</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.shepherdContainer}>
          <p className={styles.shepherd_title}>Pastores</p>
          <div className={styles.shepherd}>
          <Swiper
            spaceBetween={18}
            slidesPerView={2.4}
            breakpoints={{
              425: {
                slidesPerView: 2.5
              }
            }}
            style={{ paddingRight: 20 }}
          >
            {shepherds.data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={styles.shepherd_card}>
                  <Image
                    src={item.img || ""}
                    alt={item.name}
                    width={80}
                    height={80}
                    className={styles.shepherd_image}
                  />
                  <p className={styles.shepherd_name}>{item.name}</p>
                  <p className={styles.shepherd_church}>{item.church}</p>
                  <Image
                    src={iconeGradient}
                    className={styles.shepherd_icone}
                    width={20}
                    alt='logo'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
        </div>

        <div className={styles.coursesContainer}>
          <p className={styles.courses_header}>
            Cursos
          </p>

          <div className={styles.courses_main}>
            <div>
              <p className={styles.courses_MaturityTitle}>Maturidade</p>

              <p className={styles.courses_text}>O Curso de <span className={styles.medium}>Maturidade no Espírito</span> é composto por 12 matérias sendo elas:</p>

              <ul className={styles.courses_list}>
                <li>Princípios de Revelação na Palavra</li>
                <li>Como ser Guiado pelo Espírito</li>
                <li>Transformação da Alma</li>
                <li>Operações do Espírito</li>
                <li>A Nova Aliança</li>
                <li>A Vitória sobre o Pecado</li>
                <li>Princípios de Fé</li>
                <li>Nossa Herança em Cristo</li>
                <li>Tipos de Oração</li>
                <li>Batalha Espiritual</li>
                <li>O Arrebatamento e a Volta de Jesus</li>
                <li>A Visão dos Vencedores</li>
              </ul>

              <p className={`${styles.courses_text} ${styles.medium}`}>
                O objetivo deste curso é Ensinar de forma clara e objetiva a ouvir a Palavra de Deus 
                e ser guiado pelo Espírito Santo, além de alimentar e fortalecer a sua fé na prática.
              </p>

              <p className={styles.courses_text}>
                O curso tem duração de 5 meses.
              </p>
            </div>
            <div>
              <p className={styles.courses_MaturityTitle}>CTL</p>

              <p className={styles.courses_text}>O Curso de <span className={styles.medium}>Treinamento de Líderes</span> é composto por 10 matérias sendo elas:</p>

              <ul className={styles.courses_list}>
                <li>A Visão das Células</li>
                <li>A Prática das Células</li>
                <li>A Estrutura da Célula</li>
                <li>Lealdade e Honra</li>
                <li>Liderança Espiritual</li>
                <li>O Trabalho do Ministro – Ganhar</li>
                <li>O Trabalho do Ministro – Consolidar</li>
                <li>O Trabalho do Ministro – Discipular</li>
                <li>O Trabalho do Ministro – Enviar</li>
                <li>O Trilho d Visão</li>
              </ul>

              <p className={`${styles.courses_text} ${styles.medium}`}>
                O objetivo deste curso é Treinar líderes para desenvolver suas atividades dentro da célula e dos ministérios da igreja. Esse treinamento será muito útil para você também no trabalho, em casa e na escola.
              </p>

              <p className={styles.courses_text}>
                O curso tem duração de 5 meses.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.mediasContainer}>
          <p className={styles.medias_title}>Ouça as pregações</p>
          <div className={styles.medias_main}>
            <p className={styles.medias_spotify}>Spotify</p>
            <div className={styles.medias}>
              <Image
                src={spotify}
                alt='Imagem do spotify no celular'
              />
              <div>
                <button className={styles.medias_spotifyButton}>
                  Ouvir
                </button>
              </div>
            </div>
          </div>
          <div className={styles.medias_main}>
            <p className={styles.medias_youtube}>Youtube</p>
            <div className={styles.medias}>
              <div>
                <button className={styles.medias_youtubeButton}>
                  Se inscrever
                </button>
              </div>
              <Image
                src={youtube}
                alt='Imagem do youtube no celular'
              />
            </div>
          </div>
        </div>

        <div className={styles.churchesContainer}>
          <p className={styles.churches_text}>Prédios Noah</p>

          <div className={styles.churches_addressList}>
            <div className={styles.churches_item}>
              <p className={styles.churches_itemTitle}>Guapituba</p>
              <p className={styles.churches_itemAddress}>R. Cícero de Campos Póvoa, 42 - Guapituba, Mauá - SP, 09360-460</p>
            </div>
            <div className={styles.churches_item}>
              <p className={styles.churches_itemTitle}>Jd. Esperança</p>
              <p className={styles.churches_itemAddress}>Av. José moreira 184, Jd IV Centenário - Mauá</p>
            </div>
            <div className={styles.churches_item}>
              <p className={styles.churches_itemTitle}>Pq. Das Flores Flores</p>
              <p className={styles.churches_itemAddress}>AV. Brasil 02 Pq. Das flores - SP</p>
            </div>
            <div className={styles.churches_item}>
              <p className={styles.churches_itemTitle}>Pq. das Américas</p>
              <p className={styles.churches_itemAddress}>R. Guatemala, 478 - Mauá</p>
            </div>
            <div className={styles.churches_item}>
              <p className={styles.churches_itemTitle}>Jd. Zaira</p>
              <p className={styles.churches_itemAddress}>Rua João Paulino Faria, 132, Jd. Zaira - Mauá</p>
            </div>
            <div className={styles.churches_item}>
              <p className={styles.churches_itemTitle}>Feital</p>
              <p className={styles.churches_itemAddress}>Av. Benedita F. da veiga 132 Jd.Feital - Mauá</p>
            </div>
            <div className={styles.churches_item}>
              <p className={styles.churches_itemTitle}>Santo andré</p>
              <p className={styles.churches_itemAddress}>Av. Dom Pedro I. 1207 Vila pires - Santo andré</p>
            </div>
            <div className={styles.churches_item}>
              <p className={styles.churches_itemTitle}>Itaim Paulista</p>
              <p className={styles.churches_itemAddress}>Rua Bétula Negra, 71 - Jd. Camargo Novo</p>
            </div>
            <div className={styles.churches_item}>
              <p className={styles.churches_itemTitle}>Araucária - PR</p>
              <p className={styles.churches_itemAddress}>Iguaçu, Araucária - Paraná, 83701-020</p>
            </div>
            <div className={styles.churches_item}>
              <p className={styles.churches_itemTitle}>Curitiba</p>
              <p className={styles.churches_itemAddress}>R. Marcos Bertoldi, 345 - Campo de Santana - Curitiba</p>
            </div>
            <div className={styles.churches_item}>
              <p className={styles.churches_itemTitle}>Vila magini</p>
              <p className={styles.churches_itemAddress}>R. Pau Brasil, jardim ipe - 79</p>
            </div>
            <div className={styles.churches_item}>
              <p className={styles.churches_itemTitle}>Elba</p>
              <p className={styles.churches_itemAddress}>Av. Custódio de Sá e Faria, 1003 - Jardim Elba</p>
            </div>
          </div>
        </div>
    </main>
  )
}
