'use client'

import Close from '/public/icon/nav-close.svg'
import styled from 'styled-components'

interface BottomSheetProps {
  isOpen: boolean
  onClose?: () => void
  children?: React.ReactNode
}

const BottomSheet = ({ isOpen, onClose, children }: BottomSheetProps) => {
  return (
    <Overlay isOpen={isOpen}>
      <BottomSheetContainer isOpen={isOpen}>
        <CloseButton onClick={onClose}>
          <Close />
        </CloseButton>
        <ContentWrapper>{children}</ContentWrapper>
      </BottomSheetContainer>
    </Overlay>
  )
}

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  max-width: 480px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 999;
`
// BottomSheet 컨테이너
const BottomSheetContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  bottom: 0;
  max-width: 480px;
  width: 100%;
  background: #fff;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
`

// 닫기 버튼
const CloseButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  padding: 20px;

  display: flex;
  justify-content: flex-end;

  &:hover {
    color: #0070f3;
  }
`

// Content Wrapper
const ContentWrapper = styled.div`
  padding: 20px;
  text-align: center;
`

export default BottomSheet
