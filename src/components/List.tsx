import React, { ReactNode } from 'react'
import styles from './List.module.css'
const List: React.FC<{ children: ReactNode }> = (props) => {
  return <div className={styles.list}>{props.children}</div>
}
export default List
