'use client'

import SelectAccount from './SelectAccount/SelectAccount'
import EnterAmount from '@/_components/Transfer/EnterAmount/page'
import { useFunnel } from '@/_hooks/useFunnel'
import ConfirmAccount from '@/_components/Transfer/ConfirmAccount/ConfirmAccount'
import React from 'react'

// 전체 스텝을 담은 배열
const steps = [
  '계좌 선택',
  '금액 입력',
  '통장 확인',
  '이체 확인',
  '비번 입력',
  '이체 완료',
]

const Transfer = () => {
  const { Funnel, Step, setStep } = useFunnel(steps[0])

  const nextClickHandler = (step: string) => {
    setStep(step)
  }

  return <Funnel>
    <Step name="계좌 선택">
      <SelectAccount onNext={() => nextClickHandler(steps[1])} />
    </Step>
    <Step name="금액 입력">
      <EnterAmount onNext={() => nextClickHandler(steps[2])}
                   onPrev={() => nextClickHandler(steps[0])} />
    </Step>
    <Step name="통장 확인">
      <ConfirmAccount onNext={() => nextClickHandler(steps[3])}
                      onPrev={() => nextClickHandler(steps[1])}/>
    </Step>
  </Funnel>
}

export default Transfer