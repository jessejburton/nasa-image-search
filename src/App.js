
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from 'framer-motion'

import { Home, About } from './pages'
import { Layout } from './layout'
import {
  ImageDisplayContext,
  SearchContext
} from './context'

function App() {
  const [image, setImage] = useState(null)
  const [query, setQuery] = useState('')
  const [isReducedMotion, setIsReducedMotion] = useState(true)

  /* ENABLE ANIMATIONS ON DESKTOP
  * Animations will be off by default, I am enabling
  * them if the screen is larger than 975px
  */
  useEffect(() => {
    if (window.screen.width > 975) {
      setIsReducedMotion(false)
    }

  }, [])

  return (
    <Router>
      <Layout>
        <SearchContext.Provider value={{ query, setQuery }}>
          <ImageDisplayContext.Provider value={{ image, setImage }}>
            <AnimatePresence exitBeforeEnter>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/search" component={Home} />
                <Route path="/search/:term" component={Home} />
                <Route path="/about" component={About} />
              </Switch>
            </AnimatePresence>
          </ImageDisplayContext.Provider>
        </SearchContext.Provider>
      </Layout>
    </Router>
  );
}

export default App;
