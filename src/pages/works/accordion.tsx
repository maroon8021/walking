import * as React from "react"
import { useContext, useEffect, useState } from "react"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import SEO from "@s/components/common/seo"
import WorksLayout from "@s/components/common/works-layout"
import { HEADER_COLOR_TYPE } from "@s/components/common/header"
import { AccordionContentsType } from "@s/components/works/accordion/accordion"
import Accordions from "@s/components/works/accordion/accordions"

import js from "@s/images/works/accordion/js.png"
import java from "@s/images/works/accordion/java.png"
import php from "@s/images/works/accordion/php.png"
import go from "@s/images/works/accordion/go.png"

const mainArea = css`
  max-width: 600px;
  margin: 0 auto;
  padding-top: 50px;
`
const accordionData: AccordionContentsType[] = [
  {
    id: 1,
    title: "JavaScript",
    subHead: "JavaScript can update and change both HTML and CSS.",
    content:
      "JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
    isOpened: true,
    image: js,
  },
  {
    id: 2,
    title: "Java",
    subHead:
      "Java is a general-purpose programming language that is class-based, object-oriented.",
    content:
      "It is intended to let application developers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture.",
    isOpened: false,
    image: java,
  },
  {
    id: 3,
    title: "PHP",
    subHead:
      "PHP is a popular general-purpose scripting language that is especially suited to web development.",
    content:
      "It was originally created by Rasmus Lerdorf in 1994; the PHP reference implementation is now produced by The PHP Group. PHP originally stood for Personal Home Page, but it now stands for the recursive initialism PHP: Hypertext Preprocessor.",
    isOpened: false,
    image: php,
  },
  {
    id: 4,
    title: "Go",
    subHead:
      "Go is a statically typed, compiled programming language designed at Google",
    content:
      "Go is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency. The language is often referred to as Golang because of its domain name, golang.org, but the proper name is Go.",
    isOpened: false,
    image: go,
  },
]

const AccordionPage: React.FC = (): React.ReactElement => {
  return (
    <WorksLayout
      subTitle={"Accordion"}
      HeaderColorType={HEADER_COLOR_TYPE.WHITE}
    >
      <SEO title="Works:Accordion" lang="ja">
        <meta name="robots" content="noindex" />
      </SEO>
      <div css={mainArea}>
        <Accordions AccordionData={accordionData} />
      </div>
    </WorksLayout>
  )
}

export default AccordionPage
