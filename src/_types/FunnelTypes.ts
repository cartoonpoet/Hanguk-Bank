import { ReactElement, ReactNode } from 'react'

export interface StepProps {
  name: string;
  children: ReactNode;
}

export interface FunnelProps {
  children: Array<ReactElement<StepProps>>
}

export interface StepMoveProps {
  onNext?: (nextStep?: string) => void;
  onPrev?: (prevStep?: string) => void;
}