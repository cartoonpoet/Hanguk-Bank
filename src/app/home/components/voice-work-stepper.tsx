'use client'

import FloatingButton from './floating-button'
import Mic from '/public/icon/icon-mic.svg'

import styled from 'styled-components'
import TransferWork from './transfer-work'
import VoiceWork from './voice-work'

import AccountWork from './account-work'

type ContentRoute = 'VOICE' | 'TRANSFER' | 'ACCOUNT_LIST'

const StepperContent = {
  VOICE: VoiceWork,
  TRANSFER: TransferWork,
  ACCOUNT_LIST: AccountWork,
}

interface VoiceWorkStepperProps {
  step: ContentRoute
}

const VoiceWorkStepper = ({ step = 'VOICE' }: VoiceWorkStepperProps) => {
  const MainContent = StepperContent[step] ?? null

  return (
    <Container>
      <MainContent />
      <div>
        <FloatingButton>
          <Mic />
        </FloatingButton>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-block: 0 34px;
`

export default VoiceWorkStepper
