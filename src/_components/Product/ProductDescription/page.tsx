'use client'

import NavBar from '@/_components/common/NavBar/page'
import React, { use } from 'react'
import { ProductContext } from '@/_contexts/useProduct'
import { ProductSteps } from '@/_constants/mode'
import RegistrationSection from '@/_components/Product/ProductDescription/RegistrationSection/page'
import ProductDetail1 from '@/_components/Product/ProductDescription/ProductDetail1/page'
import ProductDetail2 from '@/_components/Product/ProductDescription/ProductDetail2/page'
import TabSection from '@/_components/Product/ProductDescription/TabSection/page'
import Button from '@/_components/common/Button/page'
import styled from 'styled-components'
import InfoSection from '@/_components/Product/ProductDescription/InfoSection/page'
import OtherSection from '@/_components/Product/ProductDescription/OtherSection/page'

export const SignUpButtonSection = styled.div`
    display: flex;
    padding: 20px;
`

const ProductDescription = () => {
  const { setStep } = use(ProductContext)

  return <main className="h-dvh flex flex-col">
    <div className="flex flex-col px-5">
      <NavBar leftControl="icon" rightControl="icon" title="상품 상세" onClickBack={() => setStep(ProductSteps[0])} />
    </div>
    <RegistrationSection />
    <ProductDetail1 />
    <ProductDetail2 />
    <TabSection />
    <InfoSection/>
    <OtherSection/>
    <SignUpButtonSection>
      <Button type="Fill" status="Default" size="Large" onClick={() => {setStep(ProductSteps[2])}}>가입하기</Button>
    </SignUpButtonSection>
  </main>
}

export default ProductDescription