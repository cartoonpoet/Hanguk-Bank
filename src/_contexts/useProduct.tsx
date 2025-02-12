'use client'

import React, { createContext, ReactNode } from 'react'
import { useFunnel, useFunnelProps } from '@/_hooks/useFunnel'
import { ProductSteps } from '@/_constants/mode'

const init = {
  currentStep: ProductSteps[0],
}

export const ProductContext = createContext<useFunnelProps>(init as useFunnelProps)


const ProductContextProvider = ({ children }: { children: ReactNode }) => {
  const { Funnel, Step, setStep, currentStep } = useFunnel(ProductSteps[0])
  return <ProductContext.Provider
    value={{ Funnel, Step, setStep, currentStep }}>{children}</ProductContext.Provider>
}

export default ProductContextProvider
