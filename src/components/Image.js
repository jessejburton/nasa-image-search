import { useContext, useRef } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

import { ImageDisplayContext, AccessibilityContext } from '../context'


export const Image = ({ src, title, ...rest }) => {

  const { isAnimations } = useContext(AccessibilityContext)
  const { setImage } = useContext(ImageDisplayContext)

  const imageRef = useRef()

  function onHandleImageClick() {
    setImage({ src, title })
  }

  function onHandleMouseOver() {
    if (!document.querySelector(".image:focus")) imageRef.current.focus()
  }

  function onHandleKeyDown(e) {
    if (e.keyCode === 9) {
      e.target.blur()
    }
    if (e.keyCode === 13) {
      onHandleImageClick()
    }
  }

  /* Not sure where to keep these yet */
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
        onMouseOver={onHandleMouseOver}
        onKeyDown={onHandleKeyDown}
        tabIndex="0"
        ref={imageRef}
        isAnimations={isAnimations}
        {...rest}
      >
        <img src={src} alt={title} title={title} />
      </StyledImage>
    </AnimatePresence>
  )
}


const StyledImage = styled(motion.div)`
  position: relative;
  outline: 1px solid var(--lighBlue);
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

  &:hover,
  &:focus {
    // cleanup ~ to do with animations
    transform: scale(${props => props.isAnimations ? 1.1 : 1})!important;

    img {
      filter: grayscale(0);
    }

    &::before {
      opacity: 1;
    }
  }
`