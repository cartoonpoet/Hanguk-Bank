import TransferContainer from '@/_components/common/BottomSheet/components/transfer-container'

import { accountRows } from '../transfer/_hooks/model'
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

  return customAccountRows.map((item, idx) => {
    const Icon = BANK_ICON[item.accountType] ?? null
    return (
      <TransferContainer
        key={idx}
        style={{ paddingBlock: '20px', paddingInline: '20px' }}
      >
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <div>
            <Icon />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '0.3rem',
            }}
          >
            <strong
              style={{
                color: 'black',
              }}
            >
              {item.name}
            </strong>
            <span
              style={{ color: '#6B7684' }}
            >{`${item.accountType} ${item.accountNumber}`}</span>
          </div>
        </div>
      </TransferContainer>
    )
  })
}

export default AccountList
