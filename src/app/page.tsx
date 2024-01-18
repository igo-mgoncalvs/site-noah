'use client'

import Image from 'next/image'

import Header from '@/components/header'



import icone from '@/assets/icons/icone-noah.svg'


import styles from './page.module.css'
import AboutUs from '@/components/aboutUs';
import Cells from '@/components/cells';
import Ministries from '@/components/ministries';
import Shepherds from '@/components/shepherds'
import Courses from '@/components/courses'
import Medias from '@/components/medias'
import Churches from '@/components/churches'
import Footer from '@/components/footer'

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
                <span className="medium"> descanso </span>
                a vocês.” 
              </p>
              <p>
                <br/>
                Mateus 11:28
              </p>
            </div>

            <Image 
              src={icone}
              style={{
                width: window.innerWidth >= 1024 ? '80vw' : '30vw',
                height: 'auto'
              }}
              className={styles.icon}
              alt='Ícone apóstrofe'
            />
          </div>
        </div>
      </div>

      <AboutUs />

      <Cells />

      <Ministries />

      <Shepherds />

      <Courses />

      <Medias />

      <Churches />

      <Footer />
    </main>
  )
}
