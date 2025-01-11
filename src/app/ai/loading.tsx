'use client'

import { useAiStore } from '@/app/ai/_hooks/useAiStore'

const Loading = () => {
  const { connectionState } = useAiStore()

  return connectionState
}

export default Loading