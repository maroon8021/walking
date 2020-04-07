import * as React from "react"
import { Global, css } from "@emotion/core"
import reset from "@s/styles/reset"
import fonts from "@s/styles/fonts"
import Header, { HEADER_COLOR_TYPE } from "./header"

const mainStyle = css`
  margin-top: 6rem;
`

type LayoutProps = {
  children: React.ReactNode
  subTitle: string
  HeaderColorType: HEADER_COLOR_TYPE
}

const WorksLayout: React.FC<LayoutProps> = ({
  children,
  subTitle,
  HeaderColorType,
}): React.ReactElement => (
  <>
    <Global
      styles={css`
        ${reset}
        ${fonts}
      `}
    />
    <Header subTitle={subTitle} colorType={HeaderColorType} />
    <main css={mainStyle}>{children}</main>
  </>
)

export default WorksLayout
