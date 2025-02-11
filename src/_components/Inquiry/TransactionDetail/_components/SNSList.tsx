import { KakaoTalk, MessageIcon, ChatIcon, DocumentsIcon } from '@/_assets/icons'

const SNSList = () => {
  return <main className="flex flex-row gap-8 p-5 justify-evenly">
    <section className="flex flex-col justify-center items-center gap-2">
      <div className="w-12 flex justify-center items-center bg-[#FEE500] h-12 rounded-full"><KakaoTalk /></div>
      <div className="font-medium text-sm">카카오톡</div>
    </section>
    <section className="flex flex-col justify-center items-center gap-2">
      <div className="w-12 flex justify-center items-center bg-Brand-Secondary h-12 rounded-full"><ChatIcon /></div>
      <div className="font-medium text-sm">문자</div>
    </section>
    <section className="flex flex-col justify-center items-center gap-2">
      <div className="w-12 flex justify-center items-center bg-Brand-Secondary h-12 rounded-full"><MessageIcon /></div>
      <div className="font-medium text-sm">메세지</div>
    </section>
    <section className="flex flex-col justify-center items-center gap-2">
      <div className="w-12 flex justify-center items-center bg-Brand-Secondary h-12 rounded-full"><DocumentsIcon /></div>
      <div className="font-medium text-sm">내역복사</div>
    </section>
  </main>
}

export default SNSList