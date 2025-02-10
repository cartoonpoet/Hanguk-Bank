import { Scene } from '@soulmachines/smwebsdk'

type TransferType = 'From' | 'To' | 'Tell' | 'Confirm' | 'Transferred'
type AccountSearchType = 'Balance'
type SavingsType = 'Method' | 'Savings' | 'Description'
type CallCenterType = 'ConsultationType' | 'ApplicationType'

export type ModeProp = 'WorkList' | TransferType | AccountSearchType | SavingsType | CallCenterType;
export type WorkProp = null | 'Transfer' | 'Account' | 'Savings' | 'CallCenter'

export interface Account {
  accountType: string
  name: string
  accountNumber: string
}

export type ConsultationType = '전화 상담' | '챗봇 상담'
export type ApplicationType = '사고 신고' | '뱅킹/예금' | '펀드' | '대출' | '퇴직연금' | '민원 접수'

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
  consultationType: ConsultationType | null,
  setConsultationType: (consultationType: ConsultationType) => void,
  applicationType: ApplicationType | null,
  setApplicationType: (applicationType: ApplicationType) => void,
  connectionState: string,
  setConnectionState: (connectionState: string) => void,
}

