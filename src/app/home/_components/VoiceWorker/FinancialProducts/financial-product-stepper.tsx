import { Dispatch, SetStateAction } from 'react'
import FinancialList from './financial-list'
import FinancialMethod from './financial-method'
import SmartSaving from './smart-saving'

const FinancialProductsStepper = ({
  mode,
  close,
  handleIsShowMic,
}: {
  mode: string
  close: () => void
  handleIsShowMic: (status: boolean) => void
}) => {
  return (
    <div
      style={{ flexDirection: 'column' }}
      className='flex mb-4 justify-center'
    >
      {mode === 'Method' && <FinancialMethod />}
      {mode === 'Savings' && <FinancialList />}
      {mode === 'Description' && (
        <SmartSaving close={close} handleIsShowMic={handleIsShowMic} />
      )}
    </div>
  )
}

export default FinancialProductsStepper
