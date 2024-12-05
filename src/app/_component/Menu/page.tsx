import Image from 'next/image'
import style from './style.module.scss'

type menu = {
  src: string,
  name: string
}
const Menus: menu[] = [
  {
    src: '/icon/icon-home.svg',
    name: '홈',
  },
  {
    src: '/icon/icon-coin.svg',
    name: '자산관리',
  },
  {
    src: '/icon/icon-cart.svg',
    name: '상품',
  },
  {
    src: '/icon/icon-gift.png',
    name: '혜택',
  },
  {
    src: '/icon/icon-line-three.svg',
    name: '전체',
  },
]

const Menu = () => {
  return Menus.map(menu => {
    return <div className={style.wrapper} key={menu.src}><Image src={menu.src} alt={'12'} width={24} height={24} />
      <div className={style.name}>{menu.name}</div>
    </div>
  })

}


export default Menu