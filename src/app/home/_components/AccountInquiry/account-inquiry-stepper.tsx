import React, { useState } from 'react'

import styled from 'styled-components'
import AiAvatar from '../AiAvatar/ai-avatar'
import FloatingButton from '../AccountTransfer/floating-button'
import useSpeech from '../../transfer/_hooks/useSpeech'
import VoiceWork from './voice-work'
import AccountInquiryList from './account-inquiry-list'
import AccountInquiryResult from './account-inquiry-result'

const Content = {
  VOICE: VoiceWork,
  AccountList: AccountInquiryList,
  AccountResult: AccountInquiryResult,
}

type ContentRoute = keyof typeof Content

export interface AccountInquiryProps {
  isListening: boolean
  speechText?: string
  handleContentRoute: (step: ContentRoute) => void
}

const AccountInquiryStepper = () => {
  const { transcript, isListening, handleToggleListening } = useSpeech()
  const [contentRoute, setContentRoute] =
    useState<ContentRoute>('AccountResult')
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

export default AccountInquiryStepper
