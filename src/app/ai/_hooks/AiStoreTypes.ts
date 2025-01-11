import { Scene } from '@soulmachines/smwebsdk'

export interface AiStoreTypes {
  scene: Scene | null,
  setScene: (scene: Scene) => void,
}