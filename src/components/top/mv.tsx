import * as React from "react"
import { useState, useEffect } from "react"
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core"

import footprintRight from "@s/images/footprint-right.png"
import Logo from "@s/components/top/logo"
import { BREAKPOINTS } from "../common/style-util"

const footprintAlt = "footprint"

/* Styles */
const mvMain = css`
  width: 100%;
  height: 60vh;
  ${BREAKPOINTS.SM} {
    margin-bottom: 40px;
  }
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
  ${BREAKPOINTS.MD} {
    left: 41%;
  }
  ${BREAKPOINTS.SM} {
    left: 38%;
  }
`
const footRightBase = css`
  ${footBase}
  right: 46%;
  transform: scale(1, -1);
  ${BREAKPOINTS.MD} {
    right: 43%;
  }
  ${BREAKPOINTS.SM} {
    right: 39%;
  }
`
const baseStepTop = 100
const foot1 = css`
  ${footLeftBase}
  animation-delay: 4s;
`
const foot2 = css`
  top: ${baseStepTop}px;
  ${footRightBase}
  animation-delay: 5s;
`
const foot3 = css`
  top: ${baseStepTop * 2}px;
  ${footLeftBase}
  animation-delay: 6s;
`
const foot4 = css`
  top: ${baseStepTop * 3}px;
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
