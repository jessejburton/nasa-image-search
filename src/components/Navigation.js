import styled from 'styled-components'
import { NavLink } from "react-router-dom";


export const Navigation = () => {
  return (
    <StyledNav className="navigation">
      <ul>
        <li>
          <NavLink exact to="/search" activeClassName="active">Search</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">About</NavLink>
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
    font-size: 1.8rem;

    li {
      padding: 0;

      a {
        display: inline-block;
        padding: 0.75rem 1.5rem;
        border-radius: var(--roundedEdge);
        text-decoration: none;
        color: var(--grey-1);
        transition: background-color 0.3s ease, color 0.3s ease;

        &.active {
          color: var(--white);
        }

        :hover:not(.active) {
          background-color: var(--nasaBlue);
          color: var(--white);
        }
      }
    }
  }
`