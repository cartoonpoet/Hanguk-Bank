'use client'

import useScene from '@/_hooks/useScene'
import { useRef } from 'react'

const AiAvatar = () => {
  const videoRef = useRef(null) // 비디오 요소 참조
  const {} = useScene(videoRef)

  return (
    <video ref={videoRef} id='sm-video' width='0%' height='0' playsInline />
  )
}

export default AiAvatar
