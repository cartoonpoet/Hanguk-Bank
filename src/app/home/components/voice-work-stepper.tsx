'use client'

import FloatingButton from './floating-button'
import Mic from '/public/icon/icon-mic.svg'

import styled from 'styled-components'
import TransferWork from './transfer-work'
import VoiceWork from './voice-work'

import AccountWork from './account-work'
import useSpeech from '../transfer/_hooks/useSpeech'
import { useState } from 'react'
import CheckAccount from './check-account'
import TransferResult from './transfer-result'

export interface VoiceWorkProps {
  isListening: boolean
  speechText?: string
  speakText: (text: string) => void
  handleContentRoute: (step: ContentRoute) => void
  handleToggleSpaeking: () => void
}

const StepperContent = {
  VOICE: VoiceWork,
  TRANSFER: TransferWork,
  ACCOUNT_WORK: AccountWork,
  CHECK_ACCOUNT: CheckAccount,
  TRANSFER_RESULT: TransferResult,
}

type ContentRoute = keyof typeof StepperContent

export const DELAY = 1_000

const VoiceWorkStepper = () => {
  const [contentRoute, setContentRoute] = useState<ContentRoute>('VOICE')
  const handleContentRoute = (step: ContentRoute) => setContentRoute(step)
  const MainContent = StepperContent[contentRoute]

  const {
    transcript,
    isListening,

    handleToggleListening,
    handleToggleSpaeking,
    speakText,
  } = useSpeech()

  const [result, setResult] = useState('')

  return (
    <Container>
      <div className='mb-4'>
        <MainContent
          isListening={isListening}
          speechText={transcript}
          speakText={speakText}
          handleContentRoute={handleContentRoute}
          handleToggleSpaeking={handleToggleSpaeking}
        />
      </div>
      <div className='flex item-center justify-center'>
        <FloatingButton handleClick={handleToggleListening}>
          <Mic />
        </FloatingButton>
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
