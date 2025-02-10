'use client'

import style from './style.module.scss'
import Menu from '@/_components/common/Menu/page'
import { usePathname } from 'next/navigation'
import {URL} from '@/_constants/url'

const TabBar = () => {
  const pathname = usePathname()
  // transfer 경로에서 메뉴바 숨기기
  const hideMenuBar = [URL.inquiry, URL.transfer].includes(pathname)
  if (hideMenuBar) return null

  return (
    <div className={style.wrapper}>
      <Menu />
    </div>
  )
}

export default TabBar
