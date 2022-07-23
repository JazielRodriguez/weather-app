import React, { useState } from 'react'
import { Astro, DayProps } from '../types/index'
import styles from './Day.module.css'
import Details from './Details'
const Day: React.FC<{ day: DayProps; date: string; astro: Astro }> = (
  props
) => {
  const [detailsVisible, setDetailsVisible] = useState<boolean>(false)
  const detailsHandler = () => {
    setDetailsVisible((p) => !p)
  }
  return (
    <div className={styles.day}>
      <p>
        Day: {props.date.slice(8, 10)}/{props.date.slice(5, 7)}/
        {props.date.slice(0, 4)}
      </p>
      <div>
        <h3>Condition:</h3>
        <div className={styles.condition}>
          <div className={styles.icon}>
            <img
              src={props.day.condition.icon}
              alt={props.day.condition.text}
            />
          </div>
          <p>{props.day.condition.text}</p>
        </div>
        <div className={styles.temps}>
          <div>
            <h4>Minimum</h4>
            <p>{props.day.mintemp_c}°C</p>
          </div>
          <div>
            <h4>Average</h4>
            <p>{props.day.avgtemp_c}°C</p>
          </div>
          <div>
            <h4>Maximum</h4>
            <p>{props.day.maxtemp_c}°C</p>
          </div>
        </div>
        <div>
          <h4>Chance of rain</h4>
          <p>{props.day.daily_chance_of_rain}%</p>
        </div>
      </div>
      <button onClick={detailsHandler}>More info </button>
      {detailsVisible && <Details closeDetails={detailsHandler} date={props.date} day={props.day} astro={props.astro}/>}
    </div>
  )
}
export default Day
