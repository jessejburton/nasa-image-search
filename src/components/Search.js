import { useContext, useRef } from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

import { SearchContext } from '../context'

export const Search = ({ onUpdate }) => {

  let history = useHistory()

  const { query } = useContext(SearchContext)

  const searchRef = useRef()

  function clearSearch(e) {
    e.preventDefault()

    searchRef.current.value = ''
    history.push(`/search`)
    onUpdate('')
  }

  function handleSubmitSearch(e) {
    e.preventDefault()

    history.push(`/search/${searchRef.current.value}`)
    onUpdate(searchRef.current.value)
  }

  return (
    <StyledSearch
      className="search-form"
      onSubmit={handleSubmitSearch}
    >
      <button
        name="clear"
        title="Clear search results"
        width="30px"
        height="30px"
        type="button"
        onClick={clearSearch}>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#1f4068" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
      </button>
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
      <button name="search" type="submit"><span>Search</span></button>
    </StyledSearch>
  )
}

const StyledSearch = styled.form`
  position: sticky;
  top: 14rem;
  border: none;
  padding: 2.5rem;
  display: block;
  margin: 0 auto 7.5rem auto;
  width: 100%;
  border-radius: var(--roundedEdge);
  z-index: 500; // Search
  transition: width 0.3s ease, top 0.3s ease;
  /* mixin - blueShadowLight */
  box-shadow:
      0 0 5px 0 rgba(49,144,207,0.8),
      0 0 20px 0 rgba(49,144,207,0.6),
      0 0 35px 0 rgba(49,144,207,0.4);
  opacity: 0;
  animation: fadeIn;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;

  @keyframes fadeIn {
    0% {
      transform: scale(0.7);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--blue-3);
    opacity: 0.9;
    backdrop-filter: blur(4px);
  }

  .scrolled & {
    width: 90%;
  }

  &:hover {
    svg path {
      fill: var(--lightBlue);
    }
  }

  button[name=clear] {
    position: absolute;
    display: block;
    width: 3rem;
    height: 3rem;
    background: none;
    outline: none;
    border: none;
    transform-origin: center center;
    transition: transform 0.1s ease;
  }

  button[name=clear]:active {
    transform: scale(0.75);
  }

  button[name=clear]:focus {
    svg path {
      fill: var(--lightBlue);
    }
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 250; // clear search icon
    cursor: pointer;

    path {
      transition: fill 0.3s ease;
    }
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
    transition: background 0.2s ease;

    &::placeholder {
      color: var(--blue-2);
    }

    &:focus {
      background-color: rgba(21,65,140,0.2);
    }
  }

  button[name=search] {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    padding: 0 2.5rem;
    background-color: var(--blue-2);
    color: rgba(255,255,255,0.75);
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
  button[name=search]:focus {
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