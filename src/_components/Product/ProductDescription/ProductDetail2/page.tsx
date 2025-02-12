import { Container, DescriptionWrapper, MainWrapper, SubWrapper, SavingsIconWrapper } from './style.css'
import { SavingsIcon } from '@/_assets/icons'

const ProductDetail = () => {
  return <Container>
    <MainWrapper>
      입출금이 자유로운 예금 외<br />
      한국은행 상품을 보유하지 않은 경우<br />
      연 3.0p 우대
    </MainWrapper>
    <SubWrapper>
      <section>
        한국 스마트 적금으로 오랫만에 거래를 하시는 <br />
        고객님을 위한 ‘함께해요 우대이율'
      </section>
      <DescriptionWrapper>
        <div> ·</div>
        <div>주1) 거치식/접릭식 예금, 청약, 펀드, 신탁,<br /> 방카슈랑스, 대출(외화예금, 퇴직예금 제외)</div>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <div> ·</div>
        <div>주2) 대상기간 : 적금 신규 전일 기준 최근 6개월</div>
      </DescriptionWrapper>
      <SavingsIconWrapper>
        <SavingsIcon />
      </SavingsIconWrapper>
    </SubWrapper>
  </Container>
}

export default ProductDetail