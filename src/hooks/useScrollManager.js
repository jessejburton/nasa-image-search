import { useEffect } from 'react'

export function useScrollManager() {

  function handleScroll(e) {
    if (window.scrollY > 0) {
      document.body.classList.add("scrolled")
    } else {
      document.body.classList.remove("scrolled")
    }
  }

  useEffect(() => {
    if (window.innerWidth < 975) return

    // Modern Chrome requires { passive: false } when adding event
    var supportsPassive = false;
    try {
      window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: () => supportsPassive = true
      }));
    } catch (e) { }

    var wheelOpt = supportsPassive ? { passive: false } : false;

    window.addEventListener("scroll", handleScroll, wheelOpt); // modern desktop

    return () => window.removeEventListener("scroll", handleScroll, wheelOpt);
  }, [])

}

