import { Container, Content, Wrapper, Title, ItemBanner } from './style.css'
import { Banner } from '@/_assets/icons'

const information = [
  {
    title: '가입 대상',
    content: '실명의 개인',
  },
  {
    title: '예금 과목',
    content: '정기적금',
  },
  {
    title: '상품유형',
    content: '자유적립식',
  },
  {
    title: '이자지급방법',
    content: '만기일시지급식',
  },
  {
    title: '가입기간',
    content: '12개월 부터 36개월 이내',
  },
]

const InfoSection = () => {
  return <Container>
    {information.map((item => (
      <Wrapper key={item.title}>
        <Title>{item.title}</Title>
        <Content>{item.content}</Content>
      </Wrapper>)))
    }
    <ItemBanner>
      <Banner />
      <div className="flex-1">
        이 예금은 예금자보호법에 따라 원금과 소정의 이자를 합하여 1인당 “5천만원까지&quot;(본 은행의 여타 보호상품과 합산) 보호됩니다.
      </div>
    </ItemBanner>
  </Container>
}

export default InfoSection