import Button from '@/_components/common/Button/page'
import { CallSolidIcon, ChatSolidIcon } from '@/_assets/icons'
import { use } from 'react'
import { CustomerServiceContext } from '@/_contexts/useCustomerService'
import { CustomerServiceSteps } from '@/_constants/mode'

const ButtonGroup = () => {
  const { setStep } = use(CustomerServiceContext)
  return <main className="flex flex-row gap-2.5 px-5 pb-5">
    <Button type="Soft" status="Default" size="Medium" onClick={() => setStep(CustomerServiceSteps[1])}>
      <div className="flex flex-row gap-2 text-lg justify-center items-center"><CallSolidIcon />전화 상담</div>
    </Button>
    <Button type="Fill" status="Default" size="Medium" onClick={() => setStep(CustomerServiceSteps[2])}>
      <div className="flex flex-row gap-2 text-lg justify-center items-center"><ChatSolidIcon />챗봇 상담</div>
    </Button>
  </main>
}

export default ButtonGroup