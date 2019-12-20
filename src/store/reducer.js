import {
  TOGGLE_DARKMODE,
  CHANGE_SIGN
} from './action_types'

const initialState = {
  isDarkMode: false,
  sign: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARKMODE:
      return { ...state, isDarkMode: !state.isDarkMode };
    case CHANGE_SIGN:
      return { ...state, sign: action.payload}
    default:
      return state;
  }
}
