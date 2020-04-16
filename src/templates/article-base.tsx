import * as React from "react"
import { graphql } from "gatsby"
/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import WorksLayout from "@s/components/common/works-layout"
import { HEADER_COLOR_TYPE } from "@s/components/common/header"
import SEO from "@s/components/common/seo"

import "github-markdown-css"

const section = css`
  padding: 3rem 1.5rem;
  max-width: 760px;
  margin: 0 auto;

  & article {
    & img {
      box-shadow: 6px 9px 35px -8px rgba(0, 0, 0, 0.34);
    }
  }
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { html, frontmatter } = markdownRemark
  return (
    <WorksLayout
      subTitle={"Faceted Navigation"}
      HeaderColorType={HEADER_COLOR_TYPE.WHITE}
    >
      <SEO title={frontmatter.title} lang="ja">
        <meta name="robots" content="noindex" />
      </SEO>
      <div css={section}>
        <article
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </WorksLayout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
