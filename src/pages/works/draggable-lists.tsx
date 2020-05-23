import * as React from "react"
import { FC, ReactElement } from "react"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import SEO from "@s/components/common/seo"
import WorksLayout from "@s/components/common/works-layout"
import { HEADER_COLOR_TYPE } from "@s/components/common/header"
import { BREAKPOINTS } from "@s/components/common/style-util"
import { DraggableLists } from "@s/components/works/draggagble-lists/draggable-lists"
import {
  StateType,
  reducer,
} from "@s/components/works/draggagble-lists/reducers"
import { LogViewer } from "@s/components/works/draggagble-lists/log-viewer"
import DraggableListsImage from "@s/images/draggable-lists.png"

const mainArea = css`
  max-width: 600px;
  margin: 0 auto;
  padding-top: 50px;
  ${BREAKPOINTS.SM} {
    max-width: 300px;
  }
`

const head3 = css`
  font-size: 2rem;
  margin-top: 3.2rem;
`

const lists = ["test 1", "test 2", "test 3", "test 4", "test 5"]

const DraggableListsPage: FC = (): ReactElement => {
  const initialState: StateType = {
    lists,
    positionLists: [],
    draggingList: "",
    isDragging: false,
  }
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <WorksLayout
      subTitle={"Draggable Lists"}
      HeaderColorType={HEADER_COLOR_TYPE.WHITE}
    >
      <SEO title="Works:DraggableLists" image={DraggableListsImage}>
        <meta name="robots" content="noindex" />
      </SEO>
      <div css={mainArea}>
        <DraggableLists lists={state.lists} dispatch={dispatch} />
        <h3 css={head3}>Result</h3>
        <LogViewer lists={state.lists} isDragging={state.isDragging} />
      </div>
    </WorksLayout>
  )
}

export default DraggableListsPage
