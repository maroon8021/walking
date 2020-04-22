import * as React from "react"
import Main from "@s/components/works/faceted-navigation/common/main"
import { Provider } from "@s/components/works/faceted-navigation/context"
import SEO from "@s/components/common/seo"
import FacetedNavigationImage from "@s/images/faceted-navigation.png"

const FacetedNavigationPage: React.FC = (): React.ReactElement => {
  return (
    <Provider>
      <SEO title="Works:FacetedNavigation" image={FacetedNavigationImage}>
        <meta name="robots" content="noindex" />
      </SEO>
      <Main />
    </Provider>
  )
}

export default FacetedNavigationPage
