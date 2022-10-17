import React from 'react'
import { Link } from 'wouter'

function RegisterPage() {
  return (
    <div className='flex flex-col items-center m-6 select-none'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-3xl font-bold text-center'>Welcome!</h1>
        <p className='text-center'>Create your account</p>
        <span className='bg-red-200 p-1 rounded-md'>Some Error will show here...</span>
      </div>
      <form className='flex flex-col gap-4 w-full'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='name'>Name</label>
          <input className='p-2 rounded-md' type='text' name='name' id='name' placeholder='John Doe'/>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='username'>Username</label>
          <input className='p-2 rounded-md' type='text' name='username' id='username' placeholder='johndoe87'/>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='email'>Email</label>
          <input className='p-2 rounded-md' type='email' name='email' id='email' placeholder='youremail@email.com'/>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='password'>Password</label>
          <input className='p-2 rounded-md' type='password' name='password' id='password' placeholder='******'/>
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