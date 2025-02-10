import { AiContext } from '@/_contexts/useAiContext'
import { WorkProp } from '@/_types/AiStoreTypes'
import {
  ConnectionStateData,
  Persona,
  Scene,
  SceneOptions,
} from '@soulmachines/smwebsdk'
import { StateResponseBody } from '@soulmachines/smwebsdk/lib-esm/websocket-message/scene/response-body/StateResponseBody'
import { MutableRefObject, use, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'

const webKey =
  'eyJzb3VsSWQiOiJkZG5hLXNveWktaHdhbmctb3JnLS1zb3liYW5rIiwiYXV0aFNlcnZlciI6Imh0dHBzOi8vZGguc291bG1hY2hpbmVzLmNsb3VkL2FwaS9qd3QiLCJhdXRoVG9rZW4iOiJhcGlrZXlfdjFfNzgxOTNhMGYtOWVhMC00NjI5LTliZWMtYjBhNjcxNjc0MmFkIn0='

// const useKey = process.env.MODE === 'prod' ? prodKey : devKey
const useKey = webKey

function onConnectionError(error: Error) {
  console.log('Connection failed with error:', error)
  toast.error(error.name + error.message)
  switch (error.name) {
    case 'noUserMedia':
      console.log('user declined device access:', error.message)
      // ask the user to unblock devices
      break
    case 'noScene':
      console.log('the server is busy:', error.message)
      // ask the user to retry later
      break
    case 'serverConnectionFailed':
      console.log('server connection failed:', error.message)
      // ask the user to connect from a different network
      break
    default:
      console.log('unhandled error:', error.name, error.message)
  }
}

const useScene = (videoRef: MutableRefObject<null>) => {
  const {
    scene,
    setScene,
    setMode,
    work,
    setWork,
    setApplicationType,
    setConsultationType,
    setConnectionState
  } = use(AiContext)
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
        (connectionStateData: ConnectionStateData) => {
          // display connectionState updates to the user
          console.log('ㅇㄹㄴㄹㄴㅁㅇ+', connectionStateData)
          setConnectionState(connectionStateData.name)
        }
      )

      try {
        // 연결 및 비디오 시작
        const sessionId = await smScene
          .connect()
          .catch((error) => onConnectionError(error))
        console.log('Session connected:', sessionId)
        await smScene.startVideo()

        setScene(smScene)

        smScene.onStateEvent.addListener(
          (scene: Scene, event: StateResponseBody) => {
            const personaState = event.persona?.['1']

            if (personaState?.speechState === 'speaking') {
              const personaSpeech = personaState?.currentSpeech
              if (personaSpeech) {
                const work = stateRef.current
                switch (work) {
                  case null: {
                    if (
                      personaSpeech ===
                      '어떤 계좌에서 이체할까요? 첫번째 또는 저축예금통장으로 말씀해 주세요.'
                    ) {
                      setWork('Transfer')
                      setMode('From')
                    } else if (
                      personaSpeech ===
                      '어떤 계좌에서 조회할까요? 첫번째 또는 저축예금통장으로 말씀해 주세요.'
                    ) {
                      setWork('Account')
                      setMode('From')
                    } else if (
                      personaSpeech ===
                      '적금 상품의 원하는 입금방식을 선택해 주세요. 첫번째 또는 화면에 보이는 입금 방식을 말씀해 주세요.'
                    ) {
                      setWork('Savings')
                      setMode('Method')
                    } else if (
                      personaSpeech ===
                      '상담 방법을 선택해주세요. 첫번째 또는 상담 방법을 말씀해 주세요.'
                    ) {
                      setWork('CallCenter')
                      setMode('ConsultationType')
                    }
                    break
                  }
                  case 'Transfer': {
                    if (
                      personaSpeech ===
                      '누구에게 보낼까요? 최근 이체한 계좌도 함께 보여드릴께요.'
                    )
                      setMode('To')
                    else if (
                      personaSpeech ===
                      '받는 분의 은행과 계좌번호를 말씀해 주세요.'
                    )
                      setMode('Tell')
                    else if (
                      personaSpeech.includes(
                        '받는 분과 금액을 한 번 더 확인해주세요.'
                      )
                    ) {
                      setMode('Confirm')
                      handleSpeak(scene, '보냈어요.', work)
                    } else if (
                      personaSpeech.includes('김손자에게 십만원 보냈어요.')
                    )
                      setMode('Transferred')
                    break
                  }
                  case 'Account': {
                    if (
                      personaSpeech === '잔액은 백이십삼십사만오천육백원이에요.'
                    )
                      setMode('Balance')
                    break
                  }
                  case 'Savings': {
                    if (
                      personaSpeech ===
                      '고객님께 적합한 자유적립식 적금 상품을 추천해 드릴게요. 첫번째 또는 화면에 보이는 상품 이름을 말씀해 주세요.'
                    )
                      setMode('Savings')
                    else if (
                      personaSpeech ===
                      '스마트적금을 가입하시겠어요? 가입 전 상품설명서를 확인해 주세요.'
                    )
                      setMode('Description')
                    break
                  }
                  case 'CallCenter': {
                    if (
                      personaSpeech ===
                      '상담 유형을 선택해 주세요. 첫번째 또는 상담 유형을 말씀해 주세요.'
                    )
                      setMode('ApplicationType')
                    else if (personaSpeech === '')
                      setApplicationType('사고 신고')
                    break
                  }
                }
              }
            }
          }
        )

        smScene.onRecognizeResultsEvent.addListener(
          async (
            scene: Scene,
            status: string,
            errorMessage: string | null,
            results: any[]
          ) => {
            if (results.length > 0) {
              const result = results[0]
              if (result.alternatives.length > 0) {
                const userSpeech = result.alternatives[0].transcript
                if (result.final === true) {
                  // await handleSpeak(scene, userSpeech,  stateRef.current)
                  console.log('[userSpeech] user said:', userSpeech)
                } else {
                  const persona = new Persona(scene, scene.currentPersonaId)
                  if (stateRef.current === 'CallCenter') {
                    const text = userSpeech.replaceAll(' ', '')
                    if (text.includes('전화') || text.includes('첫번째'))
                      setConsultationType('전화 상담')
                    else if (text.includes('챗봇') || text.includes('두번째'))
                      setConsultationType('챗봇 상담')
                    else if (
                      text.includes('사고신고') ||
                      text.includes('뱅킹') ||
                      text.includes('예금') ||
                      text.includes('펀드') ||
                      text.includes('대출') ||
                      text.includes('퇴직연금') ||
                      text.includes('민원접수')
                    ) {
                      setApplicationType('사고 신고')
                    }
                  }
                  await persona.conversationSetVariables({
                    work: stateRef.current,
                  })
                }
              }
            }
          }
        )
      } catch (error) {
        toast.error('문제가 발생하였습니다.')
        console.error('Error initializing scene:', { error })
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
  work: WorkProp
) => {
  try {
    const persona = new Persona(scene, scene.currentPersonaId)
    await persona.conversationSend(text, { work }, { fromCall: 'handleSpeak' })
  } catch (error) {
    console.error('Error sending text:', error)
    throw error
  }
}

export default useScene
