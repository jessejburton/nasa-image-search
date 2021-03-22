import { useContext } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

import { ImageDisplayContext } from '../context/ImageDisplayContext'


export const ImageDisplay = () => {

  const { image, setImage } = useContext(ImageDisplayContext)


  function onHandleClickCatcher(event) {
    const target = document.elementFromPoint(event.clientX, event.clientY)
    if (target.classList.contains("click-catcher")) {
      onHandleCloseImage(null)
    }
  }

  function onHandleCloseImage() {
    setImage(null)
  }


  return (
    <AnimatePresence exitBeforeEnter className="image-display">
      {image &&
        <StyledImageDisplay
          key="ImageDisplay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="click-catcher"
          data-js="onHandleClickCatcher"
          onClick={onHandleClickCatcher}
          tabindex="0"
          autoFocus
        >
          <AnimatePresence exitBeforeEnter>
            <motion.img
              key={image.src}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              src={image.src}
              alt={image.title}
              title={image.title}
            />
          </AnimatePresence>
          <AnimatePresence exitBeforeEnter>
            <motion.span
              key={image.title}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              className="image-display__title"
            >
              {image.title}
            </motion.span>
          </AnimatePresence>
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
  transform-style: preserve-3d;
  perspective: 1000px;

  img {
    max-width: 80vw;
    /* mixin - blueShadowLight */
    box-shadow:
        0 0 5px 0 rgba(49,144,207,0.8),
        0 0 20px 0 rgba(49,144,207,0.6),
        0 0 35px 0 rgba(49,144,207,0.4);
  }

  span {
    position: absolute;
    display: block;
    right: 0;
    bottom: 0;
    width: 60%;
    padding: 5rem;
    font-size: 6rem;
    text-align: right;
    text-transform: uppercase;
    text-shadow:
      0 0 12px rgba(0,0,0,0.8);
  }
`