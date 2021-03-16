import { useContext } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

import { ImageDisplayContext } from '../context/ImageDisplayContext'

export const ImageDisplay = () => {

  const { image, setImage } = useContext(ImageDisplayContext)

  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 1 },
  }

  function onHandleClickCatcher(event) {
    const target = document.elementFromPoint(event.clientX, event.clientY)
    if (target.classList.contains("click-catcher")) {
      setImage(null)
    }
  }

  return (
    <AnimatePresence exitBeforeEnter="true">
      {image &&
        <StyledImageDisplay
          key="ImageDisplay"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
          className="click-catcher"
          data-js="onHandleClickCatcher"
          onClick={onHandleClickCatcher}
        >
          <img src={image.src} alt={image.alt} />
        </StyledImageDisplay>
      }
    </AnimatePresence>

  )
}

const StyledImageDisplay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.6);
  z-index: 1000; // Image Display Modal

  img {
    max-width: 80vw;
    /* mixin ~ blueShadow */
    box-shadow:
      0 0 5px 0 rgba(21, 65, 140,0.8),
      0 0 20px 0 rgba(21, 65, 140,0.6),
      0 0 35px 0 rgba(21, 65, 140,0.4);
  }
`