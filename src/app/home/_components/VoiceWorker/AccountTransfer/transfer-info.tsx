'use client'

import Title from '@/_components/common/BottomSheet/components/title'
import { AiContext } from '@/_contexts/useAiContext'
import { useContext } from 'react'

const TransferInfo = () => {
  const { scene, selectedTo, work } = useContext(AiContext)

  // useEffect(() => {
  //   if (!scene) return

  //   setTimeout(() => {
  //     handleSpeak(scene, '우리은행 100-2345-678910', work)
  //   }, DELAY)
  // }, [])

  return <Title title='받는 분의 은행과 계좌번호를 말씀해 주세요.' />
}

export default TransferInfo
