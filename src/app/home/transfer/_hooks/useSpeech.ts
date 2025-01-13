import React, { useEffect, useState } from 'react'

const SpeechRecognition =
  (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition

if (!SpeechRecognition) {
  console.error('SpeechRecognition API is not supported in this browser.')
}

const useSpeech = () => {
  const [isListening, setIsListening] = useState(false) // 음성 인식 상태
  const [transcript, setTranscript] = useState<string>('') // 텍스트 결과
  const [error, setError] = useState<string | null>(null) // 에러 메시지

  const handleToggleListening = () => {
    setIsListening((prevState) => !prevState)
  }

  useEffect(() => {
    if (!SpeechRecognition) return

    const recognition = new SpeechRecognition()

    // 설정
    recognition.lang = 'ko-KR' // 언어 설정
    recognition.interimResults = true // 실시간 결과 포함
    recognition.maxAlternatives = 1 // 결과 대안 수

    // 이벤트 핸들러 등록
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcriptResult = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join('')
      setTranscript(transcriptResult)
      console.log(transcriptResult)
    }

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      setError(event.error)
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    // 음성 인식 시작 및 종료 처리
    if (isListening) {
      recognition.start()
    } else {
      recognition.stop()
    }

    // 컴포넌트 언마운트 시 정리
    return () => recognition.abort()
  }, [isListening])

  return { transcript, isListening, handleToggleListening }
}

export default useSpeech
