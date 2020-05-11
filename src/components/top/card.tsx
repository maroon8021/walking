import * as React from "react"
import { useState, useEffect, useRef } from "react"
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core"

export type CardProps = {
  img: string
  text: string
  demo: string
}

const pseudoElementBase = css`
  background-color: #7f7f7f;
  content: "";
  display: block;
  position: absolute;
  z-index: 10;
  transition: all 0.3s ease;
`

const containerPseudoElement = css`
  ${pseudoElementBase}
  width: 0px;
  height: 2px;
`

const containerHovered = css`
  &::before,
  &::after {
    width: 100%;
    width: calc(100% + 1px);
  }
  & img {
    transition: all 0.5s ease-in-out;
    transform: scale(1.3, 1.3);
  }
`

const containerBase = css`
  max-width: 300px;
  position: relative;
  margin-bottom: 1rem;
  &::before {
    ${containerPseudoElement}

    right: -1px;
    bottom: -1px;
  }
  &::after {
    ${containerPseudoElement}
    top: -1px;
    left: -1px;
  }
`

const container = css`
  ${containerBase}
  &:hover {
    ${containerHovered}
  }
`

const containerSPHovered = css`
  ${containerBase}
  ${containerHovered}
`

const innerPseudoElement = css`
  ${pseudoElementBase}
  width: 2px;
  height: 0px;
`

const innerHovered = css`
  &::before,
  &::after {
    height: 100%;
    height: calc(100% + 1px);
  }
`

const innerBase = css`
  &::before {
    ${innerPseudoElement}

    left: -1px;
    bottom: -1px;
  }
  &::after {
    ${innerPseudoElement}
    top: -1px;
    right: -1px;
  }
`

const inner = css`
  ${innerBase}

  &:hover {
    ${innerHovered}
  }
`

const innerSPHovered = css`
  ${innerBase}
  ${innerHovered}
`

const imgArea = css`
  overflow: hidden;
  width: 300px;
`

const imgElement = css`
  transition: all 0.5s ease-in-out;
  max-width: 300px;
  object-fit: contain;
  max-height: 200px;
  margin: 0 auto;
  display: block;
`

const textArea = css`
  padding: 20px 10px;
`

const textContent = css`
  color: #1976d2;
`

const Card: React.FC<CardProps> = (props): React.ReactElement => {
  const [showHoverStyle, setShowHoverStyle] = useState(false)
  const cardElement = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.screen.width >= 415) {
      // isPC
      return
    }
    if (cardElement.current !== null) {
      const targetElement = cardElement.current
      const targetLine = Math.floor(window.screen.height * 0.6)
      window.addEventListener("scroll", () => {
        const currentPositon = Math.floor(
          targetElement.getBoundingClientRect().top
        )
        setShowHoverStyle(currentPositon <= targetLine)
      })
    }
  }, [])

  return (
    <div
      css={showHoverStyle ? containerSPHovered : container}
      ref={cardElement}
    >
      <div css={showHoverStyle ? innerSPHovered : inner}>
        <div css={imgArea}>
          <img src={props.img} alt="" css={imgElement} />
        </div>
        <div css={textArea}>
          <p css={textContent}>{props.text}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
