import * as React from "react"
import { useContext } from "react"
import { Store } from "@s/components/works/faceted-navigation/context"
import { ItemBasetype } from "@s/components/works/faceted-navigation/faceted-elements/parts/parts-base"
import { changeCheckboxValue } from "@s/components/works/faceted-navigation/reducer"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

export type CheckboxData = ItemBasetype

export type CheckboxProp = {
  data: CheckboxData
  groupKey: any // will be fixed
}

export type CheckboxesProp = {
  groupName: string
  groupKey: string
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
  groupKey,
  checkboxesData,
}): React.ReactElement => {
  return (
    <div css={checkboxes}>
      <p css={checkboxesName}>{groupName}</p>
      {checkboxesData.map(data => {
        return <Checkbox data={data} key={data.id} groupKey={groupKey} />
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

const Checkbox: React.FC<CheckboxProp> = ({
  data,
  groupKey,
}): React.ReactElement => {
  const { dispatch } = useContext(Store)

  const onChange = (): void => {
    dispatch(
      changeCheckboxValue({
        id: data.id,
        isSelected: !data.isSelected,
        groupKey,
      })
    )
  }

  return (
    <label css={checkbox} htmlFor={data.id.toString()}>
      <span css={boxArea}>
        <span css={buttonLabel} />
        <input
          type="checkbox"
          name=""
          id={data.id.toString()}
          value={data.value}
          checked={data.isSelected}
          onChange={onChange}
        />
      </span>
      <span css={checkboxText}>{data.text}</span>
    </label>
  )
}
