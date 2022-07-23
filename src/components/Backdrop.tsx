import React from 'react'
import styles from './Backdrop.module.css'
const Backdrop: React.FC<{
  children: React.ReactNode
}> = (props) => {
  return <div className={styles.backdrop}>{props.children}</div>
}
export default Backdrop
