import React from 'react'
import { DayProps } from '../types'
const Temps: React.FC<{
  changeMetrics: () => void
  metrics: boolean
  day: DayProps
}> = (props) => {
  return (
    <div>
      <h3>Temperatures</h3>
      <div>
        <h4>Minimum</h4>
        <p>
          {props.metrics ? props.day.mintemp_c : props.day.mintemp_f}
          {props.metrics ? '°C' : '°F'}
        </p>
      </div>
      <div>
        <h4>Average</h4>
        <p>
          {props.metrics ? props.day.avgtemp_c : props.day.avgtemp_f}
          {props.metrics ? '°C' : '°F'}
        </p>
      </div>
      <div>
        <h4>Maximum</h4>
        <p>
          {props.metrics ? props.day.maxtemp_c : props.day.maxtemp_f}
          {props.metrics ? '°C' : '°F'}
        </p>
      </div>
      <button onClick={props.changeMetrics}>
        {props.metrics ? '°F' : '°C'}
      </button>
    </div>
  )
}
export default Temps
