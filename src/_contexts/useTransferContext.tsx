import React, { createContext, useState, ReactNode } from 'react'

type Mode = 'ConfirmTransfer' | 'EnterPassword'

interface TransferTypes {
  mode: Mode
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  setMode: (mode: Mode) => void
  selected: string
  setSelected: (selected: string) => void
  amount: number // 이체할 금액
  setAmount: (amount: (prev: number) => number) => void
  balance: number // 잔액
  setBalance: (balance: number) => void
  password: string
  setPassword: (password: (prev: string) => string) => void
}

const INIT_BALANCE = 12345600

const init = {
  mode: 'ConfirmTransfer',
  isOpen: false,
  selected: '',
  amount: 0,
  balance: INIT_BALANCE,
}

export const TransferContext = createContext<TransferTypes>(init as TransferTypes)

const TransferContextProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [mode, setMode] = useState<Mode>('ConfirmTransfer')
  const [selected, setSelected] = useState<string>('')
  const [amount, setAmount] = useState<number>(0)
  const [balance, setBalance] = useState<number>(INIT_BALANCE)
  const [password, setPassword] = useState<string>('')

  return <TransferContext.Provider
    value={{
      isOpen,
      setIsOpen,
      mode,
      setMode,
      selected,
      setSelected,
      amount,
      balance,
      setAmount,
      setBalance,
      password,
      setPassword
    }}>{children}</TransferContext.Provider>
}

export default TransferContextProvider
