'use client'

import React, { useState } from 'react'
import styles from './who.module.scss'
import NavBar from '@/_components/common/NavBar/page'
import TextField from '@/_components/common/TextField/page'
import ContentSwitcher from '@/_components/common/ContentSwitcher/page'
import SearchBar from '@/_components/common/SearchBar/page'
import { accountRows } from '@/_constants/model'
import AccountRow from '@/_components/common/AccountRow/page'
import Button from '@/_components/common/Button/page'

const Who = () => {
  const [selected, setSelected] = useState<string>('')
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <NavBar leftControl='icon' rightControl='icon' title="이체" />
        <header className={styles.user}>누구에게 보낼까요?</header>
        <TextField />
        <ContentSwitcher />
        <SearchBar />
      </div>
      <div className={styles.subText}>
        <div className={styles.recently}>최근 보낸 계좌</div>
        {accountRows.map((accountRow) => (
          <AccountRow
            key={accountRow.accountNumber}
            accountType={accountRow.accountType}
            accountNumber={accountRow.accountNumber}
            name={accountRow.name}
            selected={selected === accountRow.accountNumber}
            onClick={() => {
              if (accountRow.accountNumber === selected) setSelected('')
              else setSelected(accountRow.accountNumber)
            }}
          />
        ))}
      </div>

      <div className={styles.fixedBtn}>
        <Button
          name='다음'
          type='Fill'
          status={!selected ? 'Disabled' : 'Default'}
          size='Large'
          href='/'
        />
      </div>
    </div>
  )
};

export default Who;