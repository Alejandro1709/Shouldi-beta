import { FETCH_QUESTIONS, CREATE_QUESTION, FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_ERROR, CREATE_QUESTION_FAIL, CREATE_QUESTION_SUCCESS } from '../constants/questionConstants'

export const handleFetchQuestions = async (dispatch) => {
  dispatch({ type: FETCH_QUESTIONS })

  try {
    const response = await fetch('https://shouldi-api.onrender.com/api/v1/questions')
    const data = await response.json()

    dispatch({ type: FETCH_QUESTIONS_SUCCESS, payload: data })
  } catch (err) {
    dispatch({ type: FETCH_QUESTIONS_ERROR, payload: err })
  }
}

export const handleCreateQuestion = async (dataa, dispatch) => {
  dispatch({ type: CREATE_QUESTION })

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(dataa)
    }

    const response = await fetch('https://shouldi-api.onrender.com/api/v1/questions', config)
    const data = await response.json()

    dispatch({ type: CREATE_QUESTION_SUCCESS, payload: [data] })

    return data

  } catch (error) {
    console.log(error)
    dispatch({ type: CREATE_QUESTION_FAIL})
  }
}