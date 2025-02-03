'use client'

import styles from './style.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ReactNode } from 'react'
import {Home} from '@/_assets/icons'

type NavBarProps = {
  leftControl: 'icon' | 'none'
  rightControl: 'icon' | 'none' | 'text'
  title: ReactNode
}

const NavBar = ({ leftControl, rightControl, title }: NavBarProps) => {
  const router = useRouter()

  const handleBack = () => {
    router.back() // 브라우저 히스토리에서 이전 페이지로 이동
  }

  return (
    <section className={styles.wrapper}>
      {leftControl === 'icon' && (
        <button className={styles.btn} onClick={handleBack}>
          <Image
            alt='previous'
            src='/icon/nav-back.svg'
            width={10}
            height={18}
          />
        </button>
      )}
      <div>{title}</div>
      {rightControl === 'icon' && (
        <Link className={styles.btn} href={'/home'}>
          <Home width="20" height="20" fill="black" />
        </Link>
      )}
    </section>
  )
}

export default NavBar
