import styles from './styles.module.css'

function Footer () {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <p className={styles.title}>
          Site desenvolvido por:
        </p>
        <p className={styles.name}>
          Henrique Pereira Rocha | UX/UI Design
        </p>
        <p className={styles.contact}>
          Contato: (11) 99206-7073
        </p>
      </div>
    </div>
  )
}

export default Footer