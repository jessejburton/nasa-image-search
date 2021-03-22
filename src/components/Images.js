import styled from 'styled-components'

import { ImageSingle } from './'


export const Images = ({ images }) => {

  return (
    <StyledImages className="images" data-js="scrollspeed">
      {images.map((image, index) => {
        return <ImageSingle
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