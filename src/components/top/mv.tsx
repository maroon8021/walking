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
`

const rightArea = css`
  width: 60%;
  position: relative;
`

const footprintBase = css`
  position: absolute;
  transition: opacity 1s ease 0s;
`

const leftBottom = css`
  ${footprintBase}
  bottom: 20px;
  left: 0px;
`

const rightBottom = css`
  ${footprintBase}
  bottom: 20px;
  right: 0px;
`

const hidden = css`
  opacity: 0;
`

const leftTop = css`
  ${footprintBase}
  top: 20px;
  left: 20px;
`

const rightTop = css`
  ${footprintBase}
  top: 20px;
  right: -20px;
`

const footprintAlt = "footprint"

interface MVProps {
  isRendered: boolean
}

const MV: React.FC<MVProps> = ({ isRendered = false }): React.ReactElement => {
  const [renderingLists, setRendered] = useState<boolean[]>(
    [...Array(4)].map(() => false)
  )

  useEffect(() => {
    if (isRendered) {
      const intervalId = setInterval(() => {
        const isFinished = !renderingLists.includes(false)
        if (isFinished) {
          clearInterval(intervalId)
          return
        }
        let isChanged = false
        console.log("Start animation")
        const newArray = renderingLists.map((bool: boolean): boolean => {
          if (isChanged || bool) {
            return bool
          } else if (!isChanged && !bool) {
            isChanged = true
            return !bool
          }
          return bool
        })
        setRendered(newArray)
      }, 3000)

      return () => clearInterval(intervalId)
    }
  }, [isRendered]) // isRendered

  return (
    <div css={mv}>
      <div css={leftArea}>
        <h2 css={title}>Walking</h2>
      </div>
      <div css={rightArea}>
        <div css={renderingLists[0] ? leftBottom : hidden}>
          <img src={footprintLeft} alt={footprintAlt} />
        </div>
        <div css={renderingLists[1] ? rightBottom : hidden}>
          <img src={footprintRight} alt={footprintAlt} />
        </div>
        <div css={renderingLists[2] ? leftTop : hidden}>
          <img src={footprintLeft} alt={footprintAlt} />
        </div>
        <div css={renderingLists[3] ? rightTop : hidden}>
          <img src={footprintRight} alt={footprintAlt} />
        </div>
      </div>
    </div>
  )
}

export default MV
