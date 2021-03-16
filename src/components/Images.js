import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion'

import { Image } from './'

export const Images = ({ images, lastImageRef }) => {
  return (
    <StyledImages className="images">
      <AnimatePresence onExitComplete={true}>
        {images.map((image, index) => {
          if (images.length === index + 1) {
            return <Image key={index} src={image} alt="NASA Image" forwardRef={lastImageRef} />
          }
          return <Image key={index} src={image} alt="NASA Image" />
        })}
      </AnimatePresence>
    </StyledImages>
  )
}

const StyledImages = styled.div`
  padding-bottom: 5rem;
`