import React from 'react'
import QuestionCard from './QuestionCard'

function QuestionList() {
  return (
    <div className='flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4 '>
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
    </div>
  )
}

export default QuestionList