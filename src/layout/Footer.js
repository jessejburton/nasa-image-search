import styled from 'styled-components'

export const Footer = () => {
  return (
    <StyledFooter>
      <p>copyright &copy; {new Date().getFullYear()}</p>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 10rem;
  padding: 0 5rem;
  color: var(--grey);
`
