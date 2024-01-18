'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';

import useWindowSize from '@/hooks/useWindowSize';

import iconeGradient from '@/assets/icons/Icone-gradient.svg'

import shepherds from '@/mockdata/shepherds.json'

import styles from './styles.module.css'
import 'swiper/css';

function Shepherds () {
  const size = useWindowSize()

  return (
    <div className={styles.shepherdContainer} id="pastores">
      <p className={styles.shepherd_title}>Pastores</p>
      <div className={styles.shepherd}>
      <Swiper
        spaceBetween={18}
        slidesPerView={2.4}
        breakpoints={{
          320: {
            slidesPerView: 2.3,
          },
          425: {
            slidesPerView: 2.5
          },
          768: {
            slidesPerView: 2.8,
            spaceBetween: 28
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 38
          },
          1440: {
            slidesPerView: 4.8,
            spaceBetween: 46
          }
        }}
        style={{ paddingRight: 20 }}
      >
        {shepherds.data.map((item) => (
          <SwiperSlide key={item.id}>
            {size.width && (

            <div className={styles.shepherd_card}>
              <Image
                src={item.img || ""}
                alt={item.name}
                width={80}
                height={80}
                style={{
                  width: size.width >= 1440 ? '13vw' : '20vw',
                  height: 'auto',
                  objectFit: "contain"
                }}
                className={styles.shepherd_image}
              />
              <p className={styles.shepherd_name}>{item.name}</p>
              <p className={styles.shepherd_church}>{item.church}</p>
              <Image
                src={iconeGradient}
                className={styles.shepherd_icone}
                style={{
                  width: size.width >= 1440 ? '2vw' : '3vw',
                  height: 'auto'
                }}
                alt='logo'
              />
            </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  )
}

export default Shepherds