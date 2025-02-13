const HistoryContents = () => {
  return <main className="flex-1 flex flex-col">
      <section className="p-5 flex flex-row justify-between text-lg font-medium">
        <div className="text-Neutral-Default">거래일시</div>
        <div>2024년 11월 20일 09:01:58</div>
      </section>
    <section className="p-5 flex flex-row justify-between text-lg font-medium">
      <div className="text-Neutral-Default">거래 후 잔액</div>
      <div>12,395,600원</div>
    </section>
    <section className="p-5 flex flex-row justify-between text-lg font-medium">
      <div className="text-Neutral-Default">거래유형</div>
      <div>전자금융</div>
    </section>
  </main>
}
export default HistoryContents;