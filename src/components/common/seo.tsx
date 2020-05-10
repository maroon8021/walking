import * as React from "react"
import { FC } from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type SECProps = {
  title: string
  image: string
}

const SEO: FC<SECProps> = ({ title, children, image }) => {
  const lang = "ja"

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            defaultImage: image
          }
        }
      }
    `
  )

  const metaDescription = site.siteMetadata.description
  const metaImage = image || site.siteMetadata.defaultImage
  console.log(metaImage)
  console.log(image)
  const fullTitle = `${site.siteMetadata.title} - ${title}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap"
        rel="stylesheet"
      />
      <meta name="description" content={metaDescription} />
      <meta name="image" content={metaImage} />

      <meta name="og:title" content={fullTitle} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:image" content={metaImage} />
      <meta name="og:type" content={"website"} />
      <meta name="og:locale" content={"ja_JP"} />

      <meta name="twitter:card" content={"summary"} />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {children}
    </Helmet>
  )
}

export default SEO
