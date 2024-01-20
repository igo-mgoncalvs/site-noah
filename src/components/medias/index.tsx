import Image from 'next/image'

import spotify from '@/assets/spotify.png'
import youtube from '@/assets/youtube.png'

import styles from './styles.module.css'

function Medias () {
  return (
    <div className={styles.background}>
      <div className={styles.mediasContainer} id="pregacao">
        <p className={styles.medias_title}>Ouça as pregações</p>
        <div className={styles.medias_main}>
          <p className={styles.medias_spotify}>Spotify</p>
          <div className={styles.medias}>
            <Image
              src={spotify}
              alt='Imagem do spotify no celular'
              style={{
                width: '20vw',
                height: 'auto',
                minWidth: '112px'
              }}
            />
            <div>
              <a
                href='https://open.spotify.com/show/11vvd992AjlZ3qFVtJeO5b?si=cd2c5c7fc9df4834'
                className={styles.medias_spotifyButton}
                target='_blank'
              >
                Ouvir
              </a>
            </div>
          </div>
        </div>
        <div className={styles.medias_main}>
          <p className={styles.medias_youtube}>Youtube</p>
          <div className={styles.medias}>
            <div>
              <a
                href='https://www.youtube.com/@IGREJANOAHGUAPITUBA'
                className={styles.medias_youtubeButton}
                target='_blank'
              >
                Se inscrever
              </a>
            </div>
            <Image
              src={youtube}
              alt='Imagem do youtube no celular'
              style={{
                width: '20vw',
                height: 'auto',
                minWidth: '112px'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Medias