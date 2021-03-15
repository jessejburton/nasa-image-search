import { useState } from 'react'
import styled from 'styled-components'

import searchIcon from '../images/search_icon.svg'

export const Search = ({ search = '', onUpdate }) => {

  const [query, setQuery] = useState(search)

  function handleSearch(){
    onUpdate(query)
  }

  function handleKeyDown(e){
    if(e.which === 13) handleSearch()
  }

  function handleSearchChange(e){
    setQuery(e.target.value)
  }

  return (
    <StyledSearch>
      <input
        id="search"
        name="search"
        type="text"
        value={ query }
        placeholder="Search..."
        onKeyDown={ handleKeyDown }
        onChange={ handleSearchChange }
      />
      <label htmlFor="search">Search</label>
      <button onClick={ handleSearch }>
        <img src={ searchIcon } alt="Search" />
      </button>
    </StyledSearch>
  )
}

const StyledSearch = styled.fieldset`
  position: relative;
  border: none;
  padding: 2.5rem;
  margin: 0 0 7.5rem 0;
  background-color: var(--darkGrey);
  border-radius: var(--roundedEdge);
  opacity: 0.9;

  input[type=text]{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0 2.5rem;
    font-size: 3.2rem;
    font-weight: bold;
    color: var(--lightGrey);
    background: transparent;
    border: none;
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    width: 10rem;
    height: 100%;
    padding: 0 2.5rem;
    background-color: var(--lightGrey);
    color: var(--darkGrey);
    border: none;
    border-top-right-radius: var(--roundedEdge);
    border-bottom-right-radius: var(--roundedEdge);
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