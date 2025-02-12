import styled from 'styled-components'
import {HomeIcon} from '@/_assets/icons'

const Container = styled.div`
    padding: 40px 20px;
    background: white;
    display: flex;
    flex-direction: column;
`
const Card = styled.div`
    border-radius: 16px;
    border: 1px solid var(--Border-Secondary, #E5E8EB);
    background: var(--Caution-Default, #FF8C00);
    display: flex;
    padding: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
`

const Title = styled.h1`
    color: var(--White-Default, #FFF);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 28.8px */
`

const SubTitle = styled.h2`
    color: var(--Caution-Default, #FFF4E6);
    
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */`

const BottomBanner = () => {
  return <Container>
    <Card>
      <div>
        <Title>다른 은행 상품도 궁금하신가요?</Title>
        <SubTitle>금융상품 비교하기</SubTitle>
      </div>
      <HomeIcon/>
    </Card>
  </Container>
}

export default BottomBanner