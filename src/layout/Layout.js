import { useState, useEffect } from 'react'

import { Footer, Header, Main, Wrapper } from './'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

export const Layout = ({ children }) => {
  const [offset, setOffset] = useState(0)
  const [motionEnabled, setMotionEnabled] = useState(false)
  const [reducedClassNames, setReducedClassNames] = useState('')

  useScrollPosition(({ prevPos, currPos }) => {
    setOffset(currPos.y)
  })

  function reduceClassNames() {
    let classNames = []
    classNames[0] = offset !== 0 ? 'scrolled' : 'unscrolled'
    classNames[1] = motionEnabled ? 'motion-enabled' : 'motion-disabled'
    return classNames.join(' ')
  }

  useEffect(() => {
    setReducedClassNames(reduceClassNames())
  }, [offset, motionEnabled])

  return (
    <Wrapper offset={offset} className={reducedClassNames}>
      <Header />
      <Main>{children}</Main>
      <Footer setMotionEnabled={setMotionEnabled} />
    </Wrapper>
  )
}
