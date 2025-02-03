'use client'
import { useRouter } from 'next/navigation'
import NavBar from '@/_components/common/NavBar/page'
import { URL } from '@/_constants/url'
import { Avatar, PlusIcon, MicIcon } from '@/_assets/icons'
import Image from 'next/image'

const buttons = ['이체한도 변경', '자동이체 설정', '통장사본 발급']

const ChatBot = () => {
  const router = useRouter()
  return <main className="flex flex-col h-dvh font-pretendard">
    <NavBar leftControl="icon" rightControl="icon" title={<div><span className="text-blue-500">챗봇</span> 상담</div>} />
    <div className="bg-white h-4" />
    <section
      className="flex flex-row px-5 py-2.5 justify-between bg-Brand-On-Tertiary text-white text-base items-center">
      <div>챗봇과 대화중</div>
      <button className="border px-4 py-2 rounded-3xl" onClick={() => router.replace(URL.home)}>상담 종료</button>
    </section>
    <section className="flex flex-col bg-Brand-Secondary flex-1">
      <div className="p-5 text-center text-Neutral-Label text-sm font-medium">2025년 1월 6일 화요일</div>
      <div className="flex flex-col px-5 gap-1">
        <div className="flex flex-row items-center gap-2">
          <Image src={Avatar} alt="아바타" className="size-8" />
          <div className="text-sm font-semibold">나비서 은행원</div>
          <div className="text-sm font-medium text-Neutral-Label">오전 11:18</div>
        </div>
        <div className="flex gap-4 text-base font-medium bg-white px-4 py-3 rounded-t-3xl rounded-r-3xl max-w-52">
          안녕하세요. 김금융 고객님! <br />
          무엇을 도와드릴까요?
        </div>
        <nav className="flex flex-row gap-1 mt-1">
          {buttons.map((button) => (<button key={button}
                                            className="text-sm font-semibold bg-white px-4 py-2 rounded-3xl text-Brand-Default">{button}</button>))}
        </nav>
      </div>
    </section>
    <section className="flex flex-row bg-white px-5 py-3 justify-center items-center gap-2">
      {/* 왼쪽 아이콘 */}
      <PlusIcon width="16" height="16" fill="#007BFF" />

      {/* Input과 내부 제출 버튼 */}
      <div className="relative flex-1">
        <input
          type="text"
          id="contents"
          placeholder="궁금한 내용을 입력해 주세요."
          className="w-full border px-5 py-3 rounded-full focus:outline-none focus:ring-0"
        />
        {/* 오른쪽 아이콘 */}
        <label
          htmlFor="contents"
          className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
        >
          <MicIcon width="20" height="20" fill="#007BFF" />
        </label>
      </div>
    </section>
  </main>
}
export default ChatBot