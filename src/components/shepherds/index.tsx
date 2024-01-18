import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

import iconeGradient from '@/assets/icons/Icone-gradient.svg'

import shepherds from '@/mockdata/shepherds.json'

import styles from './styles.module.css'
import 'swiper/css';

function Shepherds () {
  return (
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
  )
}

export default Shepherds