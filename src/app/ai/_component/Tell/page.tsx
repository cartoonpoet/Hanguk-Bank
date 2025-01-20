'use client'

import styles from './style.module.scss'
import FloatingButton from '@/app/home/_components/floating-button'
import Mic from '/public/icon/icon-mic.svg'
import React, { useContext } from 'react'
import { AiContext } from '@/_contexts/useAiContext'

const Page = () => {
  const { scene } = useContext(AiContext)

  if (!scene) return null
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <FloatingButton />
      </div>
    </div>
  )
}

export default Page
