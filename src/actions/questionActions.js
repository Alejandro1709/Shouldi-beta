import { 
  FETCH_QUESTIONS,
  CREATE_QUESTION,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_ERROR,
  CREATE_QUESTION_FAIL,
  CREATE_QUESTION_SUCCESS,
  DELETE_QUESTION,
  DELETE_QUESTION_SUCCESS,
  DELETE_QUESTION_FAIL,
  UPDATE_QUESTION,
  UPDATE_QUESTION_SUCCESS,
  UPDATE_QUESTION_FAIL,
  FETCH_QUESTION,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_ERROR, 
} from '../constants/questionConstants'
import { BASE_URL } from '../config'

export const handleFetchQuestions = async (dispatch) => {
  dispatch({ type: FETCH_QUESTIONS })

  try {
    const response = await fetch(`${BASE_URL}/api/v1/questions`)
    const data = await response.json()

    dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: data })
  } catch (err) {
    dispatch({ type: FETCH_QUESTIONS_ERROR, payload: err })
  }
}

export const handleFetchQuestion = async (dispatch, slug) => {
  dispatch({ type: FETCH_QUESTION })

  try {
    const response = await fetch(`${BASE_URL}/api/v1/questions/${slug}`)
    const data = await response.json()

    dispatch({ type: FETCH_QUESTION_SUCCESS, payload: data })

    return data
  } catch (err) {
    dispatch({ type: FETCH_QUESTION_ERROR, payload: err })
  }
}

export const handleCreateQuestion = async (dataa, dispatch, state) => {
  dispatch({ type: CREATE_QUESTION })

  const user = JSON.parse(sessionStorage.getItem('user'))

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      },
      method: 'POST',
      body: JSON.stringify(dataa)
    }

    const response = await fetch(`${BASE_URL}/api/v1/questions`, config)
    const data = await response.json()

    dispatch({ type: CREATE_QUESTION_SUCCESS, payload: [...state.data, data] })

    return data

  } catch (error) {
    console.log(error)
    dispatch({ type: CREATE_QUESTION_FAIL})
  }
}

export const handleUpdateQuestion = async (slug, dispatch, formData, state) => {
  dispatch({ type: UPDATE_QUESTION })

  const user = JSON.parse(sessionStorage.getItem('user'))

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      },
      method: 'PATCH',
      body: JSON.stringify(formData)
    }

    const response = await fetch(`${BASE_URL}/api/v1/questions/${slug}`, config)
    const data = await response.json()

    dispatch({ type: UPDATE_QUESTION_SUCCESS, payload: [...state.data, data] })

    return data

  } catch (error) {
    console.log(error)
    dispatch({ type: UPDATE_QUESTION_FAIL})
  }
}

export const handleDeleteQuestion = async (slug, dispatch) => {
  dispatch({ type: DELETE_QUESTION })

  const user = JSON.parse(sessionStorage.getItem('user'))

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      },
      method: 'DELETE',
    }

    const response = await fetch(`${BASE_URL}/api/v1/questions/${slug}`, config)
    const data = await response.json()

    dispatch({ type: DELETE_QUESTION_SUCCESS, payload: data })

    return data

  } catch (error) {
    console.log(error)
    dispatch({ type: DELETE_QUESTION_FAIL})
  }
}