'use client'

import useScene from '@/_hooks/useScene'
import { useRef, useEffect } from 'react'

const AiAvatar = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null) // 비디오 요소 참조
  const {} = useScene(videoRef)

  useEffect(() => {
    const unmuteVideo = () => {
      if (videoRef.current) {
        videoRef.current.muted = false // 음소거 해제
        videoRef.current.volume = 1.0 // 볼륨 100%
        videoRef.current.play().catch(err => console.error('Auto-play failed:', err)) // 자동 재생 시도
      }
    }

    const timeoutId = setTimeout(unmuteVideo, 500) // 0.5초 후 음소거 해제

    return () => clearTimeout(timeoutId) // 클린업
  }, [])

  return (
    <video ref={videoRef} id="sm-video" width="10" height="10" playsInline autoPlay muted />
  )
}

export default AiAvatar
