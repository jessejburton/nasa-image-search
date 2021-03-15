import styled from 'styled-components'

import stars from '../images/stars_transparent.png'

export const Wrapper = ({ children, offset }) => {
  return (
    <StyledWrapper background={ stars } offset={ offset }>
      { children }
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  width: 100%;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: url(${ props => props.background });
    background-attachment: fixed;
    background-size: 75% 75%;
    background-position: 0px ${props => props.offset*.4 || 0}px;
    z-index: -1;
    opacity: 0.8;
    filter: grayscale(1);
    transition: background-position 1s cubic-bezier(.08,.63,.26,.99);
  }
`