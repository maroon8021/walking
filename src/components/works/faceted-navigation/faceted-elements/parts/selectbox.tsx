import * as React from "react"
import { useContext } from "react"
import { Store } from "@s/components/works/faceted-navigation/context"
import { ItemBasetype } from "@s/components/works/faceted-navigation/faceted-elements/parts/parts-base"
import { changeSelectboxValue } from "@s/components/works/faceted-navigation/reducer"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

export type SelectboxData = ItemBasetype

type SelectboxProps = {
  groupName: string
  groupKey: any
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
  groupKey,
  selectOptionsData,
}): React.ReactElement => {
  const { dispatch } = useContext(Store)

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value
    const selectOptions = selectOptionsData.map(item => {
      item.isSelected = item.value === value
      return item
    })
    setTimeout(() => {
      dispatch(
        changeSelectboxValue({
          groupKey,
          selectOptions,
        })
      )
    }, 500)
  }

  return (
    <div css={container}>
      <p css={groupNameStyle}>{groupName}</p>
      <select css={selectStyle} onChange={onChange}>
        {selectOptionsData.map((data: SelectboxData) => {
          return (
            <option value={data.value} key={data.id} selected={data.isSelected}>
              {data.text}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default SelectBox
