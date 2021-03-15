import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Image = ({ url, alt }) => {
  return (
    <StyledImage
      className="image"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
    >
      <img src={url} alt={alt} />
    </StyledImage>
  )
}

const StyledImage = styled(motion.div)`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--roundedEdge);
    display: block;
    filter: grayscale(0.75);
    cursor: pointer;
    transition: transform 0.3s ease, filter 0.3s ease;

    &:hover {
      transform: scale(1.1);
      filter: grayscale(0);
    }
  }
`