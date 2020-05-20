import * as React from "react"
import { FC, ReactElement, useReducer, useState, useEffect } from "react"
/** @jsx jsx */
import { css, jsx } from "@emotion/core"

const container = css`
  width: 100%;
  margin-top: 1.4rem;
  padding: 0.8rem;
  border: 1px solid #7f7f7f;
  border-radius: 5px;
  background-color: #ddd;
`
const pStyle = css`
  line-height: 1.5;
`

type LogViewer = {
  lists: any[]
  isDragging: boolean
}

export const LogViewer: FC<LogViewer> = ({
  lists,
  isDragging,
}): ReactElement => {
  const [log, setLog] = useState<string[]>([])

  useEffect(() => {
    if (isDragging) {
      return
    }
    const newLog = [...log]
    newLog.push(`${String(log.length + 1)} : ${JSON.stringify(lists)}`)
    setLog(newLog)
  }, [isDragging])

  return (
    <div css={container}>
      <p css={pStyle} dangerouslySetInnerHTML={{ __html: log.join("<br>") }} />
    </div>
  )
}
