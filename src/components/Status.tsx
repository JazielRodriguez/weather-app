import React from 'react'
import styles from './Status.module.css'
const Status: React.FC<{query:string}> = (props) => {
  return (
    <div className={styles.status}>
      <h2>Current weather in {props.query}</h2>
    </div>
  )
}
export default Status
