import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <StyledNav className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  ul {
    display: flex;
    min-width: 200px;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;

    li {
      padding: 0;

      a {
        display: inline-block;
        padding: 0.75rem 1.5rem;
        border-radius: var(--roundedEdge);
        text-decoration: none;
        color: inherit;
        transition: background-color 0.3s ease, color 0.3s ease;

        :hover {
          background-color: var(--nasaBlue);
          color: var(--white);
        }
      }
    }
  }
`