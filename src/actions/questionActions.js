export const handleFetchQuestions = async (dispatch) => {
  dispatch({ type: 'FETCH_QUESTIONS' })

  try {
    const response = await fetch('https://shouldi-api.onrender.com/api/v1/questions')
    const data = await response.json()

    dispatch({ type: 'FETCH_QUESTIONS_SUCCESS', payload: data })
  } catch (err) {
    dispatch({ type: 'FETCH_QUESTIONS_ERROR', payload: err })
  }
}