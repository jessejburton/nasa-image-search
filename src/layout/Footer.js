import { useState, useEffect } from 'react'
import styled from 'styled-components'
export const Footer = ({ setMotionEnabled }) => {

  const [clicked, setClicked] = useState(false)

  function toggleStars(event) {
    setMotionEnabled(event.target.checked)
  }

  function onHandleToTopClick(event) {
    setClicked(true)
    window.scrollTo(0, 0)
  }

  // Set clicked back to false
  useEffect(() => {
    if (!clicked) return
    setTimeout(() => setClicked(false), 1500)
  }, [clicked])

  return (
    <StyledFooter className="main-footer">
      <div className="star-toggle" title="Toggle Star Lock">
        <input type="checkbox" id="stars" name="stars" onChange={toggleStars} />
        <label htmlFor="stars" />
      </div>
      <div className="copyright">
        <button
          className={clicked ? 'clicked' : ''}
          onClick={onHandleToTopClick}
          title="Back to Top"
        >
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-up" className="svg-inline--fa fa-caret-up fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path></svg>
        </button>
        <p>copyright &copy; {new Date().getFullYear()}</p>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10rem;
  padding: 0 5rem;
  color: var(--grey-1);
  z-index: 200; // Header~Footer

  .star-toggle {
    input[type=checkbox] {
      display: none;
    }

    label {
      position: relative;
      cursor: pointer;
    }

    label::before,
    label::after {
      content: '';
      position: absolute;
      left: 115%;
      top: 0;
      height: 2rem;
    }

    label::before {
      width: 4rem;
      border-radius: 15%;
      background-color: var(--grey);
    }

    label::after {
      width: 2rem;
      border-radius: 15%;
      background-color: var(--grey-2);
      transition: transform 0.3s ease, background-color 0.3s ease;
    }

    input[type=checkbox]:checked + label::before {
      /* mixin ~ blueShadow */
      box-shadow:
        0 0 5px 0 rgba(21, 65, 140,0.8),
        0 0 20px 0 rgba(21, 65, 140,0.6),
        0 0 35px 0 rgba(21, 65, 140,0.4);
    }

    input[type=checkbox]:checked + label::after {
      background-color: var(--nasaBlue);
      transform: translateX(2rem);
      /* mixin ~ blueShadow */
      box-shadow:
        0 0 5px 0 rgba(21, 65, 140,0.8),
        0 0 20px 0 rgba(21, 65, 140,0.6),
        0 0 35px 0 rgba(21, 65, 140,0.4);
    }
  }

  .copyright {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
      position: relative;
      width: 5rem;
      height: 5rem;
      color: var(--grey);
      background: none;
      border: none;
      cursor: pointer;
      transform-origin: base;
      transition: transform 0.3s ease;
      outline: none;

      svg {
        width: 100%;
        height: 100%;

        path {
          fill: var(--grey-2);
        }
      }

      &::before {
        content: '';
        position: absolute;
        top: -75px;
        left: -75px;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        z-index: -1;
      }

      &:hover {
        transform: scale(1.5);

        svg path {
          fill: var(--nasaBlue);
        }
      }

      &:active {
        transition: none;
        transform: scale(1);

        svg path {
          fill: var(--grey-2);
        }
      }

    }
  }
`
