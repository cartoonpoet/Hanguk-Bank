'use client'

import styles from './style.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type NavBarProps = {
  leftControl: 'icon' | 'none'
  rightControl: 'icon' | 'none' | 'text'
  title: boolean
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
      {title && <div>이체</div>}
      {rightControl === 'icon' && (
        <Link className={styles.btn} href={'/home'}>
          <Image
            alt='previous'
            src='/icon/nav-home.svg'
            width={18}
            height={20}
          />
        </Link>
      )}
    </section>
  )
}

export default NavBar
