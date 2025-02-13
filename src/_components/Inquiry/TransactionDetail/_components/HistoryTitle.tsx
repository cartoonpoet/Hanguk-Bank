import TextField from '@/_components/common/TextField/page'

const HistoryTitle = () => {
  return <main className="flex flex-col p-5 gap-2.5">
    <section className="text-lg font-bold text-Neutral-Label">K-패스 환급금</section>
    <section className="text-[32px] font-bold">+16,080원</section>
    <TextField placeholder="메모를 남겨보세요(최대 20자)"/>
  </main>
}

export default HistoryTitle;