import {
  TOGGLE_DARKMODE,
  CHANGE_SIGN
} from './action_types'

export const toggleDarkMode = () => ({
  type: TOGGLE_DARKMODE
}
)
export const changeSign = msg => ({
  type: CHANGE_SIGN,
  payload: msg
})
