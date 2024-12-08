import styles from './style.module.scss'
import Image from 'next/image'

const TextField = () => {
  return <div className={styles.wrapper}>
    <input placeholder="계좌번호 입력" className={styles.input}/>
    <button className={styles.btn}><Image src="/icon/nav-close.svg" width={13.3} height={13.3} alt="close"/></button>
  </div>
};

export default TextField