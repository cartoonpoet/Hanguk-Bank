'use client'

import React, { useEffect } from 'react'
import { DELAY, type VoiceWorkProps } from './voice-work-stepper'
import Title from '@/_components/common/BottomSheet/components/title'

const TransferInfo = ({
  isListening,
  speechText,
  handleContentRoute,
}: VoiceWorkProps) => {
  useEffect(() => {
    if (!speechText) return

    if (!isListening) {
      setTimeout(() => {
        handleContentRoute('CHECK_ACCOUNT')
      }, DELAY)
    }
  }, [speechText, isListening])

  return <Title title='받는 분의 은행과 계좌번호를 말씀해 주세요.' />
}

export default TransferInfo
