'use client'

import FloatingButton from './floating-button'

import styled from 'styled-components'
import TransferWork from './transfer-work'
import VoiceWork from './voice-work'

import { useState } from 'react'
import useSpeech from '../transfer/_hooks/useSpeech'
import AccountWork from './account-work'
import CheckAccount from './check-account'
import TransferResult from './transfer-result'
import AiAvatar from './AiAvatar/ai-avatar'
import TransferInfo from './transfer-info'

export interface VoiceWorkProps {
  isListening: boolean
  speechText?: string
  handleContentRoute: (step: ContentRoute) => void
}

const StepperContent = {
  VOICE: VoiceWork,
  TRANSFER: TransferWork,
  ACCOUNT_WORK: AccountWork,
  TRANSFER_INFO: TransferInfo,
  CHECK_ACCOUNT: CheckAccount,
  TRANSFER_RESULT: TransferResult,
}

type ContentRoute = keyof typeof StepperContent

export const DELAY = 1_000

const VoiceWorkStepper = () => {
  const [contentRoute, setContentRoute] = useState<ContentRoute>('VOICE')
  const handleContentRoute = (step: ContentRoute) => setContentRoute(step)
  const MainContent = StepperContent[contentRoute]

  const { transcript, isListening, handleToggleListening } = useSpeech()

  return (
    <Container>
      <div className='mb-4'>
        <AiAvatar />
        <MainContent
          isListening={isListening}
          speechText={transcript}
          handleContentRoute={handleContentRoute}
        />
      </div>
      <div className='flex item-center justify-center'>
        <FloatingButton handleClick={handleToggleListening} />
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-block: 0 34px;
`

export default VoiceWorkStepper
