import * as React from "react"
import { useState, useEffect, useContext } from "react"
import { Store } from "@s/components/works/faceted-navigation/context"
import { changeRangeSliderValue } from "@s/components/works/faceted-navigation/reducer"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

export type RangeSliderData = {
  id: number | string
  value: number | string
}

type RangeSliderProps = {
  groupName: string
  groupKey: any
  min: number
  max: number
}

const container = css`
  padding: 1.6rem;
`

const inner = css`
  padding: 1rem 0;
`

const groupNameStyle = css`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 0.8rem;
`

const rangeSliderStyleBase = css`
  appearance: none;
  background-color: #c7c7c7;
  height: 2px;
  width: 100%;
  position: relative;
  &:focus,
  &:active {
    outline: none;
  }
  &::-webkit-slider-thumb {
    appearance: none;
    cursor: pointer;
    position: relative;
    border: none;
    width: 16px;
    height: 16px;
    display: block;
    background-color: #262626;
    border-radius: 50%;
  }
  &::before {
    content: "";
    height: 2px;
    background: #000;
    left: 0;
    position: absolute;
  }
`

const resultStyle = css`
  margin-top: 0.5rem;
  text-align: center;
`

const RangeSlider: React.FC<RangeSliderProps> = ({
  groupName,
  groupKey,
  min,
  max,
}): React.ReactElement => {
  const { dispatch } = useContext(Store)
  const [result, setResult] = useState(max)
  const [width, setWidth] = useState(100)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value)
    setResult(value)
    setWidth((value / max) * 100)
  }

  // https://github.com/facebook/react/issues/2454#issuecomment-76298608
  const onMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
    const value = parseInt(e.currentTarget.value)
    dispatch(changeRangeSliderValue({ groupKey, value }))
  }

  const rangeSliderStyle = css`
    ${rangeSliderStyleBase}
    &::before {
      width: ${width}%;
    }
  `

  useEffect(() => {
    setResult(max)
  }, [])

  return (
    <div css={container}>
      <p css={groupNameStyle}>{groupName}</p>
      <div css={inner}>
        <input
          type="range"
          min={min}
          max={max}
          data-unit="%"
          onChange={onChange}
          onMouseUp={onMouseUp}
          css={rangeSliderStyle}
          defaultValue={max}
        />
      </div>
      <p css={resultStyle}>{result}</p>
    </div>
  )
}

export default RangeSlider
