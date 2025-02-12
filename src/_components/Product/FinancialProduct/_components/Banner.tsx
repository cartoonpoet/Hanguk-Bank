import { CardIcon } from '@/_assets/icons'
import BankRoll from '@/_assets/images/bankroll.png'
import Image from 'next/image'
import BankRollText from '@/_assets/images/bankrollText.svg'

const Banner = () => {
  return <main className="flex flex-row p-5 rounded-2xl bg-Brand-Default m-5 justify-between">
    <section className="flex flex-col gap-2 text-white">
      <div className="text-xl font-bold">최고 연 8% 이율<br />한국 스마트 적금</div>
      <div className="text-base font-medium">연2%~연8%</div>
    </section>
    <section className="relative">
      <div className="relative">
        <CardIcon />
        <div className="text-white text-[11px] font-semibold leading-none absolute z-20 top-2.5 left-4">한국<br />스마트 적금
        </div>
        <div className="absolute right-0 top-1/3">
          <Image src={BankRoll} alt="이미지" />
          <div className="absolute right-[28%] bottom-1.5">
            <BankRollText />
          </div>
        </div>
      </div>

    </section>
  </main>
}

export default Banner