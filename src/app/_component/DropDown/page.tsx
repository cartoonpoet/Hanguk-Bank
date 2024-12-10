import styles from './style.module.scss'
import Image from 'next/image'

const DropDown = () => {
  return <main className={styles.wrapper}>
    <div>전체</div>
    <div className={styles.image}><Image src="/icon/arrow-down.svg" alt="DropDown" width={11.6} height={6.6}/></div>
  </main>
}

export default DropDown;