'use client'
import { useRouter } from 'next/navigation'
import {
  ActivityIcon,
  InfoIcon,
  SpeakerFilledIcon,
  FaceTimeFilledIcon,
  AddFriendIcon,
  KeypadIcon,
  MicroPhoneNotIcon,
  PhoneCallIcon,
} from '@/_assets/icons'
import { URL } from '@/_constants/url'

const Calling = () => {
  const router = useRouter()

  return <main className="flex flex-col bg-callingBg h-dvh">
    <section className="flex flex-row justify-between p-4">
      <ActivityIcon fill="#606060" width="28" height="28" />
      <InfoIcon fill="#FFF" width="24" height="24" />
    </section>
    <section className="flex flex-col flex-1">
      <div className="flex justify-center text-gray-400 text-lg font-pretendard font-medium">휴대전화 연결 중...</div>
      <div className="font-pretendard text-white flex justify-center text-3xl font-bold">한국은행</div>
    </section>
    <section className="flex flex-row flex-wrap justify-center gap-10 pb-10">
      <div className="flex flex-col gap-1 items-center basis-1/4">
        <div className="flex justify-center items-center p-6 bg-neutral-600 rounded-full"><SpeakerFilledIcon
          fill="white" width="24" height="24" /></div>
        <div className="font-pretendard text-sm text-white">스피커</div>
      </div>
      <div className="flex flex-col gap-1 items-center basis-1/4">
        <div className="flex justify-center items-center p-6 bg-neutral-600 rounded-full"><FaceTimeFilledIcon
          fill="white" width="24" height="24" /></div>
        <div className="font-pretendard text-sm text-white">FaceTime</div>
      </div>
      <div className="flex flex-col gap-1 items-center basis-1/4">
        <div className="flex justify-center items-center p-6 bg-neutral-600 rounded-full"><MicroPhoneNotIcon
          fill="white" width="24" height="24" /></div>
        <div className="font-pretendard text-sm text-white">소리 끔</div>
      </div>
      <div className="flex flex-col gap-1 items-center basis-1/4">
        <div className="flex justify-center items-center p-6 bg-neutral-600 rounded-full"><AddFriendIcon
          fill="white" width="24" height="24" /></div>
        <div className="font-pretendard text-sm text-white">추가</div>
      </div>
      <div className="flex flex-col gap-1 items-center basis-1/4" onClick={() => router.replace(URL.home)}>
        <div className="flex justify-center items-center p-6 rounded-full bg-red-500"><PhoneCallIcon
          fill="white" width="24" height="24" /></div>
        <div className="font-pretendard text-sm text-white">종료</div>
      </div>
      <div className="flex flex-col gap-1 items-center basis-1/4">
        <div className="flex justify-center items-center p-6 bg-neutral-600 rounded-full"><KeypadIcon
          fill="white" width="24" height="24" /></div>
        <div className="font-pretendard text-sm text-white">키패드</div>
      </div>
    </section>
  </main>
}

export default Calling