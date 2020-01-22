import * as React from "react"
import { useState, useEffect } from "react"
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core"

/* Styles */

const Calendar: React.FC = (): React.ReactElement => {
  return (
    <div css={container}>
      <div css={mainAreaContents}></div>
    </div>
  )
}

export default Calendar

const CalendarItem: React.FC = (): React.ReactElement => {
  return (
    <div css={container}>
      <div css={mainAreaContents}></div>
    </div>
  )
}
