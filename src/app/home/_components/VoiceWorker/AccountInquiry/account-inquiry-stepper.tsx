import { useState } from 'react'

import useSpeech from '@/app/home/transfer/_hooks/useSpeech'
import AiAvatar from '../../AiAvatar/ai-avatar'
import AccountInquiryList from './account-inquiry-list'
import AccountInquiryResult from './account-inquiry-result'

const Content = {
  AccountList: AccountInquiryList,
  AccountResult: AccountInquiryResult,
}

type ContentRoute = keyof typeof Content

export interface AccountInquiryProps {
  isListening: boolean
  speechText?: string
  handleContentRoute: (step: ContentRoute) => void
}

const AccountInquiryStepper = ({
  transcript,
  isListening,
}: {
  transcript: string
  isListening: boolean
}) => {
  
  const [contentRoute, setContentRoute] = useState<ContentRoute>('AccountList')
  const handleContentRoute = (step: ContentRoute) => setContentRoute(step)
  const MainContent = Content[contentRoute]

  return (
    <div className='mb-4'>
      <MainContent
        isListening={isListening}
        speechText={transcript}
        handleContentRoute={handleContentRoute}
      />
    </div>
  )
}

export default AccountInquiryStepper
