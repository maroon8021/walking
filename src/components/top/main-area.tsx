import * as React from "react"
import { useState, useEffect } from "react"
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core"
import Calendar, { CalendarRowData, CalendarItemData } from "./calendar"
import tempImg from "@s/images/footprint-left.png"

/* Styles */
const mainArea = css`
  padding: 0 1.6rem;
`
const mainAreaHead = css`
  padding: 0.8rem;
`

const mainAreaContents = css`
  padding: 0.8rem;
`

const item: CalendarItemData = {
  title: "test",
  imgPath: tempImg,
}

const rowData: CalendarRowData = [...Array(7)].map(_ => item)

const data: CalendarRowData[] = [rowData, rowData, rowData, rowData]

const MainArea: React.FC = (): React.ReactElement => {
  return (
    <div css={mainArea}>
      <h3 css={mainAreaHead}>Footprints</h3>
      <div css={mainAreaContents}>
        <Calendar calendarData={data} />
      </div>
    </div>
  )
}

export default MainArea
