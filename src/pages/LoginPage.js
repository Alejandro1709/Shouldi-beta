import React from 'react'
import { Link } from 'wouter'
import Input from '../components/Input'

function LoginPage() {
  return (
    <div className='flex flex-col items-center m-6 select-none'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-3xl font-bold text-center'>Welcome Back!</h1>
        <p className='text-center'>Login to your account</p>
        <span className='bg-red-200 p-1 rounded-md'>Some Error will show here...</span>
      </div>
      <form className='flex flex-col gap-4 w-full'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='email'>Email</label>
          <Input type='email' id='email' name='email' placeholder='youremail@email.com' />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='password'>Password</label>
          <Input type='password' id='password' name='password' placeholder='******' />
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