import styles from './styles.module.css'

function Courses () {
  return (
    <div className={styles.coursesContainer} id="cursos">
      <p className={styles.courses_header}>
        Cursos
      </p>

      <div className={styles.courses_main}>
        <div>
          <p className={styles.courses_MaturityTitle}>Maturidade</p>

          <p className={styles.courses_text}>O Curso de <span className="medium">Maturidade no Espírito</span> é composto por 12 matérias sendo elas:</p>

          <ul className={styles.courses_list}>
            <li>Princípios de Revelação na Palavra</li>
            <li>Como ser Guiado pelo Espírito</li>
            <li>Transformação da Alma</li>
            <li>Operações do Espírito</li>
            <li>A Nova Aliança</li>
            <li>A Vitória sobre o Pecado</li>
            <li>Princípios de Fé</li>
            <li>Nossa Herança em Cristo</li>
            <li>Tipos de Oração</li>
            <li>Batalha Espiritual</li>
            <li>O Arrebatamento e a Volta de Jesus</li>
            <li>A Visão dos Vencedores</li>
          </ul>

          <p className={`${styles.courses_text} $"medium"`}>
            O objetivo deste curso é Ensinar de forma clara e objetiva a ouvir a Palavra de Deus 
            e ser guiado pelo Espírito Santo, além de alimentar e fortalecer a sua fé na prática.
          </p>

          <p className={styles.courses_text}>
            O curso tem duração de 5 meses.
          </p>
        </div>
        <div>
          <p className={styles.courses_MaturityTitle}>CTL</p>

          <p className={styles.courses_text}>O <span className="medium">Curso de Treinamento de Líderes</span> é composto por 10 matérias sendo elas:</p>

          <ul className={styles.courses_list}>
            <li>A Visão das Células</li>
            <li>A Prática das Células</li>
            <li>A Estrutura da Célula</li>
            <li>Lealdade e Honra</li>
            <li>Liderança Espiritual</li>
            <li>O Trabalho do Ministro – Ganhar</li>
            <li>O Trabalho do Ministro – Consolidar</li>
            <li>O Trabalho do Ministro – Discipular</li>
            <li>O Trabalho do Ministro – Enviar</li>
            <li>O Trilho d Visão</li>
          </ul>

          <p className={`${styles.courses_text} $"medium"`}>
            O objetivo deste curso é Treinar líderes para desenvolver suas atividades dentro da célula e dos ministérios da igreja. Esse treinamento será muito útil para você também no trabalho, em casa e na escola.
          </p>

          <p className={styles.courses_text}>
            O curso tem duração de 5 meses.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Courses