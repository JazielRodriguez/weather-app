import React, { Fragment, useEffect, useState } from 'react'
import Day from './components/Day'
import { Forecast } from './types'
import { options } from './configs/forecastOptions'
import List from './components/List'
import { BounceLoader } from 'react-spinners'
import Form from './components/Form'
import Loader from './components/Loader'
import Status from './components/Status'
const App: React.FC = () => {
  const [forecast, setForecast] = useState<Forecast[]>([])
  const [query, setQuery] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const queryHandler = (location: string) => {
    setForecast([])
    setLoading(true)
    setQuery(location)
  }
  useEffect(() => {
    fetch('https://ipinfo.io/json?token=af7449a0edbe3c')
      .then((response) => response.json())
      .then((data) => setQuery(data.city))
  })
  useEffect(() => {
    fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${query}&days=5`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setLoading(false)
        setForecast(response.forecast.forecastday)
      })
      .catch((err) => console.error(err))
  }, [query])
  return (
    <div>
      <Form queryHandler={queryHandler} />
      {forecast.length === 0 && loading && query === '' && (
        <Loader>
          <BounceLoader />
        </Loader>
      )}
      {forecast.length > 0 && (
        <Fragment>
          <Status query={query} />
          <List>
            {forecast.map((day) => (
              <Day
                key={day.date}
                date={day.date}
                day={day.day}
                astro={day.astro}
              />
            ))}
          </List>
        </Fragment>
      )}
    </div>
  )
}
export default App
