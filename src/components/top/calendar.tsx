// deprecated now
import * as React from "react"
import { useState, useEffect } from "react"
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core"

/* Styles */
const container = css`
  padding: 0 0.8rem;
`

const row = css`
  border: 1px solid #7f7f7f;
  padding: 8px;
  display: flex;
  flex-direction: row;
`

const itemContainer = css`
  border: 1px solid #7f7f7f;
  width: 14%;
`

const itemImgBlock = css``

const itemTitleBlock = css`
  text-align: center;
`

const itemTitle = css``

/* Types */
export type CalendarItemData = {
  title: string
  imgPath: string
}

export type CalendarRowData = CalendarItemData[]

type CalendarItemProps = {
  itemData: CalendarItemData
}

type CalendarRowProps = {
  rowData: CalendarItemData[]
}

type CalendarProps = {
  calendarData: CalendarRowData[]
}

const Calendar: React.FC<CalendarProps> = (props): React.ReactElement => {
  return (
    <div css={container}>
      {props.calendarData.map((rowData: CalendarItemData[], index) => (
        <CalendarRow key={index} rowData={rowData} />
      ))}
    </div>
  )
}

export default Calendar

const CalendarRow: React.FC<CalendarRowProps> = ({
  rowData,
}): React.ReactElement => {
  return (
    <div css={row}>
      {rowData.map((itemData: CalendarItemData, index) => (
        <CalendarItem key={index} itemData={itemData} />
      ))}
    </div>
  )
}

const CalendarItem: React.FC<CalendarItemProps> = ({
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
