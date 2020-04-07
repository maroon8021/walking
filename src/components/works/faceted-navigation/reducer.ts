export const ACTION_TYPE = {
  CHANGE_OCCUPATION: "CHANGE_OCCUPATION",
  CHANGE_GENDER: "CHANGE_GENDER",
  CHANGE_ENROLLEMENT_PERIOD: "CHANGE_ENROLLEMENT_PERIOD",
  CHANGE_BIRTHPLACE: "CHANGE_BIRTHPLACE",
  SET_INITIAL_STATE: "SET_INITIAL_STATE",
} as const

type ACTION_TYPE = typeof ACTION_TYPE[keyof typeof ACTION_TYPE]

type ActionProp = {
  type: ACTION_TYPE
  payload: any
}

export const reducer = (state: any, action: ActionProp) => {
  switch (action.type) {
    case ACTION_TYPE.CHANGE_OCCUPATION:
      return { ...state, occupation: action.payload.occupation }
      break

    case ACTION_TYPE.SET_INITIAL_STATE:
      console.log("SET_INITIAL_STATE")
      return {
        ...state,
        occupation: action.payload.occupation,
        gender: action.payload.gender,
        birthplace: action.payload.birthplace,
        enrollementPeriod: action.payload.enrollementPeriod,
        enrolled: action.payload.enrolled,
      }
      break

    default:
      return state
      break
  }
}
