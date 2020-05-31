import * as React from "react"
import { FC, ReactElement, useState, Dispatch, useRef, useEffect } from "react"
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core"
import {
  ActionType,
  setDraggingList,
  changeOrder,
  finishDraggingList,
  setPositionList,
  movePosition,
} from "./reducers"

const listStyle = css`
  padding: 0.8rem;
  border: 1px solid #7f7f7f;
  border-radius: 5px;
  margin-bottom: 0.4rem;
  cursor: grab;
  touch-action: none;
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

const targetId = "dragging-list"

export const List: FC<List> = ({ title, dispatch }): ReactElement => {
  const [isDragging, setDragging] = useState(false)
  const listElement = useRef<HTMLDivElement>(null)

  const onDragStart = (): void => {
    setDragging(true)
    dispatch(setDraggingList(title))
  }
  const onDragOver = (): void => {
    dispatch(changeOrder(title))
  }
  const onDragEnd = (): void => {
    setDragging(false)
    dispatch(finishDraggingList())
  }

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    const { pageX, pageY } = e.changedTouches[0]
    if (listElement.current !== null) {
      const clone = listElement.current.cloneNode() as HTMLDivElement
      const width = listElement.current.clientWidth
      console.log(listElement.current.style)
      clone.id = targetId
      clone.innerText = listElement.current.innerText
      clone.setAttribute(
        "style",
        `position: absolute; opacity: 0.5; top: ${pageY}px; left: ${pageX}px; width: ${width}px;`
      )
      document.body.appendChild(clone)
      dispatch(setDraggingList(title))

      e.preventDefault()
    }
  }

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
    const { pageX, pageY } = e.changedTouches[0]
    const clone = document.getElementById(targetId)
    if (clone) {
      clone.setAttribute(
        "style",
        `position: absolute; opacity: 0.5; top: ${pageY}px; left: ${pageX}px; width: ${clone.style.width};`
      )
      dispatch(movePosition(pageY))
    }
  }

  const onTouchEnd = (): void => {
    const clone = document.getElementById(targetId)
    clone && clone.remove()
    dispatch(finishDraggingList())
  }

  const onContextMenu = (e: React.SyntheticEvent<HTMLDivElement>): void => {
    e.preventDefault()
  }

  useEffect(() => {
    if (listElement.current !== null) {
      const clientRect = listElement.current.getBoundingClientRect()
      const height = listElement.current.clientHeight
      dispatch(
        setPositionList({
          top: clientRect.top,
          bottom: clientRect.top + height,
        })
      )
    }
  }, [])

  return (
    <div
      css={isDragging ? listDraggingStyle : listStyle}
      draggable={true}
      onDragStart={onDragStart}
      onDragEnter={onDragOver}
      onDragEnd={onDragEnd}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onContextMenu={onContextMenu}
      ref={listElement}
    >
      {title}
    </div>
  )
}
