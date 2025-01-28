import Badge from '@/_components/common/Badge/page'
import BadgeGroup from '@/_components/common/BadgeGroup/page'
import Title from '@/_components/common/BottomSheet/components/title'
import Account from '@/_components/common/Account/account'
import ShareIcon from '/public/icon/icon-share.svg'
import { VoiceWorkProps } from './voice-work-stepper'
import { useEffect } from 'react'

const supportTxt: string[] = ['추가이체 해줘', '거래내역 알려줘']
const TransferResult = ({
  speechText,

  handleContentRoute,
}: VoiceWorkProps) => {
  // useEffect(() => {
  //   handleToggleSpeaking()
  //   speakText('김손자에게 100,000만원 보냈어요.')
  // }, [])

  return (
    <>
      <Title title='김손자에게 100,000원 보냈어요' />
      <Account
        ownerName='우리'
        accountType='우리'
        accountNumber='1002-345-678910'
        Icon={ShareIcon}
      />
      <BadgeGroup>
        {supportTxt.map((item) => (
          <Badge key={item} text={item} />
        ))}
      </BadgeGroup>
    </>
  )
}

export default TransferResult
