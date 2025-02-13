import styles from './style.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { URL } from '@/_constants/url'

const menuList = [
  {
    src: '/menu/search.svg',
    name: '전체 계좌 조회',
    url: URL.inquiry,
  },
  {
    src: '/menu/receipt.svg',
    name: '공과금 내기',
    url: URL.customerService,
  },
  {
    src: '/menu/memo.svg',
    name: '상품 가입',
    url: URL.product,
  },
  {
    src: '/menu/atm.svg',
    name: 'ATM 돈찾기',
    url: '',
  },
  {
    src: '/menu/money.svg',
    name: '자동이체 관리',
    url: '',
  },
  {
    src: '/menu/shield.svg',
    name: '인증서',
    url: '',
  },
  {
    src: '/menu/lock.svg',
    name: '보안서비스',
    url: '',
  },
  {
    src: '/menu/call.svg',
    name: '고객센터',
    url: URL.customerService,
  },
  {
    src: '/menu/guide.svg',
    name: '사용안내',
    url: '',
  },
  {
    src: '/menu/message.svg',
    name: '의견 말하기',
    url: '',
  },
]
const List = () => {
  const router = useRouter()

  return menuList.map((menu) => (
    <div className={styles.wrapper} key={menu.src} onClick={() => router.push(menu.url)}>
      <Image src={menu.src} alt={menu.name} width={48} height={48} />
      <div className={styles.name}>{menu.name}</div>
    </div>
  ))
}

export default List
