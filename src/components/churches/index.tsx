import React from 'react'

import churches from '@/mockdata/churches.json'

import styles from './styles.module.css'

function Churches () {
  return (
    <div className={styles.background}>
      <div className={styles.churchesContainer} id="enderecos">
        <p className={styles.churches_text}>{"Prédios No'ah"}</p>

        <div className={styles.churches_addressList}>
          {churches.data.map((item) => (
            <div
              key={item.id}
              className={styles.churches_item}
            >
              <p className={styles.churches_itemTitle}>{item.title}</p>
              <p className={styles.churches_itemAddress}>{item.address}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Churches