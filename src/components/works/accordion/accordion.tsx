import * as React from "react"
import { useRef } from "react"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

export type AccordionContentsType = {
  id: number
  title: string
  subHead: string
  content: string
  isOpened: boolean
  image: string // https://stackoverflow.com/questions/41791933/in-typescript-what-is-the-type-of-image/41904270
}

export type AccordionDataType = AccordionContentsType & {
  data: AccordionContentsType[]
  setAccordions: React.Dispatch<React.SetStateAction<AccordionContentsType[]>>
}

const container = css``

const head = css`
  display: flex;
  max-height: 125px;
  border-bottom: 1px solid #7f7f7f;
  cursor: default;
`

const headOpened = css`
  ${head}

  cursor: pointer;
`

const headTitle = css`
  width: 65%;
`

const headTitlePara = css`
  font-size: 18px;
  font-weight: bold;
  max-width: 300px;
  position: relative;
  vertical-align: middle;
  display: table-cell;
  height: 125px;
  width: 300px;
  &::before {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #7f7f7f;
    position: absolute;
    top: 0;
    bottom: 0;
    right: -80px;
    margin: auto;
    content: "";
    vertical-align: middle;
  }
  &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    content: "";
    vertical-align: middle;
    right: -70px;
    width: 5px;
    height: 5px;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    transform: rotate(45deg);
    transition: 0.7s ease;
  }
`

const headTitleParaOpened = css`
  ${headTitlePara}
  &::after {
    right: -71px;
    transform: rotate(135deg);
    transition: 0.7s ease;
  }
`

const headImgWrapper = css`
  overflow: hidden;
  display: flex;
  align-items: center;
  opacity: 0.5;
  width: 35%;
`

const headImg = css`
  display: inline-block;
  width: 100%;
`

const headImgOpened = css`
  display: none;
`

const body = css`
  height: 0;
  opacity: 0;
  padding: 0 20px;
  visibility: hidden;
  transition: 0.7s ease;
`

const bodyOpened = css`
  ${body}

  display: flex;
  height: auto;
  visibility: visible;
  opacity: 1;
  padding: 30px 20px;
  transition: 0.7s ease;
  border-bottom: 1px solid #7f7f7f;
`

const bodyImgWrapper = css`
  width: 45%;
  overflow: hidden;
`

const bodyImg = css`
  width: 100%;
`

const bodyContent = css`
  padding-left: 30px;
  width: 55%;
`

const subHeadStyle = css`
  margin-bottom: 20px;
`

const Accordion: React.FC<AccordionDataType> = ({
  id,
  title,
  subHead,
  content,
  image,
  isOpened,
  data,
  setAccordions,
}): React.ReactElement => {
  const headStyle = isOpened ? headOpened : head
  const headTitleParaStyle = isOpened ? headTitleParaOpened : headTitlePara
  const headImgStyle = isOpened ? headImgOpened : headImg
  const bodyStyle = isOpened ? bodyOpened : body

  const accordionElement = useRef<HTMLDivElement>(null)

  const onClick = () => {
    if (isOpened) {
      return
    }
    const newAccordions = data.concat().map(accordion => {
      accordion.isOpened = accordion.id === id
      return accordion
    })

    setAccordions(newAccordions)
    setTimeout(() => {
      if (accordionElement.current !== null) {
        const rectTop = accordionElement.current.getBoundingClientRect().top
        const offsetTop = window.pageYOffset
        const buffer = 60
        const top = rectTop + offsetTop - buffer
        window.scrollTo({
          top,
          behavior: "smooth",
        })

        // accordionElement.current.scrollIntoView({
        //   behavior: "smooth",
        //   block: "start",
        // })
      }
    }, 500)
  }

  return (
    <div css={container} ref={accordionElement}>
      <div css={headStyle} onClick={onClick}>
        <div css={headTitle}>
          <p css={headTitleParaStyle}>{title}</p>
        </div>
        <div css={headImgWrapper}>
          <img src={image} css={headImgStyle} />
        </div>
      </div>
      <div css={bodyStyle}>
        <div css={bodyImgWrapper}>
          <img src={image} css={bodyImg} />
        </div>
        <div css={bodyContent}>
          <h4 css={subHeadStyle}>{subHead}</h4>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default Accordion
