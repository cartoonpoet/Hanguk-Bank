import { JSXElementConstructor } from 'react'

export interface AccountProps {
  ownerName: string
  accountType: string
  accountNumber: string
  Icon?: JSXElementConstructor<SVGElement>
}
