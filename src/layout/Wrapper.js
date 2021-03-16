import styled from 'styled-components'

import stars from '../images/stars_transparent.png'

export const Wrapper = ({ children, offset, ...rest }) => {
  return (
    <StyledWrapper background={stars} offset={offset} {...rest} >
      {children}
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
    width: 130vw;
    height: 130vh;
    z-index: -1;
    background: url(${props => props.background});
    background-attachment: fixed;
    background-repeat: repeat;
    background-size: 75% 75%;
    opacity: 0.8;
    filter: grayscale(1);
    transition:
      background-position 4s cubic-bezier(.08,.63,.26,.99),
      transform 4s cubic-bezier(.08,.63,.26,.99);
  }

  &.motion-enabled::before {
    background-position: 0px ${props => props.offset * .4 || 0}px;
    transform: rotate(${props => props.offset * .005 || 0}deg) scale(1.25);
  }

  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100; // Black Fade
    pointer-events: none;
    background:
      linear-gradient(
        0deg,
        rgba(0,0,0,1) 0%,
        rgba(0,0,0,0) 40%,
        rgba(0,0,0,0) 60%,
        rgba(0,0,0,1) 100%
      );
  }
`