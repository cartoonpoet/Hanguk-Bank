import React, { useState } from 'react'
import { FunnelProps, StepProps } from '@/_types/FunnelTypes'

export const useFunnel = (defaultStep: string) => {
  // 현재 Step
  const [step, setStep] = useState(defaultStep)

  // 각 단계를 나타내는 Step 컴포넌트
  const Step = (props: StepProps) => {
    return <React.Fragment>{props.children}</React.Fragment>
  }

//   여러 단계의 Step 중 현재 Step
  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = children.find((childStep) => childStep.props.name === step)
    return <React.Fragment>{targetStep}</React.Fragment>
  }

  return { Funnel, Step, setStep, currentStep: step } as const
}