import styles from './style.module.scss'
import Button from '@/_components/common/Button/page'
import Image from 'next/image'

const Card = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.top}>
        <div>
          <div className={styles.accountName}>저축예금통장</div>
          <div className={styles.accountNumber}>
            123456-78-910112
            <Image
              src='/icon/icon-copy.svg'
              alt='copy'
              width={17}
              height={18}
              className={styles.image}
            />
          </div>
        </div>
        <div>
          <Button
            name='설정'
            type='Outline'
            size='Small'
            status='Default'
            href=''
          />
        </div>
      </header>
      <main className={styles.contents}>
        <div className={styles.amount}>12,345,600원</div>
        <div className={styles.reload}>
          <Image
            src='/icon/icon-reload.svg'
            alt='reload'
            width={20}
            height={20}
          />
        </div>
      </main>
      <footer className={styles.btnGroup}>
        <Button
          name='거래내역'
          type='Soft'
          status='Default'
          size='Medium'
          href=''
        />
        <Button
          name='이체하기'
          type='Fill'
          status='Default'
          size='Medium'
          href='/home/transfer'
        />
      </footer>
    </div>
  )
}

export default Card
