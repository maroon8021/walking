import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core"
import axios from "axios"
import Layout from "@s/components/common/layout"
import SEO from "@s/components/common/seo"
import MV from "@s/components/top/mv"

/* Styles */
// const blueColor = "#209cee"
// const blackColor = "#363636"

// const section = css({
//   padding: "3rem 1.5rem",
//   maxWidth: "1200px",
//   margin: "0 auto",
// })

const IndexPage: React.FC = (): React.ReactElement => {
  const [isRendered, setRendered] = useState<boolean>(false)

  useEffect(() => {
    setRendered(!isRendered)
  }, [])

  return (
    <Layout>
      <SEO title="Home" lang="ja">
        <meta name="robots" content="noindex" />
      </SEO>
      <MV isRendered={isRendered} />
    </Layout>
  )
}

export default IndexPage
