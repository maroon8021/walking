import * as React from "react"
import { createContext, FC, useReducer, Dispatch } from "react"
import { reducer } from "./reducer"
import { ENROLL_VIEW_STATUS } from "@s/assets/works/faceted-navigation/employee-data"
import { ItemBasetype } from "@s/components/works/faceted-navigation/faceted-elements/parts/parts-base"

type initialStateType = {
  occupation: ItemBasetype[]
  gender: ItemBasetype[]
  enrollementPeriod: 0
  birthplace: ItemBasetype[]
  enrolled: ENROLL_VIEW_STATUS
}
type ContextValue = {
  state: initialStateType
  dispatch: Dispatch<any>
}

type ProviderProps = {
  children: React.ReactNode
}

const initialState: initialStateType = {
  occupation: [],
  gender: [],
  enrollementPeriod: 0,
  birthplace: [],
  enrolled: ENROLL_VIEW_STATUS.ALL,
}

export const Store = createContext<ContextValue>({
  state: initialState,
  dispatch: () => null,
})

export const Provider: FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}
