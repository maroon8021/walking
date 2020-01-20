import * as React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"
import reset from "@s/styles/reset"
import fonts from "@s/styles/fonts"

const Layout: React.FC = ({ children }): React.ReactElement => (
  <>
    <Global
      styles={css`
        ${reset}
        ${fonts}
      `}
    />
    <main>{children}</main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
