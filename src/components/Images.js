import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion'

import { Image } from './'

export const Images = ({ images, lastImageRef }) => {
  return (
    <StyledImages className="images">
      <AnimatePresence onExitComplete={true}>
        {images.map((image, index) => {
          if(images.length === index + 1){
            return <Image key={ index } url={ image } alt="test" forwardRef={ lastImageRef } />
          }
          return <Image key={ index } url={ image } alt="test" />
        })}
      </AnimatePresence>
    </StyledImages>
  )
}

const StyledImages = styled.div`
  padding-bottom: 5rem;
`