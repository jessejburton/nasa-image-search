import styled from 'styled-components'

export const About = () => {
  return (
    <>
      <StyledAbout>
        <h1>NASA Image Search</h1>
        <p className="highlight">
          This site uses the <a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer nofollow">NASA Image and Video API</a> to provide an interface for users to search for images.
        </p>
        <p>
          This source code for this site is available on <a href="https://github.com/jessejburton/nasa-image-search" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.
        </p>
        <p>

        </p>
      </StyledAbout>
    </>
  )
}

const StyledAbout = styled.div`
  padding-top: 6rem;
  max-width: 40ch;
  margin: 0 auto;

  h1 {
    margin-bottom: 4rem;
  }

  p.highlight {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  a {
    position: relative;
    display: inline-block;
    color: var(--lightBlue);
    font-weight: 700;
    text-decoration: none;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: var(--lightBlue);
      transition: transform 0.2s ease-out;
    }

    &:hover::before {
      transform: translateY(-3px);
    }
  }
`