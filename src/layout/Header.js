import { Navigation } from '../components'
import styled from 'styled-components'

export const Header = () => {
  return (
    <StyledHeader>
      <h1>Header</h1>
      <Navigation />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--headerHeight);
  padding: 0 5rem;

  h1 {
    margin: 0;
  }
`