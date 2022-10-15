import { FETCH_QUESTIONS, CREATE_QUESTION, FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_ERROR, CREATE_QUESTION_FAIL, CREATE_QUESTION_SUCCESS } from '../constants/questionConstants'

export default function questionsReducer(state, action) {
  switch (action.type) {
  case FETCH_QUESTIONS:
  case CREATE_QUESTION:
    return { ...state, status: 'loading' }
  case FETCH_QUESTIONS_SUCCESS:
    return { ...state, status: 'success', data: action.payload }
  case CREATE_QUESTION_SUCCESS:
    return { ...state, status: 'success', data: action.payload }
  case FETCH_QUESTIONS_ERROR:
  case CREATE_QUESTION_FAIL:
    return { ...state, status: 'error', error: action.payload }
  default:
    return state
  }
}