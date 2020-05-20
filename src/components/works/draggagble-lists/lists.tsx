import * as React from "react"
import { FC, ReactElement, useState, Dispatch } from "react"
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core"
import {
  ActionType,
  setDraggingList,
  changeOrder,
  finishDraggingList,
} from "./reducers"

const listStyle = css`
  padding: 0.8rem;
  border: 1px solid #7f7f7f;
  border-radius: 5px;
  margin-bottom: 0.4rem;
  cursor: grab;
`
const draggingAnimation = keyframes`
  0% {
    border: 1px solid #ff6a00;
  }
  100% {
    border: 1px solid #C0C0C0;
    
  }
`

const listDraggingStyle = css`
  ${listStyle}
  animation: ${draggingAnimation} 0.5s ease 0s 1 normal forwards running;
`

type List = {
  title: string
  dispatch: Dispatch<ActionType>
}

export const List: FC<List> = ({ title, dispatch }): ReactElement => {
  const [isDragging, setDragging] = useState(false)
  const onDragStart = () => {
    setDragging(true)
    dispatch(setDraggingList(title))
  }
  const onDragOver = () => {
    dispatch(changeOrder(title))
  }
  const onDragEnd = () => {
    setDragging(false)
    dispatch(finishDraggingList())
  }
  return (
    <div
      css={isDragging ? listDraggingStyle : listStyle}
      draggable={true}
      onDragStart={onDragStart}
      onDragEnter={onDragOver}
      onDragEnd={onDragEnd}
    >
      {title}
    </div>
  )
}
