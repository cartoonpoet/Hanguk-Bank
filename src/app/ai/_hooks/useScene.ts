import { useEffect,  MutableRefObject } from 'react'
import { ConnectionStateData, Persona, Scene, SceneOptions } from '@soulmachines/smwebsdk'
import {
  StateResponseBody,
} from '@soulmachines/smwebsdk/lib-esm/websocket-message/scene/response-body/StateResponseBody'
import { useRouter } from 'next/navigation'
import { useAiStore } from '@/app/ai/_hooks/useAiStore'

const prodKey = 'eyJzb3VsSWQiOiJkZG5hLXNveWktaHdhbmctb3JnMTU0My0tc295YmFua3Byb2QiLCJhdXRoU2VydmVyIjoiaHR0cHM6Ly9kaC5zb3VsbWFjaGluZXMuY2xvdWQvYXBpL2p3dCIsImF1dGhUb2tlbiI6ImFwaWtleV92MV82OWI0YWE5Ni0wZGEyLTQ1ZjctOWM1NC1lZjI5NThiYjNmOTYifQ=='
const devKey = 'eyJzb3VsSWQiOiJkZG5hLXNveWktaHdhbmctb3JnMTU0My0tc295YmFuayIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxX2QyZjhmMDA3LWY2YWYtNGM1Zi1iZDRkLWEwZWQ3ZDg5MWQxYSJ9'

const useKey = process.env.MODE === 'prod' ? prodKey : devKey

const useScene = (videoRef: MutableRefObject<null>) => {
  const router = useRouter()
  const { scene, setScene, setConnectionState } = useAiStore()

  useEffect(() => {
    const initScene = async () => {
      const videoElement = videoRef.current

      const options: SceneOptions = {
        apiKey: useKey, // 발급받은 API 키
        // apiKey: prodKey,
        videoElement: videoElement || undefined,
        requestedMediaDevices: { microphone: true, camera: false },
        requiredMediaDevices: { microphone: false, camera: false },
      }

      // Soul Machines Scene 초기화
      const smScene = new Scene(options)
      smScene.connectionState.onConnectionStateUpdated.addListener(
        (connectionStateData: ConnectionStateData) => {
          // display connectionState updates to the user
          setConnectionState(connectionStateData.name)
        },
      )
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
            if (personaSpeech === '네. 어느 계좌에서 이체할까요?') router.push('/ai/transfer')
            else if(personaSpeech === '네. 어느 계좌로 이체할까요?') router.push('/ai/transfer/to')

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

  return { scene }
}

export const handleSpeak = async (scene: Scene, text: string) => {
  try {
    const persona = new Persona(scene, scene.currentPersonaId)
    await persona.conversationSend(text, {}, {})
  } catch (error) {
    console.error('Error sending text:', error)
    throw error
  }
}

export default useScene