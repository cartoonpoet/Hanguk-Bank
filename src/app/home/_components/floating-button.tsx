import styled from 'styled-components'
import Mic from '/public/icon/icon-mic.svg'

interface FloatingButtonProps {
  handleClick?: () => void
}

const FloatingButton = ({ handleClick }: FloatingButtonProps) => {
  return (
    <SFloatingBtn onClick={handleClick}>
      <Mic />
    </SFloatingBtn>
  )
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
