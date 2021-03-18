import { useRef, useLayoutEffect } from 'react'

export function useScrollManager() {

  const speed = useRef(0)
  const direction = useRef(1)

  function handleScroll(e) {
    e.preventDefault()
    direction.current = e.wheelDeltaY < 0 ? 1 : -1
    speed.current += Math.abs(e.wheelDeltaY) * 0.2
    speed.current = Math.min(speed.current, 200)
  }

  /* TODO - Move to utility */
  function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end
  }

  useLayoutEffect(() => {
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

    // modern Chrome requires { passive: false } when adding event
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
