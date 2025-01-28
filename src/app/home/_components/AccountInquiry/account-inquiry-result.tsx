import React from 'react'
import { AccountInquiryProps } from './account-inquiry-stepper'
import BadgeGroup from '@/_components/common/BadgeGroup/page'
import Badge from '@/_components/common/Badge/page'
import Title from '@/_components/common/BottomSheet/components/title'
import Account from '@/_components/common/Account/account'

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
      <BadgeGroup>
        {supportTxt.map((item) => (
          <Badge key={item} text={item} />
        ))}
      </BadgeGroup>
    </>
  )
}

export default AccountInquiryResult
