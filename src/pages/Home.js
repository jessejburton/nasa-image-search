import { useState, useRef, useContext, useEffect } from 'react'
import { useParams } from "react-router-dom";
import styled from 'styled-components'

import { Layout } from '../layout'
import { Loading, Images, Search, ImageDisplay } from '../components'
import { SearchContext } from '../context'

import { useImageSearch } from '../hooks'

export const Home = () => {
  let { term } = useParams();

  const { query, setQuery } = useContext(SearchContext)

  const [page, setPage] = useState(1)

  const { loading, error, images, hasMore } = useImageSearch(query, page)

  const observerRef = useRef()

  function loadMore() {
    setPage(prevPage => prevPage + 1)
  }

  function handleSearch(term) {
    setQuery(term)
    setPage(1)
  }

  useEffect(() => {
    if (!term) {
      setQuery('')
      return
    }
    setQuery(term)
  }, [term, setQuery])

  useEffect(() => {
    if (!observerRef.current) return
    const observer = new IntersectionObserver((entries)=> {
      if (entries[0].isIntersecting) {
        setPage(prevPage => prevPage + 1)
      }
    })
    observer.observe(observerRef.current)
  }, [observerRef])

  return (
    <Layout>
      <Search onUpdate={handleSearch} />
      <Images images={images} />
      <ImageDisplay image={null} />

      <StyledObserver ref={observerRef}>
        {hasMore &&
          <button onClick={loadMore}></button>
        }
      </StyledObserver>

      <Loading isLoading={loading} />
      {error && <div>an error has occurred</div>}
    </Layout>
  )
}

const StyledObserver = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 150px;
  z-index: 400; // Observer

  button {
    cursor: pointer;
    border: none;
    background: none;
    color: inherit;
    font-size: 1.8rem;
    font-weight: 700;
  }
`