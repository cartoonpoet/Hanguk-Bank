import styles from './_style/page.module.scss'
import Card from '@/app/_component/Card/Page'
import List from '@/app/_component/List/page'

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.user}>
        김금융 님
      </header>
      <Card/>
      <section className={styles.listContainer}><List/></section>
    </div>
  )
}
export default Home