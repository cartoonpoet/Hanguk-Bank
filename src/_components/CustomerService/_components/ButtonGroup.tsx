import Button from '@/_components/common/Button/page'
import { CallSolidIcon, ChatSolidIcon } from '@/_assets/icons'

const ButtonGroup = () => {
  return <main className="flex flex-row gap-2.5 px-5 pb-5">
    <Button type="Soft" status="Default" size="Medium">
      <div className="flex flex-row gap-2 text-lg justify-center items-center"><CallSolidIcon />전화 상담</div>
    </Button>
    <Button type="Fill" status="Default" size="Medium">
      <div className="flex flex-row gap-2 text-lg justify-center items-center"><ChatSolidIcon />챗봇 상담</div>
    </Button>
  </main>
}

export default ButtonGroup