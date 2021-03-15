import styled from 'styled-components'

export const Wrapper = ({ children }) => {
  return (
    <StyledWrapper>
      { children }
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  width: 100%;
`