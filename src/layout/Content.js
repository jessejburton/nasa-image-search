import styled from 'styled-components'


export const Content = ({ children }) => {
  return (
    <StyledContent className="content">
      { children}
    </StyledContent>
  )
}


const StyledContent = styled.section`
  min-height: 120vh;  // Make the scrollbar always appear
  width: var(--maxContentWidth);
  margin: 0 auto;
  padding: 0 5rem;
`