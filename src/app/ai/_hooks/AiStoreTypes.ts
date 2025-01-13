import { Scene } from '@soulmachines/smwebsdk'

export type ModeProp = 'WorkList' | 'From' | 'To' | 'Confirm' | 'Reconfirm' | 'Transferred';

export interface AiStoreTypes {
  scene: Scene | null,
  setScene: (scene: Scene) => void,
  mode: ModeProp,
  setMode: (mode: ModeProp) => void,
}

