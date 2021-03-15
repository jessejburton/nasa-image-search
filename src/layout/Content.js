import styled from 'styled-components'

export const Content = ({ children }) => {
  return (
    <StyledContent className="content">
      { children }
    </StyledContent>
  )
}

const StyledContent = styled.section`
  width: var(--maxContentWidth);
  margin: 0 auto;
  padding: 5rem;
`