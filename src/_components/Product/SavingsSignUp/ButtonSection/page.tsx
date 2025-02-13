import styled from 'styled-components'
import Button from '@/_components/common/Button/page'


const Wrapper = styled.section`
    display: flex;
    padding: 20px;
`

const ButtonSection = () => {
  return <Wrapper>
    <Button type="Fill" status="Disabled" size="Large">
      다음
    </Button>
  </Wrapper>
}

export default ButtonSection