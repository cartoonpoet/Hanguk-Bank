import { useState } from 'react'

import useSpeech from '../../../transfer/_hooks/useSpeech'

import AiAvatar from '../../AiAvatar/ai-avatar'
import FinancialList from './financial-list'
import FinancialMethod from './financial-method'
import SmartSaving from './smart-saving'

const Content = {
  METHOD: FinancialMethod,
  LIST: FinancialList,
  SAVING: SmartSaving,
}

type ContentRoute = keyof typeof Content

export interface FinancialProductsProps {
  isListening: boolean
  speechText?: string
  handleContentRoute: (step: ContentRoute) => void
}

const FinancialProductsStepper = ({
  transcript,
  isListening,
}: {
  transcript: string
  isListening: boolean
}) => {
  const [contentRoute, setContentRoute] = useState<ContentRoute>('LIST')
  const handleContentRoute = (step: ContentRoute) => setContentRoute(step)
  const MainContent = Content[contentRoute]

  return (
    <div className='mb-4'>
      <MainContent
        isListening={isListening}
        speechText={transcript}
        handleContentRoute={handleContentRoute}
      />
    </div>
  )
}

export default FinancialProductsStepper
