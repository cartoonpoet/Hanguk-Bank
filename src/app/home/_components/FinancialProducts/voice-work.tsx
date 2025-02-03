import Title from '@/_components/common/BottomSheet/components/title'
import VoiceText from '@/_components/common/BottomSheet/components/voiceText'
import WorkBadgeGroup from '../WorkBadgeGroup/work-badge-group'
import { FinancialProductsProps } from './financial-product-stepper'

const supportTxt: string[] = ['이체 해줘', '거래내역 알려줘', '대출 알려줘']

const VoiceWork = ({ isListening, speechText }: FinancialProductsProps) => {
  return (
    <>
      <Title title='원하는 업무를 말씀해 주세요.' />
      <WorkBadgeGroup data={supportTxt} />
      {speechText && <VoiceText text={speechText ? `"${speechText}"` : ''} />}
    </>
  )
}

export default VoiceWork
