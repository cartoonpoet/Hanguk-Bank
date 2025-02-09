'use client'

import TransferWork from './transfer-work'

import { useState } from 'react'
import AccountWork from './account-work'
import CheckAccount from './check-account'
import TransferInfo from './transfer-info'
import TransferResult from './transfer-result'

export interface VoiceWorkProps {
  isListening: boolean
  speechText?: string
  handleContentRoute: (step: ContentRoute) => void
}

const StepperContent = {
  TRANSFER: TransferWork,
  ACCOUNT_WORK: AccountWork,
  TRANSFER_INFO: TransferInfo,
  CHECK_ACCOUNT: CheckAccount,
  // AUTH: FaceAuth,
  TRANSFER_RESULT: TransferResult,
}

type ContentRoute = keyof typeof StepperContent

export const DELAY = 1_000

const AccountTransferStepper = ({
  transcript,
  isListening,
}: {
  transcript: string
  isListening: boolean
}) => {
  const [contentRoute, setContentRoute] = useState<ContentRoute>('TRANSFER')
  const handleContentRoute = (step: ContentRoute) => setContentRoute(step)
  const MainContent = StepperContent[contentRoute]

  return (
    <>
      <div className='mb-4'>
        <MainContent
          isListening={isListening}
          speechText={transcript}
          handleContentRoute={handleContentRoute}
        />
      </div>
    </>
  )
}

export default AccountTransferStepper
