import * as React from "react"
import { useState, useEffect } from "react"
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core"

import footprintRight from "@s/images/footprint-right.png"
import Logo from "@s/components/top/logo"

const footprintAlt = "footprint"

/* Styles */
const mvMain = css`
  width: 100%;
  height: 60vh;
`

const loopAnimation = keyframes`
0%{
  opacity: 0
}
40%{
  opacity: 1
}
80%{
  opacity: 0
}
100%{
  opacity:0
}
`

const foots = css`
  position: relative;
`
const footBase = css`
  position: absolute;
  width: 60px;
  transform: rotate(180deg);
  opacity: 0;
  animation: ${loopAnimation} 7s ease normal infinite;
`
const footLeftBase = css`
  ${footBase}
  left: 46%;
`
const footRightBase = css`
  ${footBase}
  right: 46%;
  transform: scale(1, -1);
`

const foot1 = css`
  ${footLeftBase}
  animation-delay: 4s;
`
const foot2 = css`
  top: 80px;
  ${footRightBase}
  animation-delay: 5s;
`
const foot3 = css`
  top: 160px;
  ${footLeftBase}
  animation-delay: 6s;
`
const foot4 = css`
  top: 240px;
  ${footRightBase}
  animation-delay: 7s;
`

const MV: React.FC = (): React.ReactElement => {
  return (
    <div css={mvMain}>
      <Logo />
      <div css={foots}>
        <img src={footprintRight} css={foot1} alt={footprintAlt} />
        <img src={footprintRight} css={foot2} alt={footprintAlt} />
        <img src={footprintRight} css={foot3} alt={footprintAlt} />
        <img src={footprintRight} css={foot4} alt={footprintAlt} />
      </div>
    </div>
  )
}

export default MV
