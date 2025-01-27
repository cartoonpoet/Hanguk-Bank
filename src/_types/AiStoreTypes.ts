import { Scene } from '@soulmachines/smwebsdk'

type TransferType = 'From' | 'To' | 'Tell' | 'Confirm' | 'Transferred'
type AccountSearchType = 'Balance'
type SavingsType = 'Method' | 'Savings' | 'Description'
type CallCenterType = 'ConsultationType'

export type ModeProp = 'WorkList' | TransferType | AccountSearchType | SavingsType | CallCenterType;
export type WorkProp = null | 'Transfer' | 'Account' | 'Savings' | 'CallCenter'

export interface Account {
  accountType: string
  name: string
  accountNumber: string
}

export interface AiStoreTypes {
  scene: Scene | null,
  setScene: (scene: Scene) => void,
  mode: ModeProp,
  setMode: (mode: ModeProp) => void,
  selectedTo: Account | null,
  setSelectedTo: (selectedTo: Account) => void,
  work: WorkProp,
  setWork: (work: WorkProp) => void,
  isShowManual: boolean,
  setIsShowManual: (isShowManual: boolean) => void,
}

