import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Astro, DayProps } from '../types'
import AstroInfo from './Astro'
import Backdrop from './Backdrop'
import styles from './Details.module.css'
import Temps from './Temps'
const Details: React.FC<{
  closeDetails: () => void
  day: DayProps
  date: string
  astro: Astro
}> = (props) => {
  const [metrics, setMetrics] = useState<boolean>(true)
  const changeMetrics = () => {
    setMetrics((p) => !p)
  }
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop>
          <div className={styles.details}>
            <p>
              Day: {props.date.slice(8, 10)}/{props.date.slice(5, 7)}/
              {props.date.slice(0, 4)}
            </p>
            <div>
              <h3>Condition: {props.day.condition.text} </h3>
            </div>
            <Temps
              day={props.day}
              changeMetrics={changeMetrics}
              metrics={metrics}
            />
            <AstroInfo astro={props.astro} />
            <button onClick={props.closeDetails} className={styles.exit}>
              Exit
            </button>
          </div>
        </Backdrop>,
        document.getElementById('details') as HTMLElement
      )}
    </>
  )
}
export default Details
