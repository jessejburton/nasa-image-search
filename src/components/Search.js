import { useState } from 'react'
import styled from 'styled-components'

import searchIcon from '../images/search_icon.svg'

export const Search = ({ search = '', onUpdate }) => {

  const [query, setQuery] = useState(search)

  function handleSearch() {
    onUpdate(query)
  }

  function handleKeyDown(e) {
    if (e.which === 13) handleSearch()
  }

  function handleSearchChange(e) {
    setQuery(e.target.value)
  }

  return (
    <StyledSearch>
      <img src={searchIcon} alt="Search" width="30px" height="30px" />
      <input
        id="search"
        name="search"
        type="text"
        value={query}
        placeholder="Moon, shuttle, space..."
        onKeyDown={handleKeyDown}
        onChange={handleSearchChange}
        autoFocus
      />
      <label htmlFor="search">Search</label>
      <button onClick={handleSearch}>Search</button>
    </StyledSearch>
  )
}

const StyledSearch = styled.fieldset`
  position: sticky;
  top: 14rem;
  border: none;
  padding: 2.5rem;
  margin: 0 auto 7.5rem auto;
  width: 100%;
  background-color: var(--blue-3);
  border-radius: var(--roundedEdge);
  z-index: 500; // Search
  opacity: 0.9;
  transition: opacity 0.3s ease, width 0.3s ease;
  box-shadow:
      0 0 5px 0 rgba(49,144,207,0.8),
      0 0 20px 0 rgba(49,144,207,0.6),
      0 0 35px 0 rgba(49,144,207,0.4);

  .scrolled & {
    width: 90%;
  }

  input[type=text]{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0 2.5rem 0 7.5rem;
    font-size: 3.2rem;
    font-weight: bold;
    color: var(--white);
    background: transparent;
    border: none;

    &::placeholder {
      color: var(--blue-2);
    }
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    padding: 0 2.5rem;
    background-color: var(--blue-2);
    color: var(--white);
    border: none;
    border-top-right-radius: var(--roundedEdge);
    border-bottom-right-radius: var(--roundedEdge);
    font-size: 2rem;
    font-weight: 600;
    cursor: pointer;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  input[type=text]:focus,
  button:focus {
    outline: none;
    border: 2px solid rgba(21, 65, 140,1);
    /* mixin ~ blueShadow */
    box-shadow:
      0 0 5px 0 rgba(21, 65, 140,0.8),
      0 0 20px 0 rgba(21, 65, 140,0.6),
      0 0 35px 0 rgba(21, 65, 140,0.4);
  }

  label {
    opacity: 0;
    pointer-events: none;
  }
`