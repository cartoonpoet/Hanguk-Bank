import Account from '@/_components/common/Account/account'
import Title from '@/_components/common/BottomSheet/components/title'
import WorkBadgeGroup from '../WorkBadgeGroup/work-badge-group'
import { AccountInquiryProps } from './account-inquiry-stepper'

const supportTxt: string[] = ['대출 알려줘', '전체 계좌 보여줘']

const AccountInquiryResult = ({
  isListening,
  speechText,
}: AccountInquiryProps) => {
  return (
    <>
      <Title title='잔액은 12,345,600원이에요.' />
      <Account
        ownerName='우리'
        accountType='우리'
        accountNumber='1002-345-678910'
      />
      <WorkBadgeGroup data={supportTxt} />
    </>
  )
}

export default AccountInquiryResult
