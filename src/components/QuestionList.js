import React, { useContext } from 'react'
import { QuestionContext } from '../context/questionContext'
import QuestionCard from './QuestionCard'

function QuestionList() {
  const { state } = useContext(QuestionContext)

  console.log(state)

  if (state.status === 'loading') return <p>Loading...</p>

  return (
    <div className='flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4 '>
      {state.data ? state.data.map((question) => (
        <QuestionCard key={question._id} question={question} />
      )) : <p>No data to show</p>}
    </div>
  )
}

export default QuestionList