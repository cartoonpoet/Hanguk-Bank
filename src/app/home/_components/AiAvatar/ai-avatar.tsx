'use client'

import useScene from '@/_hooks/useScene'
import { useRef } from 'react'

const AiAvatar = () => {
  const audioRef = useRef<HTMLVideoElement | null>(null) // 비디오 요소 참조
  const {} = useScene(audioRef)

  return <audio ref={audioRef} id='sm-video' playsInline />
}

export default AiAvatar
