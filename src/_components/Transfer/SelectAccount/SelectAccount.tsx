'use client'

import React, { use } from 'react'
import styles from './selectAccount.module.scss'
import NavBar from '@/_components/common/NavBar/page'
import TextField from '@/_components/common/TextField/page'
import ContentSwitcher from '@/_components/common/ContentSwitcher/page'
import SearchBar from '@/_components/common/SearchBar/page'
import { accountRows } from '@/_constants/model'
import AccountRow from '@/_components/common/AccountRow/page'
import Button from '@/_components/common/Button/page'
import { StepMoveProps } from '@/_types/FunnelTypes'
import { TransferContext } from '@/_contexts/useTransferContext'
import SearchIcon from '/public/icon/search.svg'


const SelectAccount = ({ onNext }: StepMoveProps) => {
  const { selected, setSelected } = use(TransferContext)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <NavBar leftControl="icon" rightControl="icon" title="이체" />
        <header className={styles.user}>누구에게 보낼까요?</header>
        <TextField />
        <ContentSwitcher />
        <SearchBar iconChildren={<SearchIcon width={16.6} height={16.6} />} />
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
            isUseFavorite
            isUseCopy={false}
          />
        ))}
      </div>

      <div className={styles.fixedBtn}>
        <Button
          type="Fill"
          status={!selected ? 'Disabled' : 'Default'}
          size="Large"
          onClick={onNext}
        >다음</Button>
      </div>
    </div>
  )
}

export default SelectAccount