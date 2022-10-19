import { BASE_URL } from '../config'
import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL, LOGOUT_USER } from '../constants/userConstants'

export const handleLogin = (formData, dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: LOGIN_USER })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(formData),
    }

    fetch(`${BASE_URL}/api/v1/auth/login`, config)
      .then((res) => res.json())
      .then((data) => {
        sessionStorage.setItem('user', JSON.stringify(data))
        dispatch({ type: LOGIN_USER_SUCCESS, payload: data })
        resolve(data)
      })
      .catch((error) => {
        console.error(error)
        dispatch({ type: LOGIN_USER_FAIL, payload: error })
        reject(error)
      })
  })
}

export const handleRegister = (formData, dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: REGISTER_USER })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(formData),
    }

    fetch(`${BASE_URL}/api/v1/users/`, config)
      .then((res) => res.json())
      .then((data) => {
        sessionStorage.setItem('user', JSON.stringify(data))
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data })
        resolve(data)
      })
      .catch((error) => {
        console.error(error)
        dispatch({ type: REGISTER_USER_FAIL, payload: error })
        reject(error)
      })
  })
}

export const handleLogout = (dispatch) => {
  sessionStorage.removeItem('user')

  dispatch({ type: LOGOUT_USER, payload: { data: null} })
}
