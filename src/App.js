
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, About } from './pages'
import { ImageDisplayContext } from './context/ImageDisplayContext'

function App() {
  const [image, setImage] = useState(null)

  return (
    <Router>
      <ImageDisplayContext.Provider value={{ image, setImage }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search/:term" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </ImageDisplayContext.Provider>
    </Router>
  );
}

export default App;
