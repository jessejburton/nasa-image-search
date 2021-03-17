import { useContext } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

import { ImageDisplayContext, AccessibilityContext } from '../context'

export const Image = ({ src, alt, ...rest }) => {

  const { isAnimations } = useContext(AccessibilityContext)
  const { setImage } = useContext(ImageDisplayContext)

  function onHandleImageClick() {
    setImage({ src, alt })
  }

  const variants = {
    'hidden': { opacity: 0, y: 30 },
    'visible': { opacity: 1, y: 0 }
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <StyledImage
        className="image"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={isAnimations ? variants : null}
        onClick={onHandleImageClick}
        {...rest}
      >
        <img src={src} alt={alt} />
      </StyledImage>
    </AnimatePresence>
  )
}

const StyledImage = styled(motion.div)`
  position: relative;
  transition: transform var(--imageHoverSpeed) var(--imageHoverCurve);

  img {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--roundedEdge);
    filter: grayscale(0.75);
    cursor: pointer;
    transition: filter var(--imageHoverSpeed) var(--imageHoverCurve);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* mixin - blueShadowLight */
    box-shadow:
        0 0 5px 0 rgba(49,144,207,0.8),
        0 0 20px 0 rgba(49,144,207,0.6),
        0 0 35px 0 rgba(49,144,207,0.4);
    opacity: 0;
    transition: opacity var(--imageHoverSpeed) var(--imageHoverCurve);
  }

  &:hover {
    transform: scale(1.1)!important;

    img {
      filter: grayscale(0);
    }

    &::before {
      opacity: 1;
    }
  }
`