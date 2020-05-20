export type StateType = {
  lists: any[]
  draggingList: string
  isDragging: boolean
}

export const ACTION_TYPE = {
  CHANGE_ORDER: "CHANGE_ORDER",
  SET_DRAGGING_LIST: "SET_DRAGGING_LIST",
  FINISH_DRAGGING_LIST: "FINISH_DRAGGING_LIST",
} as const

export const changeOrder = (enteredList: string) => ({
  type: ACTION_TYPE.CHANGE_ORDER,
  payload: {
    enteredList,
  },
})

export const setDraggingList = (draggingList: string) => ({
  type: ACTION_TYPE.SET_DRAGGING_LIST,
  payload: {
    draggingList,
  },
})

export const finishDraggingList = () => ({
  type: ACTION_TYPE.FINISH_DRAGGING_LIST,
})

export type Actions =
  | typeof changeOrder
  | typeof setDraggingList
  | typeof finishDraggingList

export type ActionType = ReturnType<Actions>

export const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case ACTION_TYPE.CHANGE_ORDER: {
      const draggingListIndex = state.lists.findIndex(list => {
        return list === state.draggingList
      })
      const targetListIndex = state.lists.findIndex(list => {
        return list === action.payload.enteredList
      })
      const lists = [...state.lists]
      lists[draggingListIndex] = state.lists[targetListIndex]
      lists[targetListIndex] = state.lists[draggingListIndex]
      return {
        ...state,
        lists,
      }
    }

    case ACTION_TYPE.SET_DRAGGING_LIST: {
      const draggingList = action.payload.draggingList
      const isDragging = true
      return {
        ...state,
        draggingList,
        isDragging,
      }
    }

    case ACTION_TYPE.FINISH_DRAGGING_LIST: {
      const isDragging = false
      return {
        ...state,
        isDragging,
      }
    }

    default:
      throw new Error("Action type is not correct")
  }
}
