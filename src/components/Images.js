import styled from 'styled-components'

export const Images = ({ images, lastImageRef }) => {
  return (
    <StyledImages>
      {images.map((image, index) => {
        if(images.length === index + 1){
          return <div key={ index } ref={ lastImageRef }>{ image }</div>
        }
        return <div key={ index }>{ image }</div>
      })}
    </StyledImages>
  )
}

const StyledImages = styled.div`

`