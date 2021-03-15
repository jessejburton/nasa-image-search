import { useState } from 'react'

import { Footer, Header, Main, Wrapper } from './'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

export const Layout = ({ children }) => {
  const [offset, setOffset] = useState(1)

  useScrollPosition(({ prevPos, currPos }) => {
    setOffset(currPos.y)
  })

  return (
    <Wrapper offset={ offset }>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  )
}
