import { useContext, useEffect } from 'react'
import { URL } from '@/_constants/url'
import { useRouter } from 'next/navigation'
import { AiContext } from '@/_contexts/useAiContext'

export const useTimer = () => {
  const { setWork } = useContext(AiContext)
  const router = useRouter()
  useEffect(() => {
    const timer = setTimeout(() => {
      setWork(null)
      router.replace(URL.home)
    }, 5000)
    return () => clearTimeout(timer) // 타이머 클리어
  }, [])
}