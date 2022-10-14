import React, {useContext} from 'react'
import { QuestionContext } from '../context/questionContext'
import QuestionCard from './QuestionCard'

function QuestionList() {
  const {state} = useContext(QuestionContext)
  return (
    <div className='flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4 '>
      {state.questions.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </div>
  )
}

export default QuestionList