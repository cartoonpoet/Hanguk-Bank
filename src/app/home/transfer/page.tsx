import NavBar from '@/app/_component/NavBar/page'
import styles from './_style/page.module.scss'
import TextField from '@/app/_component/TextField/page'
import ContentSwitcher from '@/app/_component/ContentSwitcher/page'
import SearchBar from '@/app/_component/SearchBar/page'
import AccountRow from '@/app/_component/AccountRow/page'


const accountRows = [
  {
    accountType: '신한',
    name: '김신한',
    accountNumber: '110-234-567890',
  },
  {
    accountType: '국민',
    name: '나국민',
    accountNumber: '421001-23-456789',
  },
  {
    accountType: '카카오뱅크',
    name: '오카카',
    accountNumber: '3333-12-4567891',
  },
  {
    accountType: '국민',
    name: '다국민',
    accountNumber: '421001231-23-456789',
  },
  {
    accountType: '신한',
    name: '손신한',
    accountNumber: '110-231454-567890',
  },
  {
    accountType: '신한',
    name: '냐신한',
    accountNumber: '110-23-567890',
  },
  {
    accountType: '카카오뱅크',
    name: '캬캬캬',
    accountNumber: '1111-12-4567891',
  },
  {
    accountType: '카카오뱅크',
    name: '캬키오',
    accountNumber: '1111-12-4561',
  },
  {
    accountType: '국민',
    name: '마국민',
    accountNumber: '421001-23-4567',
  },
  {
    accountType: '국민',
    name: '엄국민',
    accountNumber: '421001-23-4789',
  },
]

const Transfer = () => {
  return <div className={styles.container}>
    <NavBar leftControl="icon" rightControl="icon" title />
    <header className={styles.user}>
      누구에게 보낼까요?
    </header>
    <TextField />
    <ContentSwitcher />
    <SearchBar />
    <div className={styles.subText}>
      최근 보낸 계좌
      {accountRows.map(accountRow => (<AccountRow key={accountRow.accountNumber} accountType={accountRow.accountType}
                                                  accountNumber={accountRow.accountNumber}
                                                  name={accountRow.name} />))}
    </div>
  </div>

}

export default Transfer