import Title from '@/_components/common/BottomSheet/components/title'
import VoiceText from '@/_components/common/BottomSheet/components/voiceText'
import WorkBadgeGroup from '../WorkBadgeGroup/work-badge-group'
import { AccountInquiryProps } from './account-inquiry-stepper'

const supportTxt = ['대출 알려줘', '전체 계좌 보여줘']

const VoiceWork = ({ isListening, speechText }: AccountInquiryProps) => {
  return (
    <>
      <Title title='원하는 업무를 말씀해 주세요.' />
      <WorkBadgeGroup data={supportTxt} />
      {speechText && <VoiceText text={speechText ? `"${speechText}"` : ''} />}
    </>
  )
}

export default VoiceWork
