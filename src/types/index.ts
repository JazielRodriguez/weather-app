export interface Condition {
  text: string
  icon: string
}
export interface DayProps {
  avghumidity: number
  avgtemp_c: number
  maxtemp_c: number
  mintemp_c: number
  avgtemp_f: number
  maxtemp_f: number
  condition: Condition
  mintemp_f: number
  daily_chance_of_rain: number
}
export interface Astro {
  sunrise: string
  sunset: string
  moon_phase: string
}

export interface Forecast {
  date: string
  date_epoch: number
  day: DayProps
  astro: Astro
}
