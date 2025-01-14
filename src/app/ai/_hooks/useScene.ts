import {useEffect, MutableRefObject} from 'react'
import {ConnectionStateData, Persona, Scene, SceneOptions} from '@soulmachines/smwebsdk'
import {
    StateResponseBody,
} from '@soulmachines/smwebsdk/lib-esm/websocket-message/scene/response-body/StateResponseBody'
import {useContext} from "react";
import {AiContext} from "@/app/ai/_hooks/useAiContext";

// const prodKey = 'eyJzb3VsSWQiOiJkZG5hLXNveWktaHdhbmctb3JnMTU0My0tc295YmFua3Byb2QiLCJhdXRoU2VydmVyIjoiaHR0cHM6Ly9kaC5zb3VsbWFjaGluZXMuY2xvdWQvYXBpL2p3dCIsImF1dGhUb2tlbiI6ImFwaWtleV92MV82OWI0YWE5Ni0wZGEyLTQ1ZjctOWM1NC1lZjI5NThiYjNmOTYifQ=='
// const devKey = 'eyJzb3VsSWQiOiJkZG5hLXNveWktaHdhbmctb3JnMTU0My0tc295YmFuayIsImF1dGhTZXJ2ZXIiOiJodHRwczovL2RoLnNvdWxtYWNoaW5lcy5jbG91ZC9hcGkvand0IiwiYXV0aFRva2VuIjoiYXBpa2V5X3YxX2QyZjhmMDA3LWY2YWYtNGM1Zi1iZDRkLWEwZWQ3ZDg5MWQxYSJ9'

const textKey = 'eyJzb3VsSWQiOiJkZG5hLXNvaS1od2FuZy1vcmdhZTBhLS1zb3liYW5rIiwiYXV0aFNlcnZlciI6Imh0dHBzOi8vZGguc291bG1hY2hpbmVzLmNsb3VkL2FwaS9qd3QiLCJhdXRoVG9rZW4iOiJhcGlrZXlfdjFfZjM3MTEyNjYtYWVhZi00Njc0LTg0YmQtMmU4M2MxMDNiZjg1In0='

// const useKey = process.env.MODE === 'prod' ? prodKey : devKey
const useKey = textKey

const useScene = (videoRef: MutableRefObject<null>) => {
    const {scene, setScene, setMode} = useContext(AiContext)

    useEffect(() => {
        const initScene = async () => {
            const videoElement = videoRef.current

            const options: SceneOptions = {
                apiKey: useKey, // 발급받은 API 키
                // apiKey: prodKey,
                videoElement: videoElement || undefined,
                requestedMediaDevices: {microphone: true, camera: false},
                requiredMediaDevices: {microphone: false, camera: false},
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
                        if(personaSpeech) {
                            if (personaSpeech === '어떤 계좌에서 이체할까요? 첫번째 또는 저축예금통장으로 말씀해 주세요.') setMode('From')
                            else if (personaSpeech === '누구에게 보낼까요? 최근 이체한 계좌도 함께 보여드릴께요.') setMode('To')
                            else if (personaSpeech === '받는 분의 은행과 계좌번호를 말씀해 주세요.') setMode('Tell')
                            else if (personaSpeech.includes('받는 분과 금액을 한 번 더 확인해주세요.')) {
                                setMode('Confirm')
                                handleSpeak(scene, '보냈어요.')
                            } else if (personaSpeech.includes('김손자에게 십만원 보냈어요.')) setMode('Transferred')
                        }
                    }
                })

                smScene.onRecognizeResultsEvent.addListener(
                    (scene, status, errorMessage, results) => {
                        const result = results[0];

                        const userSpeech = result.alternatives[0].transcript;
                        if (result.final === true) {
                            console.log('[userSpeech] user said:', userSpeech);
                        }

                    }
                );

            } catch (error) {
                console.error('Error initializing scene:', error)
            }
        }
        if (!scene) initScene()

        return () => {
            if (scene) scene.disconnect()
        }
    }, [scene])

    return {scene}
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