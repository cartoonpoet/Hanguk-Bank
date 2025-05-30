'use client'

import Account from '@/_components/common/Account/account'
import Title from '@/_components/common/BottomSheet/components/title'

import WorkBadgeGroup from '../../WorkBadgeGroup/work-badge-group'

import ShareIcon from '/public/icon/icon-share.svg'

const supportTxt = ['추가이체 해줘', '거래내역 알려줘']

const TransferResult = () => {
  return (
    <>
      <Title title='김손자에게 100,000원 보냈어요' />
      <Account
        ownerName='우리'
        accountType='우리'
        accountNumber='1002-345-678910'
        Icon={ShareIcon}
      />
      <WorkBadgeGroup data={supportTxt} />
    </>
  )
}

export default TransferResult
