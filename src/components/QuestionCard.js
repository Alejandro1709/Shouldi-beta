import React, { useState, useContext } from 'react'
import moment from 'moment'
import { UserContext } from '../context/userContext'
import { handleDeleteQuestion } from '../actions/questionActions'
import PropTypes from 'prop-types'
import { Link } from 'wouter'
function QuestionCard({question}) {
  const { dispatch } = useContext(UserContext)

  const [isDeleting, setIsDeleting] = useState(false)
  const [error, setError] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const user = JSON.parse(sessionStorage.getItem('user'))

  let date = question.createdAt.substring(0, 10).replaceAll('-', '')

  function deleteQuestionHandler() {
    setIsDeleting(true)
    handleDeleteQuestion(question.slug, dispatch).then((data) => {
      if (data.status === 'fail') {
        setError(data.message)
        setIsDeleting(false)
        return
      }
      
      setSuccessMessage(data.message)
    }).catch((err) => {
      setIsDeleting(false)
      setError(err)
    })
  }

  return (
    <article className="flex select-none flex-col gap-4 md:rounded-md border md:shadow-md p-4">
      {isDeleting && <p className="text-center text-gray-500">Deleting...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {successMessage && <p className="text-center text-green-500">{successMessage}</p>}
      <div className="flex items-center gap-2 justify-between">
        <span className="text-sm text-teal-400">@{question.owner.username ? question.owner.username : 'username'}</span>
        <p className="font-semibold text-sm md:text-lg text-center">{question.title}</p>
        <span className="text-sm text-gray-400">
          {moment(date, 'YYYYMMDD').fromNow()}
        </span>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-center text-gray-500">{question.content}</p>
      </div>
      <div className="flex h-8 flex-row gap-6">
        {user.email === question.owner?.email ? <>
          <Link to={`/${question.slug}/edit`} className="flex-1 flex items-center justify-center rounded bg-teal-400 text-center text-white hover:bg-teal-500">Edit</Link>
          <button className="flex-1 rounded bg-red-400 text-center text-white hover:bg-red-500" onClick={deleteQuestionHandler}>Delete</button>
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