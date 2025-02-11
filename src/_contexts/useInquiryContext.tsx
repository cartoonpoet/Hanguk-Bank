'use client'

import React, { createContext, ReactNode } from 'react'
import { useFunnel, useFunnelProps } from '@/_hooks/useFunnel'
import { InquirySteps } from '@/_constants/mode'

interface InquiryTypes extends useFunnelProps {

}

const init = {
  currentStep: InquirySteps[0],
}

export const InquiryContext = createContext<useFunnelProps>(init as useFunnelProps)


const InquiryContextProvider = ({ children }: { children: ReactNode }) => {
  const { Funnel, Step, setStep, currentStep } = useFunnel(InquirySteps[0])
  return <InquiryContext.Provider
    value={{ Funnel, Step, setStep, currentStep }}>{children}</InquiryContext.Provider>
}

export default InquiryContextProvider
