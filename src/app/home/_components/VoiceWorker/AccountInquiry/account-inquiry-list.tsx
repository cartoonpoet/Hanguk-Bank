import Title from '@/_components/common/BottomSheet/components/title'
import TransferList from '@/_components/common/BottomSheet/components/transfer-list'

import WorkBadgeGroup from '../../WorkBadgeGroup/work-badge-group'

const supportTxt = ['거래내역 알려줘', '다른 계좌 보여줘']

const TRANSFER_LIST = [
  {
    id: 1,
    bankName: '저축예금통장',
    accountNumber: '한국 123456-78-9101112',
    expense: '12,345,600',
  },
  {
    id: 2,
    bankName: '한국 스마트 적금',
    accountNumber: '한국 987654-32-109876',
    expense: '8,800,000',
  },
]

const AccountInquiryList = () => {
  return (
    <>
      <Title title='어떤 계좌에서 조회 할까요?' />
      <div className='flex'>
        <span className='text-black text-lg'>예금 · 적금</span>
        &nbsp;
        <span className='text-lg' style={{ color: '#007BFF' }}>
          {TRANSFER_LIST.length}
        </span>
      </div>
      <TransferList data={TRANSFER_LIST} className='mt-2 mb-8' />
      <WorkBadgeGroup data={supportTxt} />
      {/* {speechText && <VoiceText text={speechText ? `"${speechText}"` : ''} />} */}
    </>
  )
}

export default AccountInquiryList
