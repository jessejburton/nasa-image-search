import styled from 'styled-components'

import { Image } from './'

export const Images = ({ images }) => {
  return (
    <StyledImages className="images">
      {images.map((image, index) => {
        return <Image key={index} src={image} alt="NASA Image" />
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