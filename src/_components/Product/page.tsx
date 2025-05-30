'use client'

import ProductContextProvider, { ProductContext } from '@/_contexts/useProduct'
import FinancialProduct from '@/_components/Product/FinancialProduct/page'
import { use } from 'react'
import { ProductSteps } from '@/_constants/mode'
import ProductDescription from '@/_components/Product/ProductDescription/page'
import SavingsSignUp from '@/_components/Product/SavingsSignUp/page'

const Product = () => {
  const { Funnel, Step } = use(ProductContext)
  return <Funnel>
    <Step name={ProductSteps[0]}><FinancialProduct /></Step>
    <Step name={ProductSteps[1]}><ProductDescription /></Step>
    <Step name={ProductSteps[2]}><SavingsSignUp /></Step>
  </Funnel>
}

const Page = () => {
  return <ProductContextProvider><Product /></ProductContextProvider>
}

export default Page