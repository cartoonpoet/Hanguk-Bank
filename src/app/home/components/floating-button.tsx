import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const FloatingButton = ({ children }: PropsWithChildren) => {
  return <SFloatingBtn>{children}</SFloatingBtn>
}

const SFloatingBtn = styled.button`
  background: linear-gradient(#007bff, #003ba2);
  width: 54px;
  height: 54px;
  border-radius: 27px;
  outline: none;
  border: none;
`

export default FloatingButton
