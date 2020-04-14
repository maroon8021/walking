import * as React from "react"
import { useState } from "react"

import Accordion, {
  AccordionContentsType,
} from "@s/components/works/accordion/accordion"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

type AccordionProps = {
  AccordionData: AccordionContentsType[]
}

const Accordions: React.FC<AccordionProps> = ({ AccordionData }) => {
  const [accordions, setAccordions] = useState<AccordionContentsType[]>(
    AccordionData
  )
  return (
    <React.Fragment>
      {accordions.map(data => {
        const { id, title, subHead, content, isOpened, image } = data
        return (
          <Accordion
            key={id}
            id={id}
            title={title}
            subHead={subHead}
            content={content}
            isOpened={isOpened}
            image={image}
            data={accordions}
            setAccordions={setAccordions}
          />
        )
      })}
    </React.Fragment>
  )
}

export default Accordions
