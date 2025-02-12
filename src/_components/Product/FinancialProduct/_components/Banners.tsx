import styled from 'styled-components'
import { ArrowDown } from '@/_assets/icons'

interface StyledBannerProps {
  $backgroundColor: string
}

const StyledBanner = styled.div<StyledBannerProps>`
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${(props) => props.$backgroundColor};
    align-items: center;
    border-radius: 16px;
`

const ArrowRight = styled(ArrowDown)`
    width: 24px;
    height: 24px;
    fill: black;
    rotate: -90deg;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`
const SubTitle = styled.h2`
    color: var(--Neutral-Label, #4E5968);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
`
const Title = styled.h2`
    color: var(--Black-Default, #000);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 28.8px */
`

const banners = [
  {
    subTitle: '차곡차곡 모으고',
    title: '입출금 · 적금 · 정기예금 · 외화예금',
    backgroundColor: '#EAF6EC',
  },
  {
    subTitle: '현명하게 빌리고',
    title: '신용대출 · 주택담보대출 · 전세대출',
    backgroundColor: '#FFF4E6',
  },
  {
    subTitle: '신중하게 투자해서',
    title: '펀드 · 신탁 · ISA · 포트폴리오',
    backgroundColor: '#FBEBEC',
  },
  {
    subTitle: '미래를 준비하세요',
    title: '청약/채권 · 퇴직연금 · 보험',
    backgroundColor: '#E6F2FF',
  },
]

const Banners = () => {
  return <main className="flex flex-col gap-2.5 px-5 py-10 bg-white">
    {banners.map(({ backgroundColor, subTitle, title }) => (<StyledBanner key={title} $backgroundColor={backgroundColor}>
      <Wrapper>
        <SubTitle>{subTitle}</SubTitle>
        <Title>{title}</Title>
      </Wrapper>
      <ArrowRight />
    </StyledBanner>))}
  </main>
}

export default Banners