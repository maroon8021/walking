import * as React from "react"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

const container = css`
  width: 300px;
  background-color: #fff;
  height: calc(100vh - 6rem);
  overflow-y: scroll;
  position: fixed;
`

const FacetedNavigation: React.FC = ({ children }): React.ReactElement => {
  return <div css={container}>{children}</div>
}

export default FacetedNavigation
