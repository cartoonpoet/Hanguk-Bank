import SelectAccount from '@/_components/Inquiry/SelectAccount/SelectAccount'
import InquiryContextProvider from '@/_contexts/useInquiryContext'

const Inquiry = () => {
  return <SelectAccount />
}

const Page = () => {
  return <InquiryContextProvider><Inquiry/></InquiryContextProvider>
}

export default Page