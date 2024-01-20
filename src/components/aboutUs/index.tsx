/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import phone from '@/assets/Celular.png'
import backgroundPaper from '@/assets/backgroundPaper.png'

import styles from './styles.module.css'

function AboutUs () {
  return (
    <div className={styles.background}>
      <div className={styles.aboutUsContainer} id="#sobre-nos">
        <div className={styles.aboutUs_Main}>
          <Image
            src={phone}
            alt="Celular com ilustração do nome no'ah"
            className={styles.imagePhone}
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
              {"No'ah é um nome bíblico, de origem hebraica, derivado da palavra "}<samp className="medium">noach</samp> que por sua vez significa descanso.
            </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs