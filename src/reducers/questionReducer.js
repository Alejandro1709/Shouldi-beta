import { FETCH_QUESTIONS, FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_ERROR} from '../constants/questionConstants'

export default function questionsReducer(state, action) {
  switch (action.type) {
  case FETCH_QUESTIONS:
    return { ...state, status: 'loading' }
  case FETCH_QUESTIONS_SUCCESS:
    return { ...state, status: 'success', data: action.payload }
  case FETCH_QUESTIONS_ERROR:
    return { ...state, status: 'error', error: action.payload }
  default:
    return state
  }
}