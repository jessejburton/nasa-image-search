import { useContext, useRef } from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

import searchIcon from '../images/search_icon.svg'
import { SearchContext } from '../context'

export const Search = ({ onUpdate }) => {

  let history = useHistory()

  const { query } = useContext(SearchContext)

  const searchRef = useRef()


  function clearSearch() {

  }


  function handleSubmitSearch(e) {
    e.preventDefault()

    history.push(`/search/${searchRef.current.value}`)
    onUpdate(searchRef.current.value)
  }


  return (
    <StyledSearch className="search-form" onSubmit={handleSubmitSearch}>
      <img
        src={searchIcon}
        alt="Search"
        width="30px"
        height="30px"
        onClick={clearSearch}
      />
      <input
        id="search"
        name="search"
        type="text"
        defaultValue={query}
        placeholder="Moon, shuttle, space..."
        ref={searchRef}
        autoFocus
      />
      <label htmlFor="search">Search</label>
      <button><span>Search</span></button>
    </StyledSearch>
  )
}

const StyledSearch = styled.form`
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
    transition: background-color 0.1s ease;

    span {
      display: block;
      transition: transform 0.3s ease;
    }

    &:hover span {
      transform: scale(1.1);
    }

    &:active {
      background-color: var(--nasaBlue);

      span {
        transform: scale(0.9);
      }
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