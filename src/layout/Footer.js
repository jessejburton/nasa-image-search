import styled from 'styled-components'

export const Footer = () => {
  return (
    <StyledFooter>
      <h1>Footer</h1>
      <p>copyright &copy; {new Date().getFullYear()}</p>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10rem;
  padding: 0 5rem;
`
