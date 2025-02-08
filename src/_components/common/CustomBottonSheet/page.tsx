import styled from 'styled-components'
import Close from '/public/icon/nav-close.svg'
import React from 'react'

interface CustomBottomSheetProps {
  isOpen: boolean
  onClose?: () => void
  children?: React.ReactNode
  headerBackgroundColor?: string
}

const CustomBottomSheet = ({ children, isOpen, onClose, headerBackgroundColor }: CustomBottomSheetProps) => {
  return (
    <Overlay isOpen={isOpen}>
      <BottomSheetContainer isOpen={isOpen}>
        <Header headerbackgroundcolor={headerBackgroundColor}>
          {onClose && <CloseButton onClick={onClose} >
            <Close />
          </CloseButton>}
        </Header>
        <ContentWrapper>{children}</ContentWrapper>
      </BottomSheetContainer>
    </Overlay>
  )
}

const Header = styled.div<{ headerbackgroundcolor?: string }>`
    display: flex;
    padding: 20px 20px 10px 20px;
    justify-content: flex-end;
    background: ${({ headerbackgroundcolor }) => (headerbackgroundcolor ? headerbackgroundcolor : 'none')};
    align-items: center;
    align-self: stretch;
`


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
    overflow: hidden;
`

// 닫기 버튼
const CloseButton = styled.button`
    &:hover {
        color: #0070f3;
    }
`

// Content Wrapper
const ContentWrapper = styled.div`
    //padding: 20px;
    text-align: center;
`

export default CustomBottomSheet