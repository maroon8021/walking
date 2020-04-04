import * as React from "react"
import { useState, useEffect } from "react"
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core"
import Card, { CardProps } from "./card"
import dummy from "@s/images/dummy-img.png"
import { Link } from "gatsby"

/* Styles */
const mainArea = css`
  padding: 0 1.6rem;
`
const mainAreaHead = css`
  padding: 0.8rem;
`

const mainAreaContents = css`
  padding: 0.8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const item = {
  img: dummy,
  text: "hogehogehoge hogehogehoge hogehogehogehoge",
  to: "/works/faceted-navigation/",
}

const rowData = [...Array(4)].map(_ => item)

const MainArea: React.FC = (): React.ReactElement => {
  return (
    <div css={mainArea}>
      <h3 css={mainAreaHead}>Footprints</h3>
      <div css={mainAreaContents}>
        {rowData.map((data, index) => {
          return (
            <Link to={data.to} key={`${data.text}-${index}`}>
              <Card img={data.img} text={data.text} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default MainArea
