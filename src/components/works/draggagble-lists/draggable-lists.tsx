import * as React from "react"
import { FC, ReactElement, Dispatch } from "react"
/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { List } from "./lists"
import { ActionType } from "./reducers"

const container = css`
  width: 100%;
`

type DraggableLists = {
  lists: any[]
  dispatch: Dispatch<ActionType>
}

export const DraggableLists: FC<DraggableLists> = ({
  lists,
  dispatch,
}): ReactElement => {
  return (
    <div css={container}>
      {lists.map((listTitle: string) => (
        <List title={listTitle} key={listTitle} dispatch={dispatch} />
      ))}
    </div>
  )
}
