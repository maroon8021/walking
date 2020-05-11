import * as React from "react"
import { useState, useEffect } from "react"
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core"
import Card, { CardProps } from "./card"
import { Link } from "gatsby"
import axios from "axios"
import { BREAKPOINTS } from "../common/style-util"

/* Styles */
const mainArea = css`
  padding: 0 1.6rem;
  max-width: 1000px;
  margin: 0 auto;
  ${BREAKPOINTS.MD} {
    margin-bottom: 8rem;
  }
`

const mainAreaHead = css`
  padding: 0.8rem;
  font-size: 24px;
`

const mainAreaContents = css`
  padding: 0.8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const linkStyle = css`
  margin-bottom: 2.4rem;
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
            <Link to={data.to} key={`${data.title}-${index}`} css={linkStyle}>
              <Card img={data.imagePath} text={data.title} demo={data.demo} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default MainArea
