import styles from './style.module.scss'
import DropDown from '@/_components/common/DropDown/page'
import { ReactNode } from 'react'

interface SearchBarProps {
  iconChildren?: ReactNode
}

const SearchBar = ({ iconChildren }: SearchBarProps) => {
  return (
    <div className={styles.wrapper}>
      <DropDown />
      <div className={styles.search}>
        {iconChildren}
      </div>
    </div>
  )
}

export default SearchBar
