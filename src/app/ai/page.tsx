'use client'

import { useRef } from 'react'
import { Persona } from '@soulmachines/smwebsdk'
import styles from './page.module.scss'
import useScene from '@/app/ai/_hooks/useScene'

const AIAvatar = () => {
  const videoRef = useRef(null) // 비디오 요소 참조
  const { text, setText, scene } = useScene(videoRef)

  const handleSpeak = async () => {
    if (!scene || !text) return
    try {
      console.log(scene)
      const persona = new Persona(scene, scene.currentPersonaId)
      // console.log(persona)
      // await scene.sendRequest('startSpeaking', {
      //   personaId: scene.currentPersonaId,
      //   text: text,
      // })
      await persona.startSpeaking('test', '우와아아아아아')
      console.log("안돼?")
      // await persona.conversationSend(text, {}, {})
    } catch (error) {
      // console.error('Error sending text:', error)
      throw error
    }
  }

  return (
    <div className={styles.container}>
      <video ref={videoRef} id="sm-video" width="100%" height="100%" playsInline />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to speak"
      />
      <button onClick={handleSpeak}>Speak</button>
    </div>
  )
}

export default AIAvatar
