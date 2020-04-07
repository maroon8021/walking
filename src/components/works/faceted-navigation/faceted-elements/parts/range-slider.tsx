import * as React from "react"
import { useState, useEffect } from "react"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

export type RangeSliderData = {
  id: number | string
  value: number | string
}

type RangeSliderProps = {
  groupName: string
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

const rangeSliderStyle = css`
  appearance: none;
  background-color: #c7c7c7;
  height: 2px;
  width: 100%;
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
`

const resultStyle = css`
  margin-top: 0.5rem;
  text-align: center;
`

const RangeSlider: React.FC<RangeSliderProps> = ({
  groupName,
  min,
  max,
}): React.ReactElement => {
  const [result, setResult] = useState(0)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResult(parseInt(e.currentTarget.value))
  }

  useEffect(() => {
    setResult(max / 2)
  }, [])

  return (
    <div css={container}>
      <p css={groupNameStyle}>{groupName}</p>
      <div css={inner}>
        <input
          type="range"
          value={result}
          min={min}
          max={max}
          data-unit="%"
          onChange={onChange}
          css={rangeSliderStyle}
        />
      </div>
      <p css={resultStyle}>{result}</p>
    </div>
  )
}

export default RangeSlider
