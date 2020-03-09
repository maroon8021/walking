import * as React from "react"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

const header = css`
  padding: 20px;
  background-color: #000;
  color: #fff;
  font-size: 20px;
`

const Header: React.FC = (): React.ReactElement => {
  return <header css={header}>Faceted Navigation</header>
}

export default Header
