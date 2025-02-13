'use client'
import { useContext } from 'react'
import AiAvatar from '@/app/ai/_component/AiAvatar/page'
import { AiContext } from '@/_contexts/useAiContext'
import WorkList from '@/app/ai/_component/WorkList/page'
import From from '@/app/ai/_component/From/page'
import To from '@/app/ai/_component/To/page'
import AiContextProvider from '@/_contexts/useAiContext'
import Tell from '@/app/ai/_component/Tell/page'
import Confirm from '@/app/ai/_component/Confirm/page'
import Transferred from '@/app/ai/_component/Transferred/page'
import { ToastContainer } from 'react-toastify'
import Balance from './_component/Balance/page'
import Method from './_component/Method/page'
import Savings from './_component/Savings/page'
import Description from './_component/Description/page'
import Manual from '@/_components/Manual/page'
import styles from './_style/page.module.scss'
import { URL } from '@/_constants/url'
import { useRouter } from 'next/navigation'
import ConsultationType from './_component/ConsultationType/page'
import ApplicationType from './_component/ApplicationType/page'
import Calling from '@/_components/Calling/page'
import ChatBot from '@/_components/ChatBot/page'

const eachModeComponent = {
  WorkList: <WorkList />,
  From: <From />,
  To: <To />,
  Tell: <Tell />,
  Confirm: <Confirm />,
  Transferred: <Transferred />,
  Balance: <Balance />,
  Method: <Method />,
  Savings: <Savings />,
  Description: <Description />,
  ConsultationType: <ConsultationType />,
  ApplicationType: <ApplicationType />,
}

const AI = () => {
  const {
    mode,
    isShowManual,
    setIsShowManual,
    setWork,
    consultationType,
    applicationType,
    work,
  } = useContext(AiContext)
  const router = useRouter()

  const onClickClose = () => {
    setIsShowManual(false)
    setTimeout(() => {
      setWork(null)
      router.replace(URL.home)
    }, 5000)
  }

  if (work === 'CallCenter' && applicationType)
    return consultationType === '전화 상담' ? <Calling /> : <ChatBot />

  return (
    <div className={styles.container}>
      {isShowManual && (
        <div className={styles.modal}>
          <Manual onClickClose={onClickClose} isShowMic isShowButton={false} />
        </div>
      )}
      <AiAvatar />
      <ToastContainer />
      {eachModeComponent[mode]}
    </div>
  )
}

const Page = () => {
  return (
    <AiContextProvider>
      <AI />
    </AiContextProvider>
  )
}

export default Page
