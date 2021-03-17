import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Navigation } from '../components'
import logo from '../images/nasa_logo.png'

export const Header = () => {
  return (
    <StyledHeader className="main-header">
      <div className="brand">
        <Link to="/"><img src={logo} alt="NASA Logo" width="107px" height="88px" /></Link>
        <div className="brand__text">
          <h1>NASA</h1>
          <h2>Image Search</h2>
        </div>
      </div>
      <Navigation />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--headerHeight);
  padding: 0 5rem;
  z-index: 200; // Header~Footer
  opacity: 1;
  transition: opacity 0.3s ease;

  .scrolled & {
    opacity: 0;
  }

  .brand {
    display: flex;

    a:active img {
      transform: scale(0.7);
    }

    img {
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }

    &__text {
      display: flex;
      flex-direction: column;
      margin-left: 2.5rem;

      h1, h2 {
        margin: 0;
      }

      h2 {
      }
    }
  }
`