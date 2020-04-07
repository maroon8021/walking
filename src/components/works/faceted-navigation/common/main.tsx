import * as React from "react"
import { useContext, useEffect, useState } from "react"

/** @jsx jsx */
import { css, jsx, Global } from "@emotion/core"
import FacetedNavigation from "@s/components/works/faceted-navigation/faceted-elements/faceted-navigation"
import List from "@s/components/works/faceted-navigation/common/lists"
import { ItemBasetype } from "@s/components/works/faceted-navigation/faceted-elements/parts/parts-base"
import Checkboxes, {
  CheckboxData,
} from "@s/components/works/faceted-navigation/faceted-elements/parts/checkboxes"
import Selectbox, {
  SelectboxData,
} from "@s/components/works/faceted-navigation/faceted-elements/parts/selectbox"
import RangeSlider from "@s/components/works/faceted-navigation/faceted-elements/parts/range-slider"
import { Store } from "@s/components/works/faceted-navigation/context"
import { ACTION_TYPE } from "@s/components/works/faceted-navigation/reducer"
import WorksLayout from "@s/components/common/works-layout"
import { HEADER_COLOR_TYPE } from "@s/components/common/header"
import {
  EMPLOYEE_DATA_HEADER,
  EMPLOYEE_DATA,
  ENROLL_VIEW_STATUS,
  EmployeeItem,
} from "@s/assets/works/faceted-navigation/employee-data"

const pageStyle = css`
  body {
    background-color: #efefef;
  }
`

const mainArea = css`
  display: flex;
`

const leftArea = css``
const rightArea = css`
  margin-left: 30rem;
  padding: 5rem;
`

const listHead = css`
  margin-bottom: 2rem;
  font-size: 2.5rem;
`

type TargetFilterType = string | number

const Main: React.FC = (): React.ReactElement => {
  const { state, dispatch } = useContext(Store)
  const [listData, setListData] = useState<EmployeeItem[]>([])
  useEffect(() => {
    const occupation = getReducedData("occupation") // item of enum should be set, not string itself... will be fixed
    const gender = getReducedData("gender")
    const birthplace = getReducedData("birthplace")
    const enrollementPeriod = getReducedPeriod()
    const enrolled = ENROLL_VIEW_STATUS.ALL
    dispatch({
      type: ACTION_TYPE.SET_INITIAL_STATE,
      payload: {
        occupation,
        gender,
        birthplace,
        enrollementPeriod,
        enrolled,
      },
    })
    console.log(state)
  }, [])

  useEffect(() => {
    const newListData = EMPLOYEE_DATA.reduce(
      (accumulator: EmployeeItem[], currentValue) => {
        let isTarget = true
        // occupation
        const targetOccupations = getFilteringTargets(state.occupation)
        if (!targetOccupations.includes(currentValue.occupation)) {
          isTarget = false
        }
        // gender
        const targetGender = getFilteringTargets(state.gender)
        if (!targetGender.includes(currentValue.gender)) {
          isTarget = false
        }
        // birthplace
        const targetBirthplace = getFilteringTargets(state.birthplace)
        if (!targetBirthplace.includes(currentValue.birthplace)) {
          isTarget = false
        }
        // enrollementPeriod
        if (state.enrollementPeriod < currentValue.enrollmentPeriod) {
          isTarget = false
        }
        // enrolled
        if (state.enrolled !== ENROLL_VIEW_STATUS.ALL) {
          if (state.enrolled === ENROLL_VIEW_STATUS.ENROLLED) {
            isTarget = currentValue.isEnrolled === true
          } else if (state.enrolled === ENROLL_VIEW_STATUS.NOT_ENROLLED) {
            isTarget = currentValue.isEnrolled === false
          }
        }
        if (isTarget) {
          accumulator.push(currentValue)
        }
        return accumulator
      },
      []
    )
    console.log(newListData)
    setListData(newListData)
  }, [state])

  return (
    <WorksLayout
      subTitle={"Faceted Navigation"}
      HeaderColorType={HEADER_COLOR_TYPE.BLACK}
    >
      <Global styles={pageStyle} />
      <div css={mainArea}>
        <div css={leftArea}>
          <FacetedNavigation>
            <Checkboxes
              groupName={"Occupation"}
              checkboxesData={state.occupation}
            />
            <Checkboxes groupName={"Gender"} checkboxesData={state.gender} />
            <RangeSlider
              groupName={"Enrollement Period"}
              min={1}
              max={state.enrollementPeriod}
            />
            {/* <Selectbox
              groupName={"Enrolled"}
              selectOptionsData={rawTestData3}
            /> */}
            <Checkboxes
              groupName={"Birthplace"}
              checkboxesData={state.birthplace}
            />
          </FacetedNavigation>
        </div>
        <div css={rightArea}>
          <h3 css={listHead}>Employee Lists</h3>
          <List listHeader={EMPLOYEE_DATA_HEADER} listData={listData} />
        </div>
      </div>
    </WorksLayout>
  )
}

export default Main

function getReducedData(key: string) {
  return EMPLOYEE_DATA.reduce(
    (accumulator: ItemBasetype[], currentValue, index) => {
      const existValue = accumulator.some(item => {
        return item.value === currentValue[key]
      })
      if (!existValue) {
        accumulator.push({
          id: `${currentValue[key]}-index`,
          value: currentValue[key],
          text: currentValue[key],
          isSelected: true,
        })
      }
      return accumulator
    },
    []
  )
}

function getReducedPeriod() {
  return EMPLOYEE_DATA.reduce((accumulator: number, currentValue) => {
    return accumulator >= currentValue.enrollmentPeriod
      ? accumulator
      : currentValue.enrollmentPeriod
  }, 0)
}

function getFilteringTargets(targetState: ItemBasetype[]) {
  return targetState.reduce((accumulator: TargetFilterType[], currentValue) => {
    if (currentValue.isSelected) {
      accumulator.push(currentValue.value)
    }
    return accumulator
  }, [])
}
