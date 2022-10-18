import React, { createContext, useReducer } from 'react'
import userReducer from '../reducers/userReducer'
import PropTypes from 'prop-types'

const initialState = {
  status: 'idle',
  user: null,
}

const UserContext = createContext(initialState)

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState)
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node,
}

export { UserContext, UserProvider }