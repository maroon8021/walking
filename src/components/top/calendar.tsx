import * as React from "react"
import { useState, useEffect } from "react"
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core"

/* Styles */
const container = css`
  padding: 0 0.8rem;
`

interface CalendarItemData {
  title: string
  imgPath: string
}

interface CalendarRowData {
  [index: number]: CalendarItemData
}

interface CalendarData {
  [index: number]: CalendarRowData
}

const Calendar: React.FC = (): React.ReactElement => {
  return (
    <div css={container}>
      {}
      <div css={row}></div>
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
