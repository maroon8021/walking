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

// interface CalendarRowData {
//   rowData: Array<CalendarItemData>
//   [index: number]: CalendarItemData
// }

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CalendarRowData extends Array<CalendarItemData> {
  rowData: CalendarItemData[]
}

interface CalendarData {
  calendarData: CalendarRowData[]
}

const Calendar: React.FC<CalendarData> = ({
  calendarData,
}): React.ReactElement => {
  return (
    <div css={container}>
      {calendarData.map((rowData: CalendarItemData[], index) => (
        <CalendarRow key={index} rowData={rowData} />
      ))}
    </div>
  )
}

export default Calendar

const CalendarRow: React.FC<CalendarRowData> = ({
  rowData,
}: {
  rowData: CalendarItemData[]
}): React.ReactElement => {
  return (
    <div css={row}>
      {rowData.map(itemData, index => (
        <CalendarItem key={index} itemData={itemData} />
      ))}
    </div>
  )
}

const CalendarItem: React.FC<CalendarItemData> = ({
  itemData,
}): React.ReactElement => {
  const { title, imgPath } = itemData
  return (
    <div css={itemContainer}>
      <div css={itemImgBlock}>
        <img src={imgPath} alt={title} />
      </div>
      <div css={itemTitleBlock}>
        <h4 css={itemTitle}>{title}</h4>
      </div>
    </div>
  )
}
