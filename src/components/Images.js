import styled from 'styled-components'

import { Image } from './'

export const Images = ({ images }) => {

  return (
    <StyledImages className="images">
      {images.map((image, index) => {
        return <Image
          key={index}
          src={image.src}
          alt={image.title}
          title={image.title}
        />
      })}
    </StyledImages>
  )
}

const StyledImages = styled.div`
  padding-bottom: 5rem;

  .last {
    border: 4px solid red;
  }
`