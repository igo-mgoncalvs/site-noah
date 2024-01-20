import React from "react"
import logo from "@/assets/icons/logo-noah.svg"
import Image from "next/image"
import styles from './styles.module.css'
import useWindowSize from "@/hooks/useWindowSize"

function Header () {
  const size = useWindowSize()

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
          <a
            className={styles.itemMenu}
            href="#sobre-nos"
          >
            Sobre nós
          </a>
          <a
            href="#celulas"
            className={styles.itemMenu}
          >
            Células
          </a>
          <a
            href="#ministerios"
            className={styles.itemMenu}
          >
            Ministérios
          </a>
          <a
            href="#pregacao"
            className={styles.itemMenu}
          >
            Pregação
          </a>
          <a
            href="#enderecos"
            className={styles.itemMenu}
          >
            Endereços
          </a>
          <a
            href="#pastores"
            className={styles.itemMenu}
          >
            Pastores
          </a>
          <a
            href="#cursos"
            className={styles.itemMenu}
          >
            Cursos
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header