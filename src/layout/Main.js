import styled from 'styled-components'
import { Content } from './Content'


export const Main = ({ children }) => {
  return (
    <StyledMain>
      <Content>
        {children}
      </Content>
    </StyledMain>
  )
}


const StyledMain = styled.main`
  display: flex;
  flex: 1;
`
