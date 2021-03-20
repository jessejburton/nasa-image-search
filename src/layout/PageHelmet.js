import { Helmet } from 'react-helmet'

import logo from '../images/nasa_logo.png'

const defaults = {
  title: 'NASA Image Search',
  description: 'A search tool built with React to retreive data from the NASA Image Library API.',
  ogTitle: 'NASA Image Search',
  ogImage: logo
}

export const PageHelmet = ({
  title = defaults.title,
  description = defaults.description,
  ogTitle = defaults.ogTitle,
  ogImage = defaults.ogImage
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charset="UTF-8" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={defaults.description} />
    </Helmet>
  )
}
