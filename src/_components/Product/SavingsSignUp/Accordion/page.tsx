import { Container, Description, Title, Wrapper, Button } from './style.css'
import { use } from 'react'
import { ProductContext } from '@/_contexts/useProduct'

const Accordion = () => {
  const { setIsShowManual } = use(ProductContext)
  return <Container>
    <Wrapper>
      <Description>
        상품가입이 완료되면, 계약서와 함께 설명서를 전달드려요.
      </Description>
      <section className="flex flex-col gap-2.5">
        <Title>
          한국 스마트 적금
        </Title>
        <Button onClick={() => setIsShowManual(true)}><span className="text-Brand-Default">설명서 보기</span></Button>
      </section>
    </Wrapper>
  </Container>
}

export default Accordion