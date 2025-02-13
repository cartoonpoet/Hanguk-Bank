import {
  Container,
  SubTitle,
  Title,
  List,
  ListItem,
  Ellipse,
  ListItemSubTitle,
  ListItemTitle,
  ListItemText,
  ButtonContainer, Button, IconButton,
} from './style.css'
import { GiftIcon, MoneyUpIcon, ShareIcon } from '@/_assets/icons'
import { use } from 'react'
import { ProductContext } from '@/_contexts/useProduct'
import { ProductSteps } from '@/_constants/mode'

const RegistrationSection = () => {
  const { setStep } = use(ProductContext)

  return <Container>
    <SubTitle>한 달만 유지해도 확정이자율을 드리는</SubTitle>
    <Title>한국 스마트 적금</Title>
    <List>
      <ListItem>
        <Ellipse>
          <GiftIcon />
        </Ellipse>
        <ListItemSubTitle>기본 연 2.90%</ListItemSubTitle>
        <ListItemTitle>최고 연 8.00%</ListItemTitle>
      </ListItem>
      <ListItem>
        <Ellipse>
          <MoneyUpIcon />
        </Ellipse>
        <ListItemSubTitle>저축한도</ListItemSubTitle>
        <ListItemText>월 1만원 이상<br />30만원 이하</ListItemText>
      </ListItem>
    </List>
    <ButtonContainer>
      <Button onClick={() => setStep(ProductSteps[2])}>가입하기</Button>
      <IconButton><ShareIcon width={24} height={24} fill="#28A745" /></IconButton>
    </ButtonContainer>
  </Container>
}

export default RegistrationSection