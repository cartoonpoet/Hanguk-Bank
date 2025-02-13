import { Container, Title, CardWrapper, Card, CardTitle, CardDescription } from './style.css'

const Information = [
  {
    title: '한국ONE통장',
    description: '모두가 ONE하는 다양한 수수료 혜택',
  },
  {
    title: '한국마이핏통장',
    description: '연 1.5% 비상금 이율을 제공하는',
  },
]

const OtherSection = () => {
  return <Container>
    <Title>다른 고객이 함께 가입한 상품</Title>
    {Information.map((item) => (
      <CardWrapper key={item.title}>
        <Card>
          <CardTitle>{item.title}</CardTitle>
          <CardDescription>{item.description}</CardDescription>
        </Card>
      </CardWrapper>
    ))}
  </Container>
}

export default OtherSection