import styles from './style.module.scss'
import Image from 'next/image'

const menuList = [
  {
    src: '/icon/menu-search.png',
    name: '전체 계좌 조회',
  },
  {
    src: '/icon/menu-paper.png',
    name: '공과금 내기',
  },
  {
    src: '/icon/menu-edit.png',
    name: '상품 가입',
  },
  {
    src: '/icon/menu-atm.png',
    name: 'ATM 돈찾기',
  },
  {
    src: '/icon/menu-money.png',
    name: '자동이체 관리',
  },
  {
    src: '/icon/menu-auth.png',
    name: '인증서',
  },
  {
    src: '/icon/menu-lock.png',
    name: '보안서비스',
  },
  {
    src: '/icon/menu-call.png',
    name: '사고신고',
  },
  {
    src: '/icon/menu-guide.png',
    name: '사용안내',
  },
  {
    src: '/icon/menu-message.png',
    name: '의견 말하기',
  },
]
const List = () => {
  return menuList.map(menu => (<div className={styles.wrapper} key={menu.src}>
    <Image src={menu.src} alt={menu.name} width={48} height={48}/>
    <div className={styles.name}>{menu.name}</div>
  </div>))
}

export default List