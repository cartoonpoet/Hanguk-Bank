import { create } from 'zustand/react'
import { AiStoreTypes } from './AiStoreTypes'

export const useAiStore = create<AiStoreTypes>((set) => ({
  scene: null,
  setScene: (scene) => set(() => ({ scene })),
  connectionState: '',
  setConnectionState: (connectionState) => set(() => ({ connectionState })),
}))