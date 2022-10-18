import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'wouter'
import { handleRegister } from '../actions/userActions'
import Input from '../components/Input'
import { QuestionContext } from '../context/questionContext'

function RegisterPage() {
  const { dispatch } = useContext(QuestionContext)

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const[, setLocation] = useLocation()

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

    if (!formData.name || !formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setLoading(true)

    handleRegister(formData, dispatch).then((data) => {
      if (data.status === 'fail' || data.status === 'error') {
        setError(data.message)
        setLoading(false)
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
        <h1 className='text-3xl font-bold text-center'>Welcome!</h1>
        <p className='text-center'>Create your account</p>
        {error ? <span className='bg-red-200 p-1 rounded-md'>{error}</span> : null}
        {loading ? <span className='bg-blue-200 p-1 rounded-md'>Loading...</span> : null}
      </div>
      <form className='flex flex-col gap-4 w-full' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2'>
          <label htmlFor='name'>Name</label>
          <Input id='name' name='name' placeholder='John Doe' value={formData.name} onChange={handleChange} />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='username'>Username</label>
          <Input id='username' name='username' placeholder='johndoe87' value={formData.username} onChange={handleChange}/>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='email'>Email</label>
          <Input type='email' id='email' name='email' placeholder='youremail@email.com' value={formData.email} onChange={handleChange}/>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='password'>Password</label>
          <Input type='password' id='password' name='password' placeholder='******' value={formData.password} onChange={handleChange}/>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='passwordConfirm'>Confirm Password</label>
          <Input type='password' name='confirmPassword' id='passwordConfirm' placeholder='******' value={formData.confirmPassword} onChange={handleChange} />
        </div>
        <button className='bg-teal-400 p-2 rounded-md text-white hover:bg-teal-500 cursor-pointer' type='submit'>Create Account</button>
      </form>
      <div className='mt-4'>
        <p>Already have an account? <Link className='text-teal-500' to='/login'>login here</Link></p>
      </div>
    </div>
  )
}

export default RegisterPage