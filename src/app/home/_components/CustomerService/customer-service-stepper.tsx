import React, { useState } from 'react'
import styled from 'styled-components'

import useSpeech from '../../transfer/_hooks/useSpeech'

import AiAvatar from '../AiAvatar/ai-avatar'
import FloatingButton from '../AccountTransfer/floating-button'
import VoiceWork from './voice-work'
import CounselList from './counsel-list'
import ConsultationType from './consultation-type'

const Content = {
  VOICE: VoiceWork,
  LIST: CounselList,
  TYPE: ConsultationType,
}

type ContentRoute = keyof typeof Content

export interface CustomerServiceProps {
  isListening: boolean
  speechText?: string
  handleContentRoute: (step: ContentRoute) => void
}

const CustomerServicetepper = () => {
  const { transcript, isListening, handleToggleListening } = useSpeech()
  const [contentRoute, setContentRoute] = useState<ContentRoute>('TYPE')
  const handleContentRoute = (step: ContentRoute) => setContentRoute(step)
  const MainContent = Content[contentRoute]

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
        <FloatingButton />
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

export default CustomerServicetepper
