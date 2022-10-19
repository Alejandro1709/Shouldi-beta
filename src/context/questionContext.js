import React, { useEffect, createContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import questionsReducer from '../reducers/questionReducer'
import { handleFetchQuestions } from '../actions/questionActions'

const initialState = {
  status: 'idle',
  data: [],
  current: null,
  error: null,
}

const QuestionContext = createContext(initialState)
function QuestionProvider({ children }) {
  const [state, dispatch] = useReducer(questionsReducer, initialState)

  useEffect(() => {
    handleFetchQuestions(dispatch)
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
