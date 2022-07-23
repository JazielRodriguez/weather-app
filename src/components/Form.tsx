import React, { FormEvent, useRef } from 'react'
import styles from './Form.module.css'
const Form: React.FC<{ queryHandler: (location: string) => void }> = (
  props
) => {
  const queryRef = useRef<HTMLInputElement>(null)
  const formHandler = (e: FormEvent) => {
    e.preventDefault()
    props.queryHandler(queryRef.current!.value)
  }
  return (
    <form className={styles.form} onSubmit={formHandler}>
      <input ref={queryRef} />
      <button>Search</button>
    </form>
  )
}
export default Form
