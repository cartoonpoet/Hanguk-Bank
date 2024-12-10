import styles from './style.module.scss'
import DropDown from '@/app/_component/DropDown/page'
import SearchIcon from '/public/icon/search.svg'

const SearchBar = () => {
  return <div className={styles.wrapper}>
    <DropDown />
    <div className={styles.search}>
      <SearchIcon width={16.6} height={16.6} />
    </div>
  </div>
}

export default SearchBar