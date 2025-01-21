import { useEffect, useState } from 'react'

const useSpeech = () => {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState<string>('')
  const [error, setError] = useState<string | null>(null)
  const [isSpeaking, setIsSpeaking] = useState(false)

  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        (window as any).SpeechRecognition ||
        (window as any).webkitSpeechRecognition
      if (SpeechRecognition) {
        const recognitionInstance = new SpeechRecognition()
        recognitionInstance.lang = 'ko-KR'
        recognitionInstance.interimResults = true
        recognitionInstance.maxAlternatives = 1

        setRecognition(recognitionInstance)
      } else {
        console.error('SpeechRecognition API is not supported in this browser.')
      }
    }
  }, [])

  const handleToggleListening = () => {
    setIsListening((prevState) => !prevState)
  }

  const handleToggleSpeaking = () => setIsSpeaking((prevState) => !prevState)

  const speakText = (text: string) => {
    if (typeof window !== 'undefined') {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'ko-KR'
      window.speechSynthesis.speak(utterance)
      handleToggleSpeaking()
    }
  }

  useEffect(() => {
    if (!recognition) return

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcriptResult = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join('')
      setTranscript(transcriptResult)
    }

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      setError(event.error)
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    if (isListening) {
      recognition.start()
    } else {
      recognition.stop()
      setTranscript('')
    }

    return () => recognition.abort()
  }, [isListening, recognition])

  return {
    transcript,
    isListening,
    isSpeaking,
    handleToggleListening,
    handleToggleSpeaking,
    speakText,
  }
}

export default useSpeech
