import AccountInquiryList from './account-inquiry-list'
import AccountInquiryResult from './account-inquiry-result'

const AccountInquiryStepper = ({ mode }: { mode: string }) => {
  return (
    <div className='mb-4'>
      {mode === 'From' && <AccountInquiryList />}
      {mode === 'Balance' && <AccountInquiryResult />}
    </div>
  )
}

export default AccountInquiryStepper
