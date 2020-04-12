import * as React from "react"
import { useContext, useEffect, useState } from "react"

/** @jsx jsx */
import { css, jsx, Global } from "@emotion/core"
import FacetedNavigation from "@s/components/works/faceted-navigation/faceted-elements/faceted-navigation"
import List from "@s/components/works/faceted-navigation/common/lists"
import { ItemBasetype } from "@s/components/works/faceted-navigation/faceted-elements/parts/parts-base"
import Checkboxes from "@s/components/works/faceted-navigation/faceted-elements/parts/checkboxes"
import Selectbox from "@s/components/works/faceted-navigation/faceted-elements/parts/selectbox"
import RangeSlider from "@s/components/works/faceted-navigation/faceted-elements/parts/range-slider"
import {
  Store,
  FilterItemsType,
  FilterValuesType,
  StateType,
  FILTER_ITEM_KEYS,
} from "@s/components/works/faceted-navigation/context"
import {
  setFilterItem,
  setFilterState,
} from "@s/components/works/faceted-navigation/reducer"
import WorksLayout from "@s/components/common/works-layout"
import { HEADER_COLOR_TYPE } from "@s/components/common/header"
import {
  EMPLOYEE_DATA_HEADER,
  EMPLOYEE_DATA,
  ENROLL_VIEW_STATUS,
  EmployeeItem,
  FILTER_ITEMS,
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

type TargetFilterType = string

const Main: React.FC = (): React.ReactElement => {
  const { state, dispatch } = useContext(Store)
  const [listData, setListData] = useState<EmployeeItem[]>([])
  useEffect(() => {
    initializeFilterItems(dispatch)
  }, [])

  useEffect(() => {
    filterValues(state.filterItems, dispatch)
  }, [state.filterItems])

  useEffect(() => {
    const newListData = getNewListData(state)
    setListData(newListData)
  }, [state.filterValues])

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
              groupName={FILTER_ITEMS.OCCUPATION}
              groupKey={FILTER_ITEM_KEYS.OCCUPATION}
              checkboxesData={state.filterItems.occupation}
            />
            <Checkboxes
              groupName={FILTER_ITEMS.GENDER}
              groupKey={FILTER_ITEM_KEYS.GENDER}
              checkboxesData={state.filterItems.gender}
            />
            <RangeSlider
              groupName={FILTER_ITEMS.ENROLLMENT_PERIOD}
              groupKey={FILTER_ITEM_KEYS.ENROLLMENT_PRERIOD}
              min={1}
              max={state.filterItems.enrollmentPeriod.maxValue}
            />
            <Selectbox
              groupName={FILTER_ITEMS.ENROLLED}
              groupKey={FILTER_ITEM_KEYS.ENROLLED}
              selectOptionsData={state.filterItems.enrolled}
            />
            <Checkboxes
              groupName={FILTER_ITEMS.BIRTHPLACE}
              groupKey={FILTER_ITEM_KEYS.BIRTHPLACE}
              checkboxesData={state.filterItems.birthplace}
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

function initializeFilterItems(dispatch: React.Dispatch<any>) {
  const items = getInitialFilterItems()
  dispatch(setFilterItem(items))
}

function filterValues(items: FilterItemsType, dispatch: React.Dispatch<any>) {
  const state = getInitialFilterState(items)
  dispatch(setFilterState(state))
}

function getInitialFilterItems(): FilterItemsType {
  const occupation = getReducedData(FILTER_ITEMS.OCCUPATION)
  const gender = getReducedData(FILTER_ITEMS.GENDER)
  const birthplace = getReducedData(FILTER_ITEMS.BIRTHPLACE)
  const enrollmentPeriod = getReducedPeriod()
  const enrolled = getSelectedItems(Object.values(ENROLL_VIEW_STATUS))
  return { occupation, gender, birthplace, enrollmentPeriod, enrolled }
}

function getInitialFilterState(items: FilterItemsType): FilterValuesType {
  const occupation = getFilteringTargets(items.occupation)
  const gender = getFilteringTargets(items.gender)
  const birthplace = getFilteringTargets(items.birthplace)
  const enrollmentPeriod = items.enrollmentPeriod.value
  const enrolled = getFilteringTarget<ENROLL_VIEW_STATUS>(
    items.enrolled,
    Object.values(ENROLL_VIEW_STATUS)
  ) as ENROLL_VIEW_STATUS
  return { occupation, gender, birthplace, enrollmentPeriod, enrolled }
}

function getReducedData(key: FILTER_ITEMS): ItemBasetype[] {
  return EMPLOYEE_DATA.reduce(
    (accumulator: ItemBasetype[], currentValue, index) => {
      let currentItem: TargetFilterType
      switch (key) {
        case FILTER_ITEMS.OCCUPATION:
          currentItem = currentValue.occupation
          break

        case FILTER_ITEMS.GENDER:
          currentItem = currentValue.gender
          break

        case FILTER_ITEMS.BIRTHPLACE:
          currentItem = currentValue.birthplace
          break

        default:
          throw new Error("Wrong FILTER_ITEMS selected")
          break
      }
      const existValue = accumulator.some(item => {
        return item.value === currentItem
      })
      if (!existValue) {
        accumulator.push({
          id: `${currentItem}-${index}`,
          value: currentItem,
          text: currentItem,
          isSelected: true,
        })
      }
      return accumulator
    },
    []
  )
}

function getReducedPeriod() {
  const maxValue = EMPLOYEE_DATA.reduce((accumulator: number, currentValue) => {
    return accumulator >= currentValue.enrollmentPeriod
      ? accumulator
      : currentValue.enrollmentPeriod
  }, 0)
  return { value: maxValue, maxValue }
}

function getSelectedItems(items: string[]) {
  return items.map((item, index) => {
    return {
      id: `${item}-${index}`,
      text: item,
      value: item,
    }
  })
}

function getFilteringTarget<T extends string>(
  targetState: ItemBasetype[],
  targets: T[]
) {
  return targetState.reduce((accumulator: TargetFilterType, currentValue) => {
    if (currentValue.isSelected) {
      const target = targets.find((item: any) => {
        return item === currentValue.value
      })
      accumulator = target!
    }
    return accumulator
  }, "")
}

function getFilteringTargets(targetState: ItemBasetype[]) {
  return targetState.reduce((accumulator: TargetFilterType[], currentValue) => {
    if (currentValue.isSelected) {
      accumulator.push(currentValue.value)
    }
    return accumulator
  }, [])
}

function getNewListData(state: StateType): EmployeeItem[] {
  return EMPLOYEE_DATA.reduce((accumulator: EmployeeItem[], currentValue) => {
    let isTarget = true
    const { filterValues } = state
    // occupation
    if (!filterValues.occupation.includes(currentValue.occupation)) {
      isTarget = false
    }
    // gender
    if (!filterValues.gender.includes(currentValue.gender)) {
      isTarget = false
    }
    // birthplace
    if (!filterValues.birthplace.includes(currentValue.birthplace)) {
      isTarget = false
    }
    // enrollmentPeriod
    if (filterValues.enrollmentPeriod < currentValue.enrollmentPeriod) {
      isTarget = false
    }
    // enrolled
    if (filterValues.enrolled !== ENROLL_VIEW_STATUS.ALL) {
      if (filterValues.enrolled === ENROLL_VIEW_STATUS.ENROLLED) {
        isTarget = currentValue.isEnrolled === true && isTarget
      } else if (filterValues.enrolled === ENROLL_VIEW_STATUS.NOT_ENROLLED) {
        isTarget = currentValue.isEnrolled === false && isTarget
      }
    }
    if (isTarget) {
      accumulator.push(currentValue)
    }
    return accumulator
  }, [])
}
