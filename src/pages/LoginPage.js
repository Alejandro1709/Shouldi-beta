import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'wouter'
import { handleLogin } from '../actions/userActions'
import Input from '../components/Input'
import { QuestionContext } from '../context/questionContext'

function LoginPage() {
  const { dispatch } = useContext(QuestionContext)

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const [, setLocation] = useLocation()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setLoading(false)
    setError(null)

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields')
      return
    }

    setLoading(true)

    handleLogin(formData, dispatch).then((data) => {
      if (data.status === 'fail') {
        setError(data.message)
        setLoading(false)
        return
      }
      setLocation('/')
    }).catch((err) => {
      setError(err.message)
      setLoading(false)
    })
  }

  return (
    <div className='flex flex-col items-center m-6 select-none'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-3xl font-bold text-center'>Welcome Back!</h1>
        <p className='text-center'>Login to your account</p>
        {error ? <span className='bg-red-200 p-1 rounded-md'>{error}</span> : null}
        {loading ? <span className='bg-blue-200 p-1 rounded-md'>Loading...</span> : null}
      </div>
      <form className='flex flex-col gap-4 w-full' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2'>
          <label htmlFor='email'>Email</label>
          <Input type='email' id='email' name='email' placeholder='youremail@email.com' value={formData.email} onChange={handleChange} />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='password'>Password</label>
          <Input type='password' id='password' name='password' placeholder='******' value={formData.password} onChange={handleChange} />
        </div>
        <button className='bg-teal-400 p-2 rounded-md text-white hover:bg-teal-500 cursor-pointer' type='submit'>Login</button>
      </form>
      <div className='mt-4'>
        <p>Don&apos;t have an account? <Link className='text-teal-500' to='/register'>Register here</Link></p>
      </div>
    </div>
  )
}

export default LoginPage