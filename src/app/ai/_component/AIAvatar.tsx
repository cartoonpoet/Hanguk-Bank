'use client'

import { useRef } from 'react'
import styles from '../_style/page.module.scss'
import useScene from '@/app/ai/_hooks/useScene'

const AIAvatar = () => {
  const videoRef = useRef(null) // 비디오 요소 참조
  const {} = useScene(videoRef)


  return (
    <div className={styles.container}>
      <video ref={videoRef} id="sm-video" width="100%" height="100%" playsInline />
      {/*<input*/}
      {/*  type="text"*/}
      {/*  value={text}*/}
      {/*  onChange={(e) => setText(e.target.value)}*/}
      {/*  placeholder="Enter text to speak"*/}
      {/*/>*/}
      {/*<button onClick={onClick}>Speak</button>*/}
    </div>
  )
}

export default AIAvatar
