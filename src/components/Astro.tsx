import React from 'react'
import { Astro } from '../types'
const AstroInfo: React.FC<{ astro: Astro }> = (props) => {
  return (
    <div>
      <div>
        <h4>Moon phase</h4>
        <p>{props.astro.moon_phase}</p>
      </div>
      <p>{props.astro.sunrise}</p>
      <p>{props.astro.sunset}</p>
    </div>
  )
}
export default AstroInfo
