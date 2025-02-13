import styled from 'styled-components'

const Container = styled.div`
    padding: 40px 20px;
    background: var(--Neutral-Tertiary, #F2F4F6);
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Header = styled.header`
    color: var(--Black-Default, #000);
    
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 24px */
    padding-bottom: 10px;
`

const Card = styled.div`
    border-radius: 16px;
    border: 1px solid var(--Border-Secondary, #E5E8EB);
    background: var(--White-Default, #FFF);
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
`
const Title = styled.h1`
    color: var(--Black-Default, #000);

    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 28.8px */
    display: flex;
    align-items: center;
    gap: 8px
`

const Tag = styled.span`
    color: var(--Neutral-Default, #6B7684);

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
`

const Number = styled.span`
    color: var(--Brand-Default, #007BFF);
    text-align: center;
    width: 24px;
    height: 24px;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 28.8px */
    background: var(--Brand-Secondary, #E6F2FF);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 100px;
    background: var(--Brand-Secondary, #E6F2FF);
`

const CardData = [
  {
    title: '똑똑한 적금',
    tag: '#알아서 쏠쏠하게',
  },
  {
    title: '스마트 적금',
    tag: '#초 심플 적금',
  },
  {
    title: '지수연동예금(ELD)',
    tag: '#안전한 고금리',
  },
  {
    title: '땡겨요 적금',
    tag: '#금리도 땡겨요',
  },
]

const TopSection = () => {
  return <Container>
    <Header>🎁 60대가 가장 많이 가입한 상품이에요</Header>
    {CardData.map((item, index) => (<Card key={item.title}>
      <Title><Number>{index + 1}</Number>{item.title}</Title>
      <Tag>{item.tag}</Tag>
    </Card>))}
  </Container>
}

export default TopSection