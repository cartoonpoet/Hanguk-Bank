'use client'

import React, { createContext, ReactNode } from 'react'
import { useFunnel, useFunnelProps } from '@/_hooks/useFunnel'
import { CustomerServiceSteps } from '@/_constants/mode'

const init = {
  currentStep: CustomerServiceSteps[0],
}

export const CustomerServiceContext = createContext<useFunnelProps>(init as useFunnelProps)


const CustomerServiceContextProvider = ({ children }: { children: ReactNode }) => {
  const { Funnel, Step, setStep, currentStep } = useFunnel(CustomerServiceSteps[0])
  return <CustomerServiceContext.Provider
    value={{ Funnel, Step, setStep, currentStep }}>{children}</CustomerServiceContext.Provider>
}

export default CustomerServiceContextProvider
