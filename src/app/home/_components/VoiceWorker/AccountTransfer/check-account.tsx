'use client'

import Account from '@/_components/common/Account/account'
import Title from '@/_components/common/BottomSheet/components/title'

const CheckAccount = ({
  handleImgType,
}: {
  handleImgType: (type: string) => void
}) => {
  return (
    <>
      <Title
        title='김손자에게 100,000원 보낼게요'
        description='받는 분과 금액을 한 번 더 확인해주세요.'
      />
      <Account
        ownerName='우리'
        accountType='우리'
        accountNumber='1002-345-678910'
      />
    </>
  )
}

export default CheckAccount
