import Badge from '@/_components/common/Badge/page'
import BadgeGroup from '@/_components/common/BadgeGroup/page'
import Title from '@/_components/common/BottomSheet/components/title'
import VoiceText from '@/_components/common/BottomSheet/components/voiceText'
import React from 'react'
import { AccountInquiryProps } from './account-inquiry-stepper'
import TransferList from '@/_components/common/BottomSheet/components/transfer-list'

const supportTxt: string[] = ['거래내역 알려줘', '다른 계좌 보여줘']

const TRANSFER_LIST = [
  {
    id: 1,
    bankName: '저축예금통장',
    accountNumber: '한국 123456-78-9101112',
    expense: '12,345,600',
  },
  {
    id: 2,
    bankName: '입출금 통장',
    accountNumber: '한국 987654-32-109876',
    expense: '12,345,600',
  },
]

const AccountInquiryList = ({
  isListening,
  speechText,
}: AccountInquiryProps) => {
  return (
    <>
      <Title title='어떤 계좌에서 조회 할까요?' />
      <div className='flex'>
        <span className='text-black text-lg'>입출금</span>
        &nbsp;
        <span className='text-lg' style={{ color: '#007BFF' }}>
          {TRANSFER_LIST.length}
        </span>
      </div>
      <TransferList data={TRANSFER_LIST} />
      <BadgeGroup>
        {supportTxt.map((item) => (
          <Badge key={item} text={item} />
        ))}
      </BadgeGroup>
      <VoiceText text={speechText ? `"${speechText}"` : ''} />
    </>
  )
}

export default AccountInquiryList
