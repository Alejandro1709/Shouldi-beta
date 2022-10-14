import React, { createContext, useReducer } from 'react'
import { questions } from '../data'
import PropTypes from 'prop-types'
import questionsReducer from '../reducers/questionReducer'

const initialState = {
  status: 'idle',
  questions: questions,
  error: null,
}

const QuestionContext = createContext(initialState)

function QuestionProvider({ children }) {
  const [state, dispatch] = useReducer(questionsReducer, initialState)
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
