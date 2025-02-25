'use client'

import Title from '@/_components/common/BottomSheet/components/title'
import { useContext, useState } from 'react'
import styled from 'styled-components'
import useSpeech from '../../transfer/_hooks/useSpeech'

import { AiContext } from '@/_contexts/useAiContext'
import WorkBadgeGroup from '../WorkBadgeGroup/work-badge-group'
import AccountInquiryStepper from './AccountInquiry/account-inquiry-stepper'
import AccountTransferStepper from './AccountTransfer/account-transfer-stepper'
import FloatingButton from './AccountTransfer/floating-button'
import CustomerServicetepper from './CustomerService/customer-service-stepper'
import FinancialProductsStepper from './FinancialProducts/financial-product-stepper'

const supportTxt: string[] = ['이체 해줘', '거래내역 알려줘', '대출 알려줘']

const VoiceWorker = ({
  close,
  handleImgType,
}: {
  close: () => void
  handleImgType: (type: string) => void
}) => {
  const { mode, work, selectedTo, connectionState } = useContext(AiContext)
  const [isShowMic, setIsShowMic] = useState(true)
  const handleIsShowMic = (status: boolean) => setIsShowMic(status)

  return (
    <>
      {/* <div>{connectionState}</div> */}
      <Container>
        {work === null && (
          <div className='mb-3'>
            <Title title='원하는 업무를 말씀해 주세요.' />
            <WorkBadgeGroup data={supportTxt} />
          </div>
        )}
        {work === 'Transfer' && (
          <AccountTransferStepper mode={mode} handleImgType={handleImgType} />
        )}
        {work === 'Account' && <AccountInquiryStepper mode={mode} />}
        {work === 'Savings' && (
          <FinancialProductsStepper
            mode={mode}
            close={close}
            handleIsShowMic={handleIsShowMic}
          />
        )}
        {work === 'CallCenter' && (
          <CustomerServicetepper
            mode={mode}
            close={close}
            handleImgType={handleImgType}
          />
        )}

        {/* {transcript && <VoiceText text={transcript ? `"${transcript}"` : ''} />} */}
        {isShowMic && (
          <div className='flex item-center justify-center'>
            <FloatingButton />
          </div>
        )}
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: 0 34px;
`

export default VoiceWorker
