import TransferContainer from '@/_components/common/BottomSheet/components/transfer-container'

import { accountRows } from '@/_constants/model'
import KaKaoBank from '/public/bank/kakaobank.svg'
import KbStar from '/public/bank/kbstar.svg'
import ShinHan from '/public/bank/shinhan.svg'

type BackIconType = {
  [k in string]: string
}

const BANK_ICON: BackIconType = {
  신한: ShinHan,
  국민: KbStar,
  카카오뱅크: KaKaoBank,
}

const AccountList = () => {
  const customAccountRows = accountRows.slice(0, 3)

  return (
    <div className='flex flex-col gap-2'>
      {customAccountRows.map((item, idx) => {
        const Icon = BANK_ICON[item.accountType] ?? null
        return (
          <TransferContainer key={idx} className='p-5'>
            <div className='flex items-center gap-2'>
              <div>
                <Icon />
              </div>
              <div className='flex flex-col flex-wrap items-start gap-1.5'>
                <strong className='text-black'>{item.name}</strong>
                <span
                  style={{ color: '#6B7684' }}
                >{`${item.accountType} ${item.accountNumber}`}</span>
              </div>
            </div>
          </TransferContainer>
        )
      })}
    </div>
  )
}

export default AccountList
