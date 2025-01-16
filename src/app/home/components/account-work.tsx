import Title from '@/_components/common/BottomSheet/components/title'
import React from 'react'
import AccountList from './account-list'

const AccountWork = () => {
  return (
    <>
      <Title title='어떤 계좌에서 이체할까요?' />
      <div style={{ display: 'flex' }}>
        <span style={{ color: '#000000', fontSize: '18px' }}>
          최근 이체 계좌
        </span>
      </div>
      <AccountList />
    </>
  )
}

export default AccountWork
