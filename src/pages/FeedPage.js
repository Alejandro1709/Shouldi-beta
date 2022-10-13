import React from 'react'
import QuestionCard from '../components/QuestionCard'

function FeedPage() {
  return (
    <div className='flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4 '>
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
    </div>
  )
}

export default FeedPage