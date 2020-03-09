import * as React from "react"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

const container = css`
  width: 300px;
  background-color: #fff;
`

const FacetedNavigation: React.FC = ({ children }): React.ReactElement => {
  return <div css={container}>{children}</div>
}

export default FacetedNavigation
