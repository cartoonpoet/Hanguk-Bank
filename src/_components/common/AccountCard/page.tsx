import { PencilIcon } from '@/_assets/icons'
import React from 'react'

interface AccountCardProps {
  name: string
  accountNumber: string
  isEditing: boolean
}

const AccountCard = ({ accountNumber, isEditing, name }: AccountCardProps) => {
  return <section className="flex flex-row p-5 rounded-2xl border border-Border-Default border-solid justify-between">
    <aside className="flex flex-col">
      <div className="text-lg font-medium"><span className="font-bold">{name}</span>님</div>
      <div className="text-Neutral-Label text-base font-medium">{accountNumber}</div>
    </aside>
    <aside className="flex justify-center items-center">
      {isEditing && <PencilIcon width="20" height="20" />}
    </aside>
  </section>
}

export default AccountCard