import styles from './style.module.scss'
import Image from 'next/image'

const menuList = [
  {
    src: '/menu/search.svg',
    name: '전체 계좌 조회',
  },
  {
    src: '/menu/receipt.svg',
    name: '공과금 내기',
  },
  {
    src: '/menu/memo.svg',
    name: '상품 가입',
  },
  {
    src: '/menu/atm.svg',
    name: 'ATM 돈찾기',
  },
  {
    src: '/menu/money.svg',
    name: '자동이체 관리',
  },
  {
    src: '/menu/shield.svg',
    name: '인증서',
  },
  {
    src: '/menu/lock.svg',
    name: '보안서비스',
  },
  {
    src: '/menu/call.svg',
    name: '사고신고',
  },
  {
    src: '/menu/guide.svg',
    name: '사용안내',
  },
  {
    src: '/menu/message.svg',
    name: '의견 말하기',
  },
]
const List = () => {
  return menuList.map((menu) => (
    <div className={styles.wrapper} key={menu.src}>
      <Image src={menu.src} alt={menu.name} width={48} height={48} />
      <div className={styles.name}>{menu.name}</div>
    </div>
  ))
}

export default List
