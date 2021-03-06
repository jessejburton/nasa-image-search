import styled from 'styled-components'

import stars from '../assets/images/stars_transparent.png'
import { useScrollManager } from '../hooks'


export const Wrapper = ({ children, ...rest }) => {

  const { position } = useScrollManager()

  return (
    <StyledWrapper offset={position.y} {...rest}>
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
    z-index: 0;
    background: url(${stars});
    background-attachment: fixed;
    background-repeat: repeat;
    background-size: 75% 75%;
    opacity: 0.8;
    filter: grayscale(1);
    transition:
      background-position 2s cubic-bezier(.08,.63,.26,.99),
      transform 2s cubic-bezier(.08,.63,.26,.99);
  }

  .motion-enabled &::before {
    background-position: 0px ${props => props.offset * .3 || 0}px;
    transform: rotate(${props => Math.max(props.offset * 0.005, -25) || 0}deg) scale(1.25);
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