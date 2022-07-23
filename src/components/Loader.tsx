import React from 'react'
import styles from './Loader.module.css'
const Loader: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div className={styles.loader}>
      {props.children}
      <p>Loading...</p>
    </div>
  )
}
export default Loader
