import * as React from "react"
/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import WalkingLogo from "@s/assets/common/warking-logo.inline.svg"
import "@s/styles/logo.css"

const container = css`
  width: 300px;
  margin: 40vh auto 0;
`

const Logo: React.FC = (): React.ReactElement => {
  return (
    <div css={container}>
      <WalkingLogo />
    </div>
  )
}

export default Logo
