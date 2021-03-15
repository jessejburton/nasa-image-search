import { useState, useRef, useCallback } from 'react'
import { Layout } from '../layout'
import { Images } from '../components'

import { useImageSearch } from '../hooks'

export const Home = () => {
  const [ query, setQuery ] = useState('')
  const [ page, setPage ] = useState(1)

  const { loading, error, images, hasMore } = useImageSearch(query, page)

  const observerRef = useRef()
  const lastImageRef = useCallback(checkLoadMore, [loading, hasMore])

  function checkLoadMore(lastImage){
    if(loading) return

    observerRef.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1)
      }
    })
    if(lastImage) observerRef.current.observe(lastImage)
  }

  function handleSearch(e){
    setQuery(e.target.value)
    setPage(1)
  }

  return (
    <Layout>
      <h1>Nasa Image Search</h1>

      <fieldset>
        <label>Search</label>
        <input type="text" value={ query } onChange={ handleSearch } />
      </fieldset>

      <Images images={ images } lastImageRef={ lastImageRef } />

      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}

    </Layout>
  )
}
