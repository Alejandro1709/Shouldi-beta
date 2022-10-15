import React, { useEffect, createContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import questionsReducer from '../reducers/questionReducer'

const initialState = {
  status: 'idle',
  data: [],
  error: null,
}

const QuestionContext = createContext(initialState)
function QuestionProvider({ children }) {
  const [state, dispatch] = useReducer(questionsReducer, initialState)

  useEffect(() => {
    dispatch({ type: 'FETCH_QUESTIONS' })

    fetch('https://shouldi-api.onrender.com/api/v1/questions').then((res) => res.json()).then((data) => {
      dispatch({ type: 'FETCH_QUESTIONS_SUCCESS', payload: data })
    }).catch((err) => {
      dispatch({ type: 'FETCH_QUESTIONS_ERROR', payload: err })
    })
  }, [])

  return (
    <QuestionContext.Provider value={{state, dispatch}}>
      {children}
    </QuestionContext.Provider>
  )
}

QuestionProvider.propTypes = {
  children: PropTypes.node,
}

export { QuestionContext, QuestionProvider }
