'use client'

import styles from './style.module.scss'
import Image from 'next/image'
import { useState } from 'react'

const TextField = () => {
  const [value, setValue] = useState('')
  return (
    <div className={styles.wrapper}>
      <input
        placeholder='계좌번호 입력'
        className={styles.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value.trim() && (
        <button className={styles.btn} onClick={() => setValue('')}>
          <Image
            src='/icon/nav-close.svg'
            width={13.3}
            height={13.3}
            alt='close'
          />
        </button>
      )}
    </div>
  )
}

export default TextField
