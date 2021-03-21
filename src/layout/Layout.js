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


  useEffect(() => {
    let classNames = []
    classNames[0] = offset !== 0 ? 'scrolled' : 'unscrolled'
    classNames[1] = motionEnabled ? 'motion-enabled' : 'motion-disabled'
    setReducedClassNames(classNames.join(' '))
    document.body.dataset.y = offset

    if (motionEnabled) {
      document.body.classList.add("motion-enabled")
    } else {
      document.body.classList.remove("motion-enabled")
    }
  }, [offset, motionEnabled])


  return (
    <Wrapper offset={offset} className={reducedClassNames}>
      <Header />
      <Main>{children}</Main>
      <Footer setMotionEnabled={setMotionEnabled} />
    </Wrapper>
  )
}
