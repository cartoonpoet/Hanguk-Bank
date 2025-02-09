'use client'

import React, { PropsWithChildren } from 'react'
import { AccountProps } from './account.type'
import ShareIcon from '/public/icon/icon-share.svg'

const Container = ({ children }: PropsWithChildren) => {
  return <div className='border rounded-2xl p-5 mb-8'>{children}</div>
}

const OnwerName = ({ ownerName }: { ownerName: string }) => {
  return <strong className='text-black'>{ownerName}</strong>
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
      <div className='flex items-center justify-between gap-2'>
        <div className='flex flex-col items-start gap-1'>
          <OnwerName ownerName={ownerName} />
          <AccountNumber
            accountType={accountType}
            accountNumber={accountNumber}
          />
        </div>
        <div>
          <ShareIcon />
        </div>
      </div>
    </Container>
  )
}

export default Account
