# Nasa Image Search

A create-react-app that uses the [Nasa Image Search API](https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf).

## To Run

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jessejburton/nasa-image-search)

## Locally

Clone or download the repo then in the project directory run:
### `npm install`

To startup in development mode run
### `npm start`

To create a production build run
### `npm build`

# Project Anatomy
## I try to keep my React component structure set up as follows:

// Import statements of node_modules

// Import statements of local files / components

// Import statements for data / queries


// Export const component name - I typically use named exports unless a default makes more sense.

    // State

    // Context
	
    // Refs
	
    // OtherHooks

    // Functions

    // Effects

    // if Loading
    // Return Component

// Export statement (if not above, in the case of default export or if it's being wrapped in a higher
order function //

// StyledComponentName to wrap the compenent if local styles are required. Makes for quick development but I like to move the visual styles to a style sheet and keep the structural ones in the component

### Spacing is Important
I have been trying out using single spaces between grouped information and double spaces between seperate information. So far I like it. Some examples:

```
function sum(a,b) {
  return a + b
}


function addGreeting(name) {
  const greetedName = "Dear, " + name

  return greetedName
}
```

```
import { useState } from 'react'

import { Wrapper } from './layout'


export const Home = ({ children }) =>
{

  const [isToggle, setIsToggle] = useState(true)


  return (
    <Wrapper>
      { children }
    </Wrapper>
  )
}
```
