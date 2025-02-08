import React, { createContext, useState, ReactNode } from 'react'

type Mode = 'ConfirmTransfer' | 'EnterPassword'

interface TransferTypes {
  mode: Mode
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  setMode: (mode: Mode) => void
  selected: string
  setSelected: (selected: string) => void
}

const init = {
  mode: 'ConfirmTransfer',
  isOpen: false,
  selected: '',
}

export const TransferContext = createContext<TransferTypes>(init as TransferTypes)

const TransferContextProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [mode, setMode] = useState<Mode>('ConfirmTransfer')
  const [selected, setSelected] = useState<string>('')

  return <TransferContext.Provider
    value={{ isOpen, setIsOpen, mode, setMode, selected, setSelected }}>{children}</TransferContext.Provider>
}

export default TransferContextProvider
