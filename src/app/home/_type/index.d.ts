interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList
}

interface SpeechRecognitionResultList {
  [index: number]: SpeechRecognitionResult
  length: number
}

interface SpeechRecognitionResult {
  [index: number]: SpeechRecognitionAlternative
  length: number
  isFinal: boolean
}

interface SpeechRecognitionAlternative {
  transcript: string
  confidence: number
}

interface SpeechRecognition extends EventTarget {
  lang: string
  interimResults: boolean
  maxAlternatives: number
  start(): void
  stop(): void
  abort(): void

  onaudiostart: ((this: SpeechRecognition, ev: Event) => any) | null
  onsoundstart: ((this: SpeechRecognition, ev: Event) => any) | null
  onspeechstart: ((this: SpeechRecognition, ev: Event) => any) | null
  onspeechend: ((this: SpeechRecognition, ev: Event) => any) | null
  onsoundend: ((this: SpeechRecognition, ev: Event) => any) | null
  onaudioend: ((this: SpeechRecognition, ev: Event) => any) | null
  onresult:
    | ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any)
    | null
  onnomatch:
    | ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any)
    | null
  onerror:
    | ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => any)
    | null
  onstart: ((this: SpeechRecognition, ev: Event) => any) | null
  onend: ((this: SpeechRecognition, ev: Event) => any) | null
}

declare const SpeechRecognition: {
  prototype: SpeechRecognition
  new (): SpeechRecognition
}

declare const webkitSpeechRecognition: {
  prototype: SpeechRecognition
  new (): SpeechRecognition
}
