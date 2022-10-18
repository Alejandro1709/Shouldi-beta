import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL } from '../constants/userConstants'

export default function questionsReducer(state, action) {
  switch (action.type) {
  case LOGIN_USER:
  case REGISTER_USER:
    return { ...state, status: 'loading' }
  case LOGIN_USER_SUCCESS:
  case REGISTER_USER_SUCCESS:
    return { ...state, status: 'success', data: action.payload }
  case LOGIN_USER_FAIL:
  case REGISTER_USER_FAIL:
    return { ...state, status: 'error', error: action.payload }
  default:
    return state
  }
}