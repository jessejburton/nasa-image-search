/*
* Use Scroll Manager
* Used to overide the default scroll behavior and provide a smoother
* experience.
*
* Currently working on this, there are some issues with mobile which
* has smooth scroll already so I am working on disabling it for smaller
* screen sizes.
*
* IDEA: perhaps this could be expanded to include Intersection Observers
*/
import { useRef, useLayoutEffect } from 'react'


export function useScrollManager() {

  const speed = useRef(0)
  const direction = useRef(1)


  function handleScroll(e) {
    e.preventDefault()
    /*
      Would like to change this to use prev and current positions instead of Wheel   Delta since it isn't fully reliable and causes double negatives when trying
      to multiply direction
    */
    direction.current = e.wheelDeltaY < 0 ? 1 : -1
    speed.current += Math.abs(e.wheelDeltaY) * 0.2
    speed.current = Math.min(speed.current, 200)
  }

  /* TODO - Move to utility */
  function lerp(start, end, amt) {
    return start * (1 - amt) + end * amt
  }


  useLayoutEffect(() => {
    if (window.innerWidth < 975) return

    function tick() {
      speed.current = lerp(speed.current, 0, 0.2)
      if (speed.current < 0.5) speed.current = 0
      setTimeout(() => {
        if (speed) {
          const nextScrollY = window.scrollY + (speed.current * direction.current)
          window.scrollTo(0, nextScrollY)
        }
        window.requestAnimationFrame(tick)
      }, 60)
    }
    tick()

    // Modern Chrome requires { passive: false } when adding event
    var supportsPassive = false;
    try {
      window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
      }));
    } catch (e) { }

    var wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    window.addEventListener(wheelEvent, handleScroll, wheelOpt); // modern desktop

    return () => window.removeEventListener(wheelEvent, handleScroll, wheelOpt);
  }, [])
}
