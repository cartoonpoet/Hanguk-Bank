'use client'

import Title from '@/_components/common/BottomSheet/components/title'
import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import useSpeech from '../../transfer/_hooks/useSpeech'

import AiAvatar from '../AiAvatar/ai-avatar'

import WorkBadgeGroup from '../WorkBadgeGroup/work-badge-group'
import AccountInquiryStepper from './AccountInquiry/account-inquiry-stepper'
import AccountTransferStepper from './AccountTransfer/account-transfer-stepper'
import FloatingButton from './AccountTransfer/floating-button'
import CustomerServicetepper from './CustomerService/customer-service-stepper'
import FinancialProductsStepper from './FinancialProducts/financial-product-stepper'
import VoiceText from '@/_components/common/BottomSheet/components/voiceText'
import { AiContext } from '@/_contexts/useAiContext'

const supportTxt: string[] = ['이체 해줘', '거래내역 알려줘', '대출 알려줘']

const Content = {
  Voice: () => (
    <div className='mb-3'>
      <Title title='원하는 업무를 말씀해 주세요.' />
      <WorkBadgeGroup data={supportTxt} />
    </div>
  ),
  Transfer: AccountTransferStepper,
  Inquiry: AccountInquiryStepper,
  Financial: FinancialProductsStepper,
  Service: CustomerServicetepper,
}

type ContentRoute = keyof typeof Content

const VoiceWorker = () => {
  const { scene, selectedTo } = useContext(AiContext)
  const { transcript, isListening, handleToggleListening } = useSpeech()
  const {
    transcript: speakTxt,
    isListening: isSubListening,
    handleToggleListening: handleSubConetntToggleListening,
  } = useSpeech()
  const [route, setRoute] = useState<ContentRoute>('Voice')
  const handleRoute = (step: ContentRoute) => setRoute(step)
  const MainContent = Content[route]

  useEffect(() => {
    if (!transcript) return

    let step: ContentRoute = 'Voice'

    if (transcript.includes('보내')) step = 'Transfer'
    if (transcript.includes('조회')) step = 'Inquiry'
    if (transcript.includes('적금')) step = 'Financial'
    if (transcript.includes('고객센터 ')) step = 'Service'

    setTimeout(() => {
      handleRoute(step)
    }, 1000)
  }, [transcript])

  const handleClick = () => {
    if (route === 'Voice') {
      handleToggleListening()
    } else {
      handleSubConetntToggleListening()
    }
  }
  if (!scene) return null

  return (
    <Container>
      <MainContent transcript={speakTxt} isListening={isSubListening} />
      {transcript && <VoiceText text={transcript ? `"${transcript}"` : ''} />}
      <div className='flex item-center justify-center'>
        <FloatingButton handleClick={handleClick} />
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

export default VoiceWorker
