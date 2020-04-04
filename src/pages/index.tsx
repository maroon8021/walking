import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core"
import axios from "axios"
import Layout from "@s/components/common/layout"
import SEO from "@s/components/common/seo"
import MV from "@s/components/top/mv"
import MainArea from "@s/components/top/main-area"

/* Styles */

const IndexPage: React.FC = (): React.ReactElement => {
  return (
    <Layout>
      <SEO title="Home" lang="ja">
        <meta name="robots" content="noindex" />
      </SEO>
      <MV />
      <MainArea />
    </Layout>
  )
}

export default IndexPage
