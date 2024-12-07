import styles from './_style/page.module.scss'
import Card from '@/app/_component/Card/Page'

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.user}>
        김금융 님
      </header>
      <section><Card/></section>
      <footer>3</footer>
    </div>
  )
}
export default Home