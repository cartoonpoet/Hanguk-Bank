import AccountRow from '@/_components/common/AccountRow/page'
import React from 'react'

interface AccountCardProps {
  accountNumber: string
  accountName: string
  balance: number
}

const AccountCard = ({ accountName, accountNumber, balance }: AccountCardProps) => {
  return <main className="flex flex-col rounded-2xl border border-Border-Default overflow-hidden">
    <AccountRow
      accountType="한국"
      accountNumber={accountNumber}
      name={accountName}
      selected={false}
      isUseFavorite={false}
      isUseCopy
    />
    <section className="flex justify-end px-5 text-2xl font-bold pb-5">{balance.toLocaleString()}원</section>
    <section className="flex justify-center bg-Neutral-Tertiary py-3.5 text-lg font-semibold">송금</section>
  </main>
}

export default AccountCard