'use client'

import styles from './style.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { Home } from '@/_assets/icons'

type NavBarProps = {
  leftControl: 'icon' | 'none'
  rightControl: 'icon' | 'none' | 'text'
  title: ReactNode
  onClickBack?: () => void
}

const NavBar = ({ leftControl, rightControl, title, onClickBack }: NavBarProps) => {
  const router = useRouter()

  const handleBack = () => {
    router.back() // 브라우저 히스토리에서 이전 페이지로 이동
  }

  return (
    <section className={styles.wrapper}>
      {leftControl === 'icon' && (
        <button className={styles.btn} onClick={onClickBack || handleBack}>
          <Image
            alt="previous"
            src="/icon/nav-back.svg"
            width={10}
            height={18}
          />
        </button>
      )}
      <div>{title}</div>
      {rightControl === 'icon' && (
        <button className={styles.btn} onClick={() => router.replace('/home')}>
          <Home width="20" height="20" fill="black" />
        </button>
      )}
      {rightControl === 'text' && (<button className="font-medium text-base">
        관리
      </button>)}
      {rightControl === 'none' && <div/>}
    </section>
  )
}

export default NavBar
