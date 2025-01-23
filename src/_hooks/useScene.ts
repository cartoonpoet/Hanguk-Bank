import { AiContext } from '@/_contexts/useAiContext'
import { WorkProp } from '@/_types/AiStoreTypes'
import {
  ConnectionStateData,
  Persona,
  Scene,
  SceneOptions,
} from '@soulmachines/smwebsdk'
import {
  StateResponseBody,
} from '@soulmachines/smwebsdk/lib-esm/websocket-message/scene/response-body/StateResponseBody'
import { MutableRefObject, use, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'

// const prodKey = 'eyJzb3VsSWQiOiJkZG5hLXNveWktaHdhbmctb3JnMTU0My0tc295YmFua3Byb2QiLCJhdXRoU2VydmVyIjoiaHR0cHM6Ly9kaC5zb3VsbWFjaGluZXMuY2xvdWQvYXBpL2p3dCIsImF1dGhUb2tlbiI6ImFwaWtleV92MV82OWI0YWE5Ni0wZGEyLTQ1ZjctOWM1NC1lZjI5NThiYjNmOTYifQ=='
// const devKey = 'eyJzb3VsSWQiOiJkZG5hLXNveWktaHdhbmctb3JnMTU0My0tc295YmFuayIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxX2QyZjhmMDA3LWY2YWYtNGM1Zi1iZDRkLWEwZWQ3ZDg5MWQxYSJ9'

const webKey =
  'eyJzb3VsSWQiOiJkZG5hLXNzb2ktaHdhbmctb3JnYzY3Ni0tc295YmFuayIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxX2NkMWNhYzA1LTYyMDAtNDNlNC1hMmMxLTIzMzY1ZWMwMjM0MyJ9'
const appKey = 'eyJzb3VsSWQiOiJkZG5hLXNzb2ktaHdhbmctb3JnYzY3Ni0tc295YmFuayIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxX2ZhY2YzMGRhLWQ2MGUtNGE2Mi05NGNlLTdmZDRlOWQxZmU4ZiJ9'
const isWebView = /wv|FBAN|FBAV|Instagram|Line|KAKAOTALK|NAVER/i.test(navigator.userAgent);

// const useKey = process.env.MODE === 'prod' ? prodKey : devKey
const useKey =  webKey

const useScene = (videoRef: MutableRefObject<null>) => {
  const { scene, setScene, setMode, work, setWork } = use(AiContext)
  const stateRef = useRef<WorkProp>(work)

  useEffect(() => {
    stateRef.current = work
  }, [work])

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
        (_: ConnectionStateData) => {
          // display connectionState updates to the user
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
            if (personaSpeech) {
              const work = stateRef.current
              switch (work) {
                case null: {
                  if
                  (personaSpeech === '어떤 계좌에서 이체할까요? 첫번째 또는 저축예금통장으로 말씀해 주세요.') {
                    setWork('Transfer')
                    setMode('From')
                  } else if (personaSpeech === '어떤 계좌에서 조회할까요? 첫번째 또는 저축예금통장으로 말씀해 주세요.') {
                    setWork('Account')
                    setMode('From')
                  } else if (personaSpeech === '적금 상품의 원하는 입금방식을 선택해 주세요. 첫번째 또는 화면에 보이는 입금 방식을 말씀해 주세요.') {
                    setWork('Savings')
                    setMode('Method')
                  }
                  break
                }
                case 'Transfer': {
                  if (personaSpeech === '누구에게 보낼까요? 최근 이체한 계좌도 함께 보여드릴께요.') setMode('To')
                  else if (personaSpeech === '받는 분의 은행과 계좌번호를 말씀해 주세요.') setMode('Tell')
                  else if (personaSpeech.includes('받는 분과 금액을 한 번 더 확인해주세요.')) {
                    setMode('Confirm')
                    handleSpeak(scene, '보냈어요.', work)
                  } else if (personaSpeech.includes('김손자에게 십만원 보냈어요.')) setMode('Transferred')
                  break
                }
                case 'Account': {
                  if (personaSpeech === '잔액은 백이십삼십사만오천육백원이에요.') setMode('Balance')
                  break
                }
                case 'Savings': {
                  if (personaSpeech === '고객님께 적합한 자유적립식 적금 상품을 추천해 드릴게요. 첫번째 또는 화면에 보이는 상품 이름을 말씀해 주세요.') setMode('Savings')
                  else if (personaSpeech === '스마트적금을 가입하시겠어요? 가입 전 상품설명서를 확인해 주세요.') setMode('Description')
                  break
                }
                case 'CallCenter': {
                  break

                }
              }
            }
          }
        })

        // smScene.onRecognizeResultsEvent.addListener(
        //     (scene, status, errorMessage, results) => {
        //         const result = results[0];
        //
        //         const userSpeech = result.alternatives[0].transcript;
        //         if (result.final === true) {
        //             console.log('[userSpeech] user said:', userSpeech);
        //         }
        //
        //     }
        // );
      } catch (error) {
        toast.error('문제가 발생하였습니다.')
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

export const handleSpeak = async (
  scene: Scene,
  text: string,
  work: WorkProp,
) => {
  try {
    const persona = new Persona(scene, scene.currentPersonaId)
    await persona.conversationSend(text, { work }, {})
  } catch (error) {
    console.error('Error sending text:', error)
    throw error
  }
}

export default useScene
