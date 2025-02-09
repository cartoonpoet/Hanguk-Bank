import React from 'react'
import styled from 'styled-components'
import { buttonTypeOfState, buttonSizeOfState, buttonStatusOfState } from './style'

type ButtonStyleProps = {
  type: 'Outline' | 'Fill' | 'Soft'
  status: 'Default' | 'Disabled' | 'Subtle'
  size: 'Small' | 'Large' | 'Medium'
}

const StyledButton = styled.button<ButtonStyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 16px */
    ${(props) => buttonTypeOfState[props.type]}
    ${(props) => buttonSizeOfState[props.size]}
    ${(props) => buttonStatusOfState[props.status]}
`

type ButtonProps = {
  children: React.ReactNode
  type: 'Soft' | 'Fill' | 'Outline'
  status: 'Default' | 'Disabled'
  size: 'Small' | 'Medium' | 'Large'
  onClick?: () => void
}
const Button = ({ children, type, status, size, onClick }: ButtonProps) => {
  return <StyledButton status={status} size={size} type={type} onClick={onClick}>{children}</StyledButton>
}

export default Button
