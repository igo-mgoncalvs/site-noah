import Image from "next/image";

import image1 from '@/assets/Image1.png'
import image2 from '@/assets/Image2.png'
import image3 from '@/assets/Image3.png'
import image4 from '@/assets/Image4.png'
import image5 from '@/assets/Image5.png'

import styles from './styles.module.css'

function Ministries () {
  return (
    <div className={styles.background}>
      <div className={styles.ministriesContainer} id="ministerios">
        <p className={styles.ministries_title}>Ministérios</p>

        <div className={styles.ministries_list}>
          <div className={styles.ministries_item}>
            <Image
              style={{width: '30vw', maxWidth: '430px', maxHeight: '360px', height: '25vw'}}
              className={styles.image}
              src={image1}
              alt=''
            />
            <div>
              <p className={styles.ministries_listTitles}>
                <span className={`${styles.ministries_k} ${styles.ministries_listTitles}`}>K</span>
                <span className={`${styles.ministries_i} ${styles.ministries_listTitles}`}>i</span>
                <span className={`${styles.ministries_d} ${styles.ministries_listTitles}`}>d</span>
                <span className={`${styles.ministries_s} ${styles.ministries_listTitles}`}>s</span>
              </p>
              <p className={styles.ministries_listDescription}>O Ministério Infantil é a porta de entrada para o evangelho. É nele que as crianças irão aprender a base dos estudos bíblicos de forma que continuarão a conhecer todo o caminho de Deus no decorrer de sua vida.</p>
            </div>
          </div>
          <div className={styles.ministries_item}>
            <Image
              style={{width: '30vw', maxWidth: '430px', maxHeight: '360px', height: '25vw'}}
              className={styles.image}
              src={image2}
              alt=''
            />
            <div>
              <p className={styles.ministries_listTitles}>Louvor e adoração</p>
              <p className={styles.ministries_listDescription}>
                O louvor e adoração é a expressão da igreja para com o Senhor, nós o adoramos pelo o que Ele é, e não pelo o que ele tem!<br/><br/>
                
                Damos ao Senhor toda Honra Glória com as canções em nossos lábios que ecoam em nossos corações.
              </p>
            </div>
          </div>
          <div className={styles.ministries_item}>
            <Image
              style={{width: '30vw', maxWidth: '430px', maxHeight: '360px', height: '25vw'}}
              className={styles.image}
              src={image3}
              alt=''
            />
            <div>
              <p className={styles.ministries_listTitles}>{"Jovens No'ah "}<span className={styles.ministries_rlsp}>RLSP</span></p>
              <p className={styles.ministries_listDescription}>Somos jovens radicalmente apaixonados por JESUS! Entregamos toda a nossa energia da juventude aos pés do Senhor, vivendo uma vida totalmente contra mão do mundo por amor ao a Ele!</p>
            </div>
          </div>
          <div className={styles.ministries_item}>
            <Image
              style={{width: '30vw', maxWidth: '430px', maxHeight: '360px', height: '25vw'}}
              className={styles.image}
              src={image4}
              alt=''
            />
            <div>
              <p className={styles.ministries_listTitles}>Mídia</p>
              <p className={styles.ministries_listDescription}>A mídia é toda equipe responsável por comunicação digital, seja com videos ou fotos. Esta equipe é quem faz gravações dos cultos e posta no Instagram. Mas a função da mídia não é apenas fazer registros, mas sim de levar o evangelho através das midias da igreja.</p>
            </div>
          </div>
          <div className={styles.ministries_item}>
            <Image
              style={{width: '30vw', maxWidth: '430px', maxHeight: '360px', height: '25vw'}}
              className={styles.image}
              src={image5}
              alt=''
            />
            <div>
              <p className={styles.ministries_listTitles}>Diaconato</p>
              <p className={styles.ministries_listDescription}>O diaconato é a equipe responsável de arrumar as cadeiras para o culto, adicionar copos nos bebedouros, verificar se tem papéis nos banheiros e recepcionar os irmãos ao chegarem no culto. O objetivo do diaconato é servir e proporcinar conforto para os membros e visitantes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ministries