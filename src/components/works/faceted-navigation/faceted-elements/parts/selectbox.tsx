import * as React from "react"
import { ItemBasetype } from "@s/components/works/faceted-navigation/faceted-elements/parts/parts-base"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

export type SelectboxData = ItemBasetype

type SelectboxProps = {
  groupName: string
  selectOptionsData: SelectboxData[]
}

const container = css`
  padding: 1.6rem;
`

const groupNameStyle = css`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 0.8rem;
`

const selectStyle = css`
  height: 3.5rem;
  width: 100%;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #888785;
`

const SelectBox: React.FC<SelectboxProps> = ({
  groupName,
  selectOptionsData,
}): React.ReactElement => {
  return (
    <div css={container}>
      <p css={groupNameStyle}>{groupName}</p>
      <select css={selectStyle}>
        <option value="0">All</option>
        {selectOptionsData.map((data: SelectboxData) => {
          return (
            <option value={data.value} key={data.id}>
              {data.text}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default SelectBox
