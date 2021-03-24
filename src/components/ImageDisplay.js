/* TODO -
* Need to make it so that when you close
* the image display the image animates away
* instead of just disappears
*/

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
    <>
      {image &&
        <AnimatePresence exitBeforeEnter className="image-display">
          <StyledImageDisplay
            key="ImageDisplay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="click-catcher"
            data-js="onHandleClickCatcher"
            onClick={onHandleClickCatcher}
            tabindex="0"
            autoFocus
          >
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={image.src}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="image-wrapper">
                <img
                  src={image.src}
                  alt={image.title}
                  title={image.title}
                />
              </motion.div>
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
              <motion.span
                key={image.title}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.3 }}

                className="image-display__title"
              >
                {image.title}
              </motion.span>
            </AnimatePresence>
            <button onClick={onHandleCloseImage} className="close">X</button>
          </StyledImageDisplay>
        </AnimatePresence>
      }
    </>
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
  backdrop-filter: blur(2px);
  z-index: 1000; // Image Display Modal
  transform-style: preserve-3d;
  perspective: 1000px;

  .image-wrapper {
    background: rgba(49,144,207,0.1);
    animation: imageBackgroundPulse 1s ease alternate;
    animation-iteration-count: infinite;

    /* mixin - blueShadowLight */
    box-shadow:
        0 0 5px 0 rgba(49,144,207,0.8),
        0 0 20px 0 rgba(49,144,207,0.6),
        0 0 35px 0 rgba(49,144,207,0.4);

    /* MOVE TO ANIMATIONS */
    @keyframes imageBackgroundPulse {
      0% {
        background: rgba(49,144,207,0.2);
      }
      100% {
        background: rgba(49,144,207,0.3);
      }
    }
  }

  img {
    display: block;
    max-height: 80vh;
    max-width: 80vw;
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

  .close {
    position: fixed;
    top: 0;
    right: 12px;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 2rem;
    cursor: pointer;
    border: none;
    background: rgba(0,0,0,0);
    color: var(--lightGrey);
    opacity: 0.5;
    transition: opacity 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  }

  .close:hover {
    opacity: 0.8;
    color: var(--white);
    background: rgba(34,34,34,0.8);
  }
`