import Button from '@/_components/common/Button/page'

const Buttons = () => {
  return <main className="flex flex-row gap-2.5 pt-5">
    <Button type="Soft" status="Default" size="Medium">채우기</Button>
    <Button type="Fill" status="Default" size="Medium">보내기</Button>
  </main>
}

export default Buttons