import React, { useState } from 'react'
import { questions } from '../data'
import QuestionCard from './QuestionCard'

function QuestionList() {
  const [allQuestions] = useState(questions)
  return (
    <div className='flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4 '>
      {allQuestions.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  )
}

export default QuestionList