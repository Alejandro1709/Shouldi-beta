import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'
import PropTypes from 'prop-types'
function QuestionCard({question}) {
  const { state } = useContext(UserContext)

  return (
    <article className="flex select-none flex-col gap-4 md:rounded-md border md:shadow-md p-4">
      <div className="flex items-center gap-2 justify-between">
        <span className="text-sm text-teal-400">@{question.owner.username ? question.owner.username : 'username'}</span>
        <p className="font-semibold text-sm md:text-lg text-center">{question.title}</p>
        <span className="text-sm text-gray-400">2 hours ago</span>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-center text-gray-500">{question.content}</p>
      </div>
      <div className="flex h-8 flex-row gap-6">
        {state.data.email === question.owner.email ? <>
          <button className="flex-1 rounded bg-teal-400 text-center text-white hover:bg-teal-500">Edit</button>
          <button className="flex-1 rounded bg-red-400 text-center text-white hover:bg-red-500">Delete</button>
        </> : <>
          <button className="flex-1 rounded bg-teal-400 text-center text-white hover:bg-teal-500">Yes ({question.upvotes})</button>
          <button className="flex-1 rounded bg-red-400 text-center text-white hover:bg-red-500">No ({question.downvotes})</button></>}
      </div>
    </article>
  )
}

export default QuestionCard

QuestionCard.propTypes = {
  question: PropTypes.object
}