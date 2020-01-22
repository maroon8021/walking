import * as React from "react"
import { useState, useEffect } from "react"
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core"
import Calendar from "./calendar"

/* Styles */

const MainArea: React.FC = (): React.ReactElement => {
  return (
    <div css={mainArea}>
      <h3 css={mainAreaHead}>Footprints</h3>
      <div css={mainAreaContents}>
        <Calendar />
      </div>
    </div>
  )
}

export default MainArea
