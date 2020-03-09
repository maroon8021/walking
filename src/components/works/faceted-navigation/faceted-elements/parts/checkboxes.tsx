import * as React from "react"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

export type CheckboxData = {
  id: number | string
  value: number | string
  text: string
}

export type CheckboxProp = {
  data: CheckboxData
}

export type CheckboxesProp = {
  groupName: string
  checkboxesData: CheckboxData[]
}

const checkboxes = css`
  padding: 1.6rem;
`
const checkboxesName = css`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 0.8rem;
`

const Checkboxes: React.FC<CheckboxesProp> = ({
  groupName,
  checkboxesData,
}): React.ReactElement => {
  return (
    <div css={checkboxes}>
      <p css={checkboxesName}>{groupName}</p>
      {checkboxesData.map(data => {
        return <Checkbox data={data} key={data.id} />
      })}
    </div>
  )
}

export default Checkboxes

const checkbox = css`
  display: block;
  padding: 0.4rem 0;
  cursor: pointer;
  :hover {
    background-color: #efefef;
  }
`
const boxArea = css`
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
  :hover {
    background-color: rgba(220, 0, 78, 0.04);
  }
`
const buttonLabel = css``

const checkboxText = css``

const Checkbox: React.FC<CheckboxProp> = ({ data }): React.ReactElement => {
  return (
    <label css={checkbox} htmlFor={data.id.toString()}>
      <span css={boxArea}>
        <span css={buttonLabel} />
        <input type="checkbox" name="" id={data.id.toString()} />
      </span>
      <span css={checkboxText}>{data.text}</span>
    </label>
  )
}
