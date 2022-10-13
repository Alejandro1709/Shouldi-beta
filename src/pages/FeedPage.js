import React from 'react'
import QuestionList from '../components/QuestionList'

function FeedPage() {
  return (
    <div className=''>
      <div className='flex justify-center items-center my-4'>
        <button className='border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white font-bold p-4 w-full mx-4 md:mx-0 rounded-md cursor-pointer'>Ask Question</button>
      </div>
      <QuestionList />
    </div>
  )
}

export default FeedPage