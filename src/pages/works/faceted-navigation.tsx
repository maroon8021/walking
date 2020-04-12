import * as React from "react"
import { useContext, useEffect, useState } from "react"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import Main from "@s/components/works/faceted-navigation/common/main"
import { Provider } from "@s/components/works/faceted-navigation/context"
import SEO from "@s/components/common/seo"

const FacetedNavigationPage: React.FC = (): React.ReactElement => {
  return (
    <Provider>
      <SEO title="Works:FacetedNavigation" lang="ja">
        <meta name="robots" content="noindex" />
      </SEO>
      <Main />
    </Provider>
  )
}

export default FacetedNavigationPage
