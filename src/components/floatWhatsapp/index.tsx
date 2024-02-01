import Image from 'next/image'
import whatsapp from '@/assets/icons/whatsapp.svg'

import styles from './styles.module.css'

export default function FloatWhatsapp () {
  return (
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
  )
} 