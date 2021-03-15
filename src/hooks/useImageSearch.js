import { useEffect, useState } from 'react'
import axios from 'axios'

export const useImageSearch = ( query, page, type = 'image' ) => {
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState(false)
  const [ images, setImages ] = useState([])
  const [ hasMore, setHasMore ] = useState(false)

  useEffect(() => {
    setImages([])
  }, [query])

  useEffect(() => {
    if(query.length === 0) return
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: `https://images-api.nasa.gov/search`,
      params: { q: query, page: page, media_type: type },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      console.log(res)
      setImages(prevImages => {
        return [...new Set([...prevImages, ...res.data.collection.items.map(i => i.href)])]
      })
      setHasMore(res.data.collection.items.length > 0)
      setLoading(false)
    }).catch(e => {
      if(axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [query, page])

  return { loading, error, images, hasMore }
}
