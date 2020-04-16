import * as React from "react"
import { useState, useEffect } from "react"
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core"
import Card, { CardProps } from "./card"
import { Link } from "gatsby"
import axios from "axios"

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

type LinkCardType = {
  imagePath: string
  title: string
  to: string
  demo: string
}

//const rowData = [...Array(4)].map(_ => item)

const MainArea: React.FC = (): React.ReactElement => {
  const [articles, setArticles] = useState<LinkCardType[]>([])
  useEffect(() => {
    axios.get("/data.json").then(res => {
      setArticles(res.data)
    })
  }, [])
  return (
    <div css={mainArea}>
      <h3 css={mainAreaHead}>Footprints</h3>
      <div css={mainAreaContents}>
        {articles.map((data, index) => {
          return (
            <Link to={data.to} key={`${data.title}-${index}`}>
              <Card img={data.imagePath} text={data.title} demo={data.demo} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default MainArea
