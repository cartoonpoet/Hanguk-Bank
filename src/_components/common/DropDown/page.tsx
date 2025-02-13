import styles from './style.module.scss'
import {ArrowDown} from '@/_assets/icons'

const DropDown = () => {
  return (
    <main className={styles.wrapper}>
      <div>전체</div>
      <div className={styles.image}>
        <ArrowDown width="11.6" height="6.6" fill="#687864"/>
      </div>
    </main>
  )
}

export default DropDown
