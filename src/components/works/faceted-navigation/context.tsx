import * as React from "react"
import { createContext, FC, useReducer, Dispatch } from "react"
import { reducer } from "./reducer"
import { ENROLL_VIEW_STATUS } from "@s/assets/works/faceted-navigation/employee-data"
import { ItemBasetype } from "@s/components/works/faceted-navigation/faceted-elements/parts/parts-base"

export type StateType = {
  filterValues: FilterValuesType
  filterItems: FilterItemsType
}

export type FilterValuesType = {
  occupation: string[]
  gender: string[]
  enrollmentPeriod: number
  birthplace: string[]
  enrolled: ENROLL_VIEW_STATUS
}

export const CHECKBOX_FILTER_KEYS = {
  OCCUPATION: "occupation",
  GENDER: "gender",
  BIRTHPLACE: "birthplace",
} as const

export const SELECTBOX_FILTER_KEYS = {
  ENROLLED: "enrolled",
} as const

export const RANGE_SLIDER_FILTER_KEYS = {
  ENROLLMENT_PRERIOD: "enrollmentPeriod",
} as const

export const FILTER_ITEM_KEYS = {
  ...CHECKBOX_FILTER_KEYS,
  ...SELECTBOX_FILTER_KEYS,
  ...RANGE_SLIDER_FILTER_KEYS,
} as const

export type FILTER_ITEM_KEYS = typeof FILTER_ITEM_KEYS[keyof typeof FILTER_ITEM_KEYS]

export type CheckboxFilterKeys = typeof CHECKBOX_FILTER_KEYS[keyof typeof CHECKBOX_FILTER_KEYS]

export type SelectboxFilterKeys = typeof SELECTBOX_FILTER_KEYS[keyof typeof SELECTBOX_FILTER_KEYS]

export type RangeSliderFilterKeys = typeof FILTER_ITEM_KEYS[keyof typeof FILTER_ITEM_KEYS]

// export type FILTER_ITEM_KEYS_TYPE = {
//   [key in keyof typeof FILTER_ITEM_KEYS]?: any
// }

// FILTER_ITEM_KEYS_TYPE &

export type FilterItemsType = {
  occupation: ItemBasetype[]
  gender: ItemBasetype[]
  enrollmentPeriod: {
    value: number
    maxValue: number
  }
  birthplace: ItemBasetype[]
  enrolled: ItemBasetype[]
}

type ContextValue = {
  state: StateType
  dispatch: Dispatch<any>
}

type ProviderProps = {
  children: React.ReactNode
}

const initialValues: FilterValuesType = {
  occupation: [],
  gender: [],
  enrollmentPeriod: 0,
  birthplace: [],
  enrolled: ENROLL_VIEW_STATUS.ALL,
}

const initialFilter: FilterItemsType = {
  occupation: [],
  gender: [],
  enrollmentPeriod: {
    value: 0,
    maxValue: 0,
  },
  birthplace: [],
  enrolled: [],
}

const initialState = {
  filterValues: initialValues,
  filterItems: initialFilter,
}

export const Store = createContext<ContextValue>({
  state: initialState,
  dispatch: () => null,
})

export const Provider: FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}
