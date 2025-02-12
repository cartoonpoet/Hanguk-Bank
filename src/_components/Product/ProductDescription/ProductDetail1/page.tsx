import { Container, TitleWrapper, TitleWrapperText, DescriptionWrapper, ImageWrapper } from './style.css'
import { Fairy, Fanfare } from '@/_assets/icons'

const ProductDetail1 = () => {
  return <Container>
    <TitleWrapper>
      <div>한국은행 신규/장기미사용</div>
      <div>고객 대상 <TitleWrapperText>최대 연 3.0p 우대</TitleWrapperText></div>
    </TitleWrapper>
    <DescriptionWrapper>
      <div>한국은행을 새롭게 시작하는
        <br />고객님께 드리는
      </div>
      <div className="font-bold text-lg">‘환영해요 우대이율'</div>
    </DescriptionWrapper>
    <ImageWrapper>
      <Fairy />
      <Fanfare />
    </ImageWrapper>
  </Container>
}

export default ProductDetail1