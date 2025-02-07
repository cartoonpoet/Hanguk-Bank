import KeyboardNumber from '@/_components/common/KeyboardNumber/page'
import { ReloadIcon } from '@/_assets/icons'

const EnterPassword = () => {
  return <main className="flex flex-col">
    <section className="bg-Brand-Default">
      <div>계좌 비밀번호</div>
      <div>비밀번호 4자리를 입력해 주세요</div>
    </section>
    <KeyboardNumber><ReloadIcon width="24" height="24" fill="black" /></KeyboardNumber>
  </main>
}

export default EnterPassword