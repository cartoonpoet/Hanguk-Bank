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

export interface VoiceWorkProps {
  speechText: string
  handleContentRoute: (step: ContentRoute) => void
  speakText: (text: string) => void
  isListening: boolean
}

const StepperContent = {
  VOICE: VoiceWork,
  TRANSFER: TransferWork,
  ACCOUNT_LIST: AccountWork,
  CHECK_ACCOUNT: CheckAccount,
}

type ContentRoute = keyof typeof StepperContent

const VoiceWorkStepper = () => {
  const [contentRoute, setContentRoute] = useState<ContentRoute>('TRANSFER')
  const handleContentRoute = (step: ContentRoute) => setContentRoute(step)

  const { transcript, isListening, handleToggleListening, speakText } =
    useSpeech()

  const MainContent = StepperContent[contentRoute]

  return (
    <Container>
      <div className='mb-4'>
        <MainContent
          isListening={isListening}
          speechText={transcript}
          handleContentRoute={handleContentRoute}
          speakText={speakText}
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
