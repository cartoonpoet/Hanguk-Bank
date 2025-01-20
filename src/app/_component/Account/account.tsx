'use client'

import styles from './style.module.scss'
import React, { PropsWithChildren } from 'react'
import { AccountProps } from './account.type'

import cx from 'classnames'
const Container = ({ children }: PropsWithChildren) => {
  return <div className='border rounded-xl p-4 mb-3'>{children}</div>
}

const OnwerName = ({ ownerName }: { ownerName: string }) => {
  return <strong className={cx(styles.txt)}>{ownerName}</strong>
}

const AccountNumber = ({
  accountType,
  accountNumber,
}: {
  accountType: string
  accountNumber: string
}) => {
  return (
    <span
      style={{ color: '#6B7684' }}
    >{`${accountType} ${accountNumber}`}</span>
  )
}

const Account = ({ ownerName, accountType, accountNumber }: AccountProps) => {
  return (
    <Container>
      <div className={cx(styles.flex)} style={{ gap: '0.5rem' }}>
        <div
          className={cx(styles.flex)}
          style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '0.3rem',
          }}
        >
          <OnwerName ownerName={ownerName} />
          <AccountNumber
            accountType={accountType}
            accountNumber={accountNumber}
          />
        </div>
      </div>
    </Container>
  )
}

export default Account
