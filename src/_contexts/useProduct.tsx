'use client'

import React, { createContext, ReactNode, useState } from 'react'
import { useFunnel, useFunnelProps } from '@/_hooks/useFunnel'
import { ProductSteps } from '@/_constants/mode'

interface ProductProps extends useFunnelProps {
  isShowManual: boolean
  setIsShowManual: (isShowManual: boolean) => void,
}

const init = {
  currentStep: ProductSteps[0],
  isShowManual: false,
}

export const ProductContext = createContext<ProductProps>(init as ProductProps)


const ProductContextProvider = ({ children }: { children: ReactNode }) => {
  const { Funnel, Step, setStep, currentStep } = useFunnel(ProductSteps[0])
  const [isShowManual, setIsShowManual] = useState<boolean>(false)

  return <ProductContext.Provider
    value={{ Funnel, Step, setStep, currentStep, isShowManual, setIsShowManual }}>{children}</ProductContext.Provider>
}

export default ProductContextProvider
