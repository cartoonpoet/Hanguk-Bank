import ProductContextProvider from '@/_contexts/useProduct'
import FinancialProduct from '@/_components/Product/FinancialProduct/page'

const Product = () => {
  return <FinancialProduct/>
}

const Page = () => {
  return <ProductContextProvider><Product /></ProductContextProvider>
}

export default Page