'use client'

import { useEffect, useRef, useState } from 'react'
import { Scene, Persona, SceneOptions } from '@soulmachines/smwebsdk'
import styles from './page.module.scss'
import {
  StateResponseBody,
} from '@soulmachines/smwebsdk/lib-esm/websocket-message/scene/response-body/StateResponseBody'

const AIAvatar = () => {
  const videoRef = useRef(null) // 비디오 요소 참조
  const [text, setText] = useState('') // 텍스트 입력 상태
  const [scene, setScene] = useState<Scene | null>(null) // Soul Machines Scene 객체

  useEffect(() => {
    const initScene = async () => {
      const videoElement = videoRef.current

      const options: SceneOptions = {
        apiKey: 'eyJzb3VsSWQiOiJkZG5hLXNveWktaHdhbmctb3JnMTU0My0tc295YmFuayIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxX2QyZjhmMDA3LWY2YWYtNGM1Zi1iZDRkLWEwZWQ3ZDg5MWQxYSJ9', // 발급받은 API 키
        videoElement: videoElement || undefined,
        requestedMediaDevices: { microphone: false, camera: false },
        requiredMediaDevices: { microphone: false, camera: false },
      }

      // Soul Machines Scene 초기화
      const smScene = new Scene(options)

      try {
        // 연결 및 비디오 시작
        const sessionId = await smScene.connect()
        console.log('Session connected:', sessionId)
        await smScene.startVideo()
        setScene(smScene)

        smScene.onStateEvent.addListener((scene: Scene, event: StateResponseBody) => {
          const personaState = event.persona?.['1']

          if (personaState?.speechState === 'speaking') {
            const personaSpeech = personaState?.currentSpeech
            console.log('[personaSpeech]', personaSpeech)
          }
        })

      } catch (error) {
        console.error('Error initializing scene:', error)
      }
    }
    if (!scene) initScene()

    return () => {
      if (scene) scene.disconnect()
    }
  }, [scene])

  const handleSpeak = async () => {
    if (!scene || !text) return
    try {
      const persona = new Persona(scene, scene.currentPersonaId)
      await persona.conversationSend(text, {}, {})
    } catch (error) {
      console.error('Error sending text:', error)
    }
  }

  return (
    <div className={styles.container}>
      <video ref={videoRef} id="sm-video" width="100%" height="100%" />
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
