import { getBankIcon } from '@/_utils/Bank'

interface RowProps {
  type: string
  name: string
  time: string
  balance: number
  money: number
  addition: boolean
  onClick?: () => void
}

const Row = ({ money, addition, time, name, balance, type, onClick }: RowProps) => {
  return <main className="flex flex-row p-5 gap-2.5 justify-center items-center" onClick={onClick}>
    {getBankIcon(type)}
    <section className="flex flex-col flex-1 gap-0.5">
      <div className="flex flex-row justify-between font-bold text-lg">
        <div>{name}</div>
        <div
          className={addition ? 'text-Brand-Default' : 'text-Danger-Default'}>{addition ? '+' : '-'}{money.toLocaleString()}원
        </div>
      </div>
      <div className="flex flex-row justify-between text-Neutral-Default text-base font-medium">
        <div>
          {time}
        </div>
        <div>
          잔액 {balance.toLocaleString()}원
        </div>
      </div>
    </section>
  </main>
}
export default Row