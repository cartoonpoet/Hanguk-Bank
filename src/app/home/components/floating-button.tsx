import { PropsWithChildren } from 'react'
import styled from 'styled-components'

interface FloatingButtonProps {
  handleClick: () => void
}

const FloatingButton = ({
  handleClick,
  children,
}: PropsWithChildren<FloatingButtonProps>) => {
  return <SFloatingBtn onClick={handleClick}>{children}</SFloatingBtn>
}

const SFloatingBtn = styled.button`
  background: linear-gradient(#007bff, #003ba2);
  width: 54px;
  height: 54px;
  border-radius: 27px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default FloatingButton
