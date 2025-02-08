import KeyboardNumber from '@/_components/common/KeyboardNumber/page'
import { ReloadIcon } from '@/_assets/icons'
import styled from 'styled-components'
import { use } from 'react'
import { TransferContext } from '@/_contexts/useTransferContext'

const StyledCircle = styled.div<{ disabled: boolean }>`
    width: 20px;
    height: 20px;
    border-radius: 100%;
    ${({ disabled }) => (disabled ? 'background: var(--White-Default, #FFF);' : 'border: 1px solid black;')};
`

const EnterPassword = () => {
  const { password, setPassword } = use(TransferContext)

  const onClick = (number: number) => {
    setPassword((prev: string) => {
      if (prev.length <= 4)
        return prev.concat(number.toString())
      return prev
    })
  }

  return <main className="flex flex-col">
    <section className="bg-Brand-Default text-white pb-10">
      <div className="text-[20px] font-bold">계좌 비밀번호</div>
      <div className="text-base font-medium py-[10px]">비밀번호 4자리를 입력해 주세요</div>
      <div className="flex py-5 justify-center items-center gap-5">
        {[...password.padEnd(4, ' ')].map((character, index) => {
          return <StyledCircle disabled={Boolean(character.trim())} key={character + index} />
        })}
      </div>
    </section>
    <div className="py-5"><KeyboardNumber onClickNumber={onClick}><ReloadIcon width="24" height="24"
                                                                              fill="black" /></KeyboardNumber></div>
  </main>
}

export default EnterPassword