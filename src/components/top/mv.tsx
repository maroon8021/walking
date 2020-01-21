import * as React from "react"
import { useState, useEffect } from "react"
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core"

import footprintLeft from "@s/images/footprint-left.png"
import footprintRight from "@s/images/footprint-right.png"

/* Styles */
const mv = css`
  width: 100%;
  height: 100vh;
  display: flex;
`

const leftArea = css`
  padding-top: 70vh;
  width: 40%;
`

const title = css`
  text-align: center;
  font-size: 7.2rem;
`

const rightArea = css`
  width: 60%;
  position: relative;
`

const footprintBase = css`
  position: absolute;
  transform: rotate(35deg);
  transition: opacity 1s ease 0s;
`

const leftBottom = css`
  ${footprintBase}
  bottom: 20px;
  left: 0px;
`

const rightBottom = css`
  ${footprintBase}
  transition-delay: 500ms;
  bottom: 20px;
  right: 0px;
`

const leftTop = css`
  ${footprintBase}
  transition-delay: 1000ms;
  top: 20px;
  left: 20px;
`

const rightTop = css`
  ${footprintBase}
  transition-delay: 1500ms;
  top: 20px;
  right: -20px;
`
const img = css`
  width: 75%;
  margin: 0 auto;
  display: block;
`

const hidden = css`
  opacity: 0;
`

const footprintAlt = "footprint"
const wrapperCss = [leftBottom, rightBottom, leftTop, rightTop]

interface MVProps {
  isRendered: boolean
}

const MV: React.FC<MVProps> = ({ isRendered = false }): React.ReactElement => {
  return (
    <div css={mv}>
      <div css={leftArea}>
        <h2 css={title}>Walking</h2>
      </div>
      <div css={rightArea}>
        {wrapperCss.map((targetCss, index) => {
          const isEvenOrZero = index === 0 || index % 2 === 0
          return (
            <div css={isRendered ? targetCss : hidden} key={index}>
              <img
                src={isEvenOrZero ? footprintLeft : footprintRight}
                css={img}
                alt={footprintAlt}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MV
