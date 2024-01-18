import React from "react"
import logo from "@/assets/icons/logo-noah.svg"
import Image from "next/image"
import styles from './styles.module.css'

function Header () {
  return (
    <div className={styles.container}>
      <Image
        src={logo}
        alt="Logo No'ah"
        width={90}
      />
    </div>
  )
}

export default Header