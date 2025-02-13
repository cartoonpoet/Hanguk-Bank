'use client'

import TransferWork from './transfer-work'

import AccountWork from './account-work'
import CheckAccount from './check-account'
import TransferInfo from './transfer-info'
import TransferResult from './transfer-result'

export const DELAY = 2_000

const AccountTransferStepper = ({ mode }: { mode: string }) => {
  return (
    <>
      <div className='mb-4'>
        {mode === 'From' && <TransferWork />}
        {mode === 'To' && <AccountWork />}
        {mode === 'Tell' && <TransferInfo />}
        {mode === 'Confirm' && <CheckAccount />}
        {mode === 'Transferred' && <TransferResult />}
      </div>
    </>
  )
}

export default AccountTransferStepper
