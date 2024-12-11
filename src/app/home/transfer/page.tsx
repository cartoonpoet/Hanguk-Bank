'use client'

import NavBar from '@/app/_component/NavBar/page'
import styles from './_style/page.module.scss'
import TextField from '@/app/_component/TextField/page'
import ContentSwitcher from '@/app/_component/ContentSwitcher/page'
import SearchBar from '@/app/_component/SearchBar/page'
import AccountRow from '@/app/_component/AccountRow/page'
import { accountRows } from './_hooks/model'
import React, { useState } from 'react'
import Button from '@/app/_component/Button/page'

const Transfer = () => {
  const [selected, setSelected] = useState<string>('')
  return <div className={styles.container}>
    <div className={styles.top}>
      <NavBar leftControl="icon" rightControl="icon" title />
      <header className={styles.user}>
        누구에게 보낼까요?
      </header>
      <TextField />
      <ContentSwitcher />
      <SearchBar />
    </div>
    <div className={styles.subText}>
      <div className={styles.recently}>최근 보낸 계좌</div>
      {accountRows.map(accountRow => (<AccountRow key={accountRow.accountNumber} accountType={accountRow.accountType}
                                                  accountNumber={accountRow.accountNumber}
                                                  name={accountRow.name}
                                                  selected={selected === accountRow.accountNumber}
                                                  onClick={() => {
                                                    if(accountRow.accountNumber === selected) setSelected('')
                                                    else setSelected(accountRow.accountNumber)
                                                  }} />))}
    </div>

    <div className={styles.fixedBtn}><Button name="다음" type="Fill" status={!selected ? 'Disabled' : 'Default'}
                                             size="Large" href="/" /></div>
  </div>

}

export default Transfer