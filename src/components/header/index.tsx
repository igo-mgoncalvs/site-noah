'use client'

import React from "react"
import logo from "@/assets/icons/logo-noah.svg"
import Image from "next/image"
import styles from './styles.module.css'
import useWindowSize from "@/hooks/useWindowSize"
import { analytics } from "@/lib/analytics"
import { logEvent } from "firebase/analytics"

function Header () {
  const size = useWindowSize()

  const menusData = [
    {
      id: 0,
      title: 'Sobre nós',
      redirect: '#sobre-nos'
    },
    {
      id: 1,
      title: 'Células',
      redirect: '#celulas'
    },
    {
      id: 2,
      title: 'Ministérios',
      redirect: '#ministerios'
    },
    {
      id: 3,
      title: 'Pregação',
      redirect: '#pregacao'
    },
    {
      id: 4,
      title: 'Endereços',
      redirect: '#enderecos'
    },
    {
      id: 5,
      title: 'Pastores',
      redirect: '#pastores'
    },
    {
      id: 6,
      title: 'Cursos',
      redirect: '#cursos'
    },
  ]

  const registerEvent = (page: string) => {
    if(analytics) {
      logEvent(analytics, 'page_view', {
        page_title: page
      })
    }
  }

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        {size.width && (
          <Image
            src={logo}
            alt="Logo No'ah"
            style={{
              width: size.width > 2000 ? '5vw': 90,
              height: 'auto'
            }}
          />
        )}

        <div className={styles.menus}>
          {menusData.map((item) => (
            <div
              key={item.id}
              onClickCapture={() => registerEvent(item.title)}
            >
              <a
                className={styles.itemMenu}
                href={item.redirect}
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header