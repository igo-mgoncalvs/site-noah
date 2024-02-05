'use client'

import Image from 'next/image'
import whatsapp from '@/assets/icons/whatsapp.svg'

import styles from './styles.module.css'
import { logEvent } from 'firebase/analytics'
import { analytics } from '@/lib/analytics'

export default function FloatWhatsapp () {

  const registerEvent = () => {
    logEvent(analytics, 'select_item', {
      item_list_name: 'Whatsapp'
    })
  }

  return (
    <div onClickCapture={() => registerEvent()}>
      <a
        className={styles.container}
        href={'https://api.whatsapp.com/message/XYUCJWBIUIIWO1?autoload=1&app_absent=0'}
        target='_blank'
      >
        <Image
          priority
          width={50}
          height={50}
          src={whatsapp}
          className={styles.logo}
          alt="Imagem do whatsapp"
        />
      </a>
    </div>
  )
} 