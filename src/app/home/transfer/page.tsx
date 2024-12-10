import NavBar from '@/app/_component/NavBar/page'
import styles from './_style/page.module.scss'
import TextField from '@/app/_component/TextField/page'
import ContentSwitcher from '@/app/_component/ContentSwitcher/page'
import SearchBar from '@/app/_component/SearchBar/page'

const Transfer = () => {
  return <div className={styles.container}>
    <NavBar leftControl="icon" rightControl="icon" title />
    <header className={styles.user}>
      누구에게 보낼까요?
    </header>
    <TextField/>
    <ContentSwitcher/>
    <SearchBar/>
  </div>

}

export default Transfer