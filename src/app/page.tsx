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
import useWindowSize from '@/hooks/useWindowSize'

export default function Home() {
  const size = useWindowSize()

  return (
    <main className={styles.main}>
      <Header />

      <div className={styles.container}>
        <div className={styles.background}>
          <div className={styles.welcomeContainer}>
            <p className={styles.title}>
              Seja bem-<br/>{"vindo à No'ah!"}
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

              {size.width && (
                <Image 
                  src={icone}
                  style={{
                    width: size.width >= 1024 ? '35vw' : '30vw',
                    height: 'auto',
                    maxWidth: '210px'
                  }}
                  className={styles.icon}
                  alt='Ícone apóstrofe'
                />
              )}
            </div>
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
