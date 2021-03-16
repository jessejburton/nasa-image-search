import { Navigation } from '../components'
import styled from 'styled-components'
import logo from '../images/nasa_logo.png'

export const Header = () => {
  return (
    <StyledHeader>
      <div className="brand">
        <img src={logo} alt="NASA Logo" />
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

  .brand {
    display: flex;

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