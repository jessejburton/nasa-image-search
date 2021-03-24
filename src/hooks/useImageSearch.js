/*
* Use Image Search
* Hook used for fetchiing images from the NASA API
* Automatically gets new data whenever the page parameter
* is changed.
*/
import { useEffect, useState } from 'react'
import axios from 'axios'


export const useImageSearch = (query, page, type = 'image') => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [images, setImages] = useState([])
  const [hasMore, setHasMore] = useState(false)


  useEffect(() => {
    setImages([])
  }, [query])


  useEffect(() => {
    if (query.length === 0) return
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: `https://picsum.photos/v2/list`,
    }).then(res => {
      setImages(prevImages => {
        return [...new Set([...prevImages, ...res.data.map(i => ({
          src: i.download_url,
          title: i.author
        }))])]
      })
      setHasMore(true)
      setLoading(false)
    }).catch(error => {
      if (axios.isCancel(error)) return
      console.error(error)
      setError(true)
    })
    //return () => cancel()
  }, [query])


  /* NASA Image search is currently down
  useEffect(() => {
    if (query.length === 0) return
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: `https://images-api.nasa.gov/search`,
      params: { q: query, page: page, media_type: type },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setImages(prevImages => {
        return [...new Set([...prevImages, ...res.data.collection.items.map(i => ({
          src: i.links[0].href,
          title: i.data[0].title
        }))])]
      })
      setHasMore(res.data.collection.items.length > 0)
      setLoading(false)
    }).catch(error => {
      if (axios.isCancel(error)) return
      console.error(error)
      setError(true)
    })
    return () => cancel()
  }, [query, page, type])
  */

  return { loading, error, images, hasMore }
}
