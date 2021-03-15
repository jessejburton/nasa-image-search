import { useRef, useEffect } from 'react'

export const Observer = ({ onObserve, text }) => {

  const observerRef = useRef()

  return (
    <div ref={ observerRef }>
      { text }
    </div>
  )
}
