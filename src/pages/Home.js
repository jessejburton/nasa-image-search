import { useState, useRef, useCallback } from 'react'

import { Layout } from '../layout'
import { Loading, Images, Search } from '../components'

import { useImageSearch } from '../hooks'

export const Home = () => {
  const [ query, setQuery ] = useState('')
  const [ page, setPage ] = useState(1)

  const { loading, error, images, hasMore } = useImageSearch(query, page)

  const observerRef = useRef()
  const lastImageRef = useCallback(checkLoadMore, [loading, hasMore])

  function checkLoadMore(lastImage){
    if(loading || !hasMore) return

    observerRef.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1)
      }
    })
    if(lastImage) observerRef.current.observe(lastImage)
  }

  function handleSearch(term){
    setQuery(term)
    setPage(1)
  }

  return (
    <Layout>
      <Search term='' onUpdate={ handleSearch } />
      <Images images={ images } lastImageRef={ lastImageRef } />

      {loading && <Loading />}
      {error && <div>an error has occurred</div>}
    </Layout>
  )
}
