import { useState } from 'react'
import styled from 'styled-components'

export const Footer = ({ setMotionEnabled }) => {
  const [starsLabel, setStarsLabel] = useState("Hide Stars")

  function toggleStars(event) {
    setMotionEnabled(event.target.checked)
  }

  return (
    <StyledFooter>
      <div className="star-toggle" title="Toggle Star Lock">
        <input type="checkbox" id="stars" name="stars" onChange={toggleStars} />
        <label htmlFor="stars" />
      </div>
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
`
