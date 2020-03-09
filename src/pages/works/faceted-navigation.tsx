import * as React from "react"
import { useContext } from "react"
import Header from "@s/components/works/faceted-navigation/common/header"

/** @jsx jsx */
import { css, jsx, Global } from "@emotion/core"
import reset from "@s/styles/reset"
import FacetedNavigation from "@s/components/works/faceted-navigation/faceted-elements/faceted-navigation"
import List from "@s/components/works/faceted-navigation/common/lists"
import Checkboxes, {
  CheckboxData,
} from "@s/components/works/faceted-navigation/faceted-elements/parts/checkboxes"
import FilterContext, {
  FilterProvider,
} from "@s/components/works/faceted-navigation/context"

const pageStyle = css`
  ${reset}
  body {
    background-color: #efefef;
  }
`

const mainArea = css`
  display: flex;
`

const leftArea = css``
const rightArea = css``

const rawTestData: CheckboxData[] = [
  {
    id: 1,
    value: 1,
    text: "testtest",
  },
  {
    id: 2,
    value: 2,
    text: "testtest2",
  },
  {
    id: 3,
    value: 3,
    text: "testtest3",
  },
]

const rawTestData2: CheckboxData[] = [
  {
    id: 4,
    value: 4,
    text: "testtest4",
  },
  {
    id: 5,
    value: 5,
    text: "testtest5",
  },
  {
    id: 6,
    value: 6,
    text: "testtest6",
  },
]

const testData = {
  groupName: "Test1",
  checkboxesData: rawTestData,
}

const testData2 = {
  groupName: "Test2",
  checkboxesData: rawTestData2,
}

const checkboxes = [testData, testData2]

const FacetedNavigationPage: React.FC = (): React.ReactElement => {
  const context = useContext(FilterContext)
  return (
    <div>
      <FilterProvider value={checkboxes}>
        <Global styles={pageStyle} />
        <Header />
        <div css={mainArea}>
          <div css={leftArea}>
            <FacetedNavigation>
              <Checkboxes groupName={"test"} checkboxesData={rawTestData} />
              <Checkboxes groupName={"test2"} checkboxesData={rawTestData} />
            </FacetedNavigation>
          </div>
          <div css={rightArea}>
            <List />
          </div>
        </div>
      </FilterProvider>
    </div>
  )
}

export default FacetedNavigationPage
