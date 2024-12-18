'use client'

import React from 'react'
import FloatingBtn from './FloatingBtn'
import Mic from '/public/icon/icon-mic.svg'

import styled from 'styled-components'
import Badge from '@/app/_component/Badge/page'

const VoiceWork = () => {
  return (
    <Container>
      <div style={{ padding: '20px', fontSize: '18px' }}>
        <strong style={{ color: 'black' }}>원하는 업무를 말씀해 주세요.</strong>
      </div>
      <BadgeGroup>
        <Badge text='이체 해줘' />
        <Badge text='거래내역 알려줘' />
        <Badge text='대출 알려줘' />
      </BadgeGroup>
      <VoiceText>
        <span>{`"김손자에게 10만원 보내줘"`}</span>
      </VoiceText>
      <div>
        <FloatingBtn>
          <Mic />
        </FloatingBtn>
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

const BadgeGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
`

const VoiceText = styled.div`
  padding: 20px;
  color: #4e5968;
`
export default VoiceWork
