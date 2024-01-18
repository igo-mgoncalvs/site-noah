import React from "react"

import styles from './styles.module.css'

function Cells () {
  return (
    <div id="celulas">
      <p className={styles.cells_header}>Células</p>

      <div className={styles.cellsContainer}>
        <p className={styles.cells_title}>Sobre as células</p>
        <div className={styles.cells_text}>
          <p>
            As células são grupos de pessoas que se reúnem nos lares, <br />buscando a presença de Deus e compartilhando a palabra de forma <br/>presencial uma vez na semana.<br/>Com isso nós cremos que as células são as extenções da igreja nos lares.<br/>
            <br/>Os grupos são organizados por rede: <span className="medium">Rede da família & Rede de jovens.</span>
            <br/>Células da rede da família: <span className="medium">Quarta & Quinta às 20h</span>
            <br/>Células da rede dos jovens: <span className="medium">Sábado às 18h.</span><br/>
            <br/>Se você está na cidade de mauá ou região e tem interesse em<br/>participar de alguma célula, participe de algum prédio Noah <br/>e faça parte deste corpo!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cells