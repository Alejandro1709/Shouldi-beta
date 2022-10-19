import { 
  FETCH_QUESTIONS,
  CREATE_QUESTION,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_ERROR,
  FETCH_QUESTION,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_ERROR,
  CREATE_QUESTION_FAIL,
  CREATE_QUESTION_SUCCESS,
  DELETE_QUESTION,
  DELETE_QUESTION_SUCCESS,
  DELETE_QUESTION_FAIL,
  UPDATE_QUESTION,
  UPDATE_QUESTION_SUCCESS,
  UPDATE_QUESTION_FAIL,
} from '../constants/questionConstants'

export default function questionsReducer(state, action) {
  switch (action.type) {
  case FETCH_QUESTIONS:
  case FETCH_QUESTION:
  case CREATE_QUESTION:
  case DELETE_QUESTION:
  case UPDATE_QUESTION:
    return { ...state, status: 'loading' }
  case FETCH_QUESTIONS_SUCCESS:
  case CREATE_QUESTION_SUCCESS:
  case DELETE_QUESTION_SUCCESS:
  case UPDATE_QUESTION_SUCCESS:
    return { ...state, status: 'success', data: action.payload }
  case FETCH_QUESTION_SUCCESS:
    return { ...state, status: 'success', current: action.payload }
  case FETCH_QUESTIONS_ERROR:
  case FETCH_QUESTION_ERROR:
  case CREATE_QUESTION_FAIL:
  case DELETE_QUESTION_FAIL:
  case UPDATE_QUESTION_FAIL:
    return { ...state, status: 'error', error: action.payload }
  default:
    return state
  }
}