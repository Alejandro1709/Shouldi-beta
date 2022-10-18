import React, { useEffect, createContext, useReducer } from 'react'
import userReducer from '../reducers/userReducer'
import PropTypes from 'prop-types'
import { LOGIN_USER_SUCCESS } from '../constants/userConstants'

const initialState = {
  status: 'idle',
  data: null,
  error: null,
}

const UserContext = createContext(initialState)

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState)

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem('user'))

    if (data) {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: data })
    }
  }, [])

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