import * as React from "react"
import { Link } from "gatsby"
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core"
import Logo from "@s/images/walking-logo.png"
import { BREAKPOINTS } from "./style-util"

export const HEADER_COLOR_TYPE = {
  BLACK: "black",
  WHITE: "white",
} as const

export type HEADER_COLOR_TYPE = typeof HEADER_COLOR_TYPE[keyof typeof HEADER_COLOR_TYPE]

type HeaderProps = {
  subTitle: string
  colorType: HEADER_COLOR_TYPE
}

// --- Styles ---

const headerStyleBase = css`
  height: 6rem;
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  padding: 0 3rem;
  z-index: 10;
`

const subTitleArea = css`
  padding: 2rem;
`

const subTitleStyle = css`
  font-size: 2rem;
  ${BREAKPOINTS.SM} {
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }
`

const imgStyle = css`
  width: 15rem;
  margin-top: 1.2rem;
`

const Header: React.FC<HeaderProps> = ({
  subTitle = "",
  colorType,
}): React.ReactElement => {
  let colorStyle
  switch (colorType) {
    case HEADER_COLOR_TYPE.BLACK:
      colorStyle = css`
        background-color: #000;
        color: #fff;
        & img {
          filter: invert(88%) sepia(61%) saturate(0%) hue-rotate(229deg)
            brightness(107%) contrast(101%); /* Filtering to white color */
        }
      `
      break

    case HEADER_COLOR_TYPE.WHITE:
      colorStyle = css`
        background-color: #fff;
        color: #000;
        border-bottom: 1px solid #bdbdbd;
      `
      break

    default:
      break
  }

  const headerStyle = css`
    ${headerStyleBase}
    ${colorStyle}
  `

  let subHead
  if (subTitle !== "") {
    subHead = <SubHead subTitle={subTitle} />
  }

  return (
    <header css={headerStyle}>
      <div>
        <Link to="/">
          <h1>
            <img src={Logo} alt="walking" css={imgStyle} />
          </h1>
        </Link>
      </div>
      {subHead}
    </header>
  )
}

export default Header

type SubHeadProps = {
  subTitle: string
}

const SubHead: React.FC<SubHeadProps> = ({ subTitle }): React.ReactElement => {
  return (
    <div css={subTitleArea}>
      <h2 css={subTitleStyle}>- {subTitle}</h2>
    </div>
  )
}
