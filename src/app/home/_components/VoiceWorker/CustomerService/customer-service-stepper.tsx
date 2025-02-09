import { useState } from 'react'
import styled from 'styled-components'

import ConsultationType from './consultation-type'
import CounselList from './counsel-list'

const Content = {
  LIST: CounselList,
  TYPE: ConsultationType,
}

type ContentRoute = keyof typeof Content

export interface CustomerServiceProps {
  isListening: boolean
  speechText?: string
  handleContentRoute: (step: ContentRoute) => void
}

const CustomerServicetepper = ({
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-block: 0 34px;
`

export default CustomerServicetepper
