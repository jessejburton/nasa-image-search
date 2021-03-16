
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, About } from './pages'
import { AccessibilityContext, ImageDisplayContext, SearchContext } from './context'

function App() {
  const [image, setImage] = useState(null)
  const [query, setQuery] = useState('')
  const [isAnimations, setIsAnimations] = useState(false)

  /* Disable animations for mobile */
  useEffect(()=> {
    if(window.screen.width > 975){
      setIsAnimations(true)
    }
  },[])

  return (
    <Router>
      <AccessibilityContext.Provider value={{ isAnimations, setIsAnimations }}>
      <SearchContext.Provider value={{ query, setQuery }}>
      <ImageDisplayContext.Provider value={{ image, setImage }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Home} />
          <Route path="/search/:term" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </ImageDisplayContext.Provider>
      </SearchContext.Provider>
      </AccessibilityContext.Provider>
    </Router>
  );
}

export default App;
