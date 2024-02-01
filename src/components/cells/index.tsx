import React from "react"

import styles from './styles.module.css'

function Cells () {
  return (
    <div id="celulas" className={styles.background} >
      <p className={styles.cells_header}>Células</p>

      <div className={styles.cellsContainer}>
        <p className={styles.cells_title}>Sobre as células</p>
        <div className={styles.cells_text}>
          <p>
            As células são grupos de pessoas que se reúnem nos lares, buscando a presença de Deus e compartilhando a palavra de forma presencial uma vez na semana. Com isso nós cremos que as células são as extenções da igreja nos lares.<br/>
            <br/>Os grupos são organizados por rede: <span className="medium">Rede da família, Rede de jovens e Kids.</span>
            <br/>
            <br/>
            <p className={styles.listItems}>
              Células da rede da família: <span className="medium">Dias de semana</span>
            </p>
            <p className={styles.listItems}>
            Células kids: <span className="medium">São realizadas em paralelo com as células da família</span>
            </p>
            <p className={styles.listItems}>
              Células da rede dos jovens: <span className="medium">Sábado às 18h.</span>
            </p>
            <br/>
            
            Se você está na cidade de mauá ou região e tem interesse em<br/>{"participar de alguma célula, participe de algum prédio No'ah "}<br/>e faça parte deste corpo!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cells