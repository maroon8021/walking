import { ItemBasetype } from "@s/components/works/faceted-navigation/faceted-elements/parts/parts-base"
import {
  StateType,
  FilterValuesType,
  FilterItemsType,
  CheckboxFilterKeys,
  SelectboxFilterKeys,
  RangeSliderFilterKeys,
} from "@s/components/works/faceted-navigation/context"

export const ACTION_TYPE = {
  CHANGE_CHECKBOX_VALUE: "CHANGE_CHECKBOX_VALUE",
  CHANGE_SELECTBOX_VALUE: "CHANGE_SELECTBOX_VALUE",
  CHANGE_RANGE_SLIDER_VALUE: "CHANGE_RANGE_SLIDER_VALUE",
  SET_INITIAL_FILTER_STATE: "SET_INITIAL_FILTER_STATE",
  SET_FILTER_ITEN: "SET_FILTER_STATE",
} as const

export const changeCheckboxValue = ({
  id,
  groupKey,
  isSelected,
}: {
  id: number | string
  groupKey: CheckboxFilterKeys
  isSelected: boolean
}) => ({
  type: ACTION_TYPE.CHANGE_CHECKBOX_VALUE,
  payload: {
    id,
    groupKey,
    isSelected,
  },
})

export const changeSelectboxValue = ({
  groupKey,
  selectOptions,
}: {
  groupKey: SelectboxFilterKeys
  selectOptions: ItemBasetype[]
}) => ({
  type: ACTION_TYPE.CHANGE_SELECTBOX_VALUE,
  payload: {
    groupKey,
    selectOptions,
  },
})

export const changeRangeSliderValue = ({
  groupKey,
  value,
}: {
  groupKey: RangeSliderFilterKeys
  value: number
}) => ({
  type: ACTION_TYPE.CHANGE_RANGE_SLIDER_VALUE,
  payload: {
    groupKey,
    value,
  },
})

export const setFilterItem = ({
  occupation,
  gender,
  birthplace,
  enrollmentPeriod,
  enrolled,
}: FilterItemsType) => ({
  type: ACTION_TYPE.SET_FILTER_ITEN,
  payload: {
    occupation,
    gender,
    birthplace,
    enrollmentPeriod,
    enrolled,
  },
})

export const setFilterState = ({
  occupation,
  gender,
  birthplace,
  enrollmentPeriod,
  enrolled,
}: FilterValuesType) => ({
  type: ACTION_TYPE.SET_INITIAL_FILTER_STATE,
  payload: {
    occupation,
    gender,
    birthplace,
    enrollmentPeriod,
    enrolled,
  },
})

export type Actions =
  | typeof changeCheckboxValue
  | typeof setFilterItem
  | typeof setFilterState
  | typeof changeSelectboxValue
  | typeof changeRangeSliderValue

type ActionType = ReturnType<Actions>

export const reducer = (state: StateType, action: ActionType) => {
  let filterItems = JSON.parse(JSON.stringify(state.filterItems)) // Deep Clone
  let filterValues
  switch (action.type) {
    case ACTION_TYPE.CHANGE_CHECKBOX_VALUE:
      const targetCheckboxFilterKey: CheckboxFilterKeys =
        action.payload.groupKey
      const targetItems: ItemBasetype[] = state.filterItems[
        targetCheckboxFilterKey
      ].concat()
      filterItems[targetCheckboxFilterKey] = targetItems.map(item => {
        if (item.id === action.payload.id) {
          item.isSelected = action.payload.isSelected
        }
        return item
      })

      return {
        ...state,
        filterItems,
      }
      break

    case ACTION_TYPE.CHANGE_SELECTBOX_VALUE:
      const targetSelectBoxKey: SelectboxFilterKeys = action.payload.groupKey
      filterItems[targetSelectBoxKey] = action.payload.selectOptions
      return {
        ...state,
        filterItems,
      }
      break

    case ACTION_TYPE.CHANGE_RANGE_SLIDER_VALUE:
      const targetRangeSliderey: RangeSliderFilterKeys = action.payload.groupKey
      filterItems[targetRangeSliderey].value = action.payload.value
      return {
        ...state,
        filterItems,
      }
      break

    case ACTION_TYPE.SET_FILTER_ITEN:
      filterItems = {
        occupation: action.payload.occupation,
        gender: action.payload.gender,
        birthplace: action.payload.birthplace,
        enrollmentPeriod: action.payload.enrollmentPeriod,
        enrolled: action.payload.enrolled,
      }
      return {
        ...state,
        filterItems,
      }
      break

    case ACTION_TYPE.SET_INITIAL_FILTER_STATE:
      filterValues = {
        occupation: action.payload.occupation,
        gender: action.payload.gender,
        birthplace: action.payload.birthplace,
        enrollmentPeriod: action.payload.enrollmentPeriod,
        enrolled: action.payload.enrolled,
      }
      return {
        ...state,
        filterValues,
      }
      break

    default:
      return state
      break
  }
}
