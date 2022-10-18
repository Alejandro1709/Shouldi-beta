import React, { useState, useContext, useRef } from 'react'
import { handleCreateQuestion } from '../actions/questionActions'
import ModalContext from '../context/modalContext'
import { QuestionContext } from '../context/questionContext'

function CreateQuestionForm() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    upvotes: 1,
    downvotes: 1,
  })

  const [questionState, setQuestionState] = useState({
    status: 'idle',
    isSubmitting: false,
    error: null
  })

  const { setIsModalOpen } = useContext(ModalContext)
  const { state, dispatch } = useContext(QuestionContext)

  const buttonRef = useRef()

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleCloseModal(e) {
    if (e.target.dataset.id === buttonRef.current.dataset.id) {
      setIsModalOpen(false)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!formData.title || !formData.content) {
      setQuestionState({
        status: 'error',
        error: 'Please fill out all fields'
      })
      return
    }

    setQuestionState({ ...questionState, isSubmitting: true })

    handleCreateQuestion(formData, dispatch, state).then((data) => {
      if (data.status === 'fail') {
        setQuestionState({ status: 'error', error: data.message })
        return
      }
      console.log(data)
      setIsModalOpen(false)
    }).catch((err) => {
      console.log(err)
      setQuestionState({ status: 'error', error: err.message })
    })

  }

  return (
    <div className='bg-white md:w-3/12 w-3/4 rounded-lg'>
      {questionState.status === 'error' ? <p className='text-red-500'>{questionState.error}</p> : null}
      <div className='flex flex-col gap-4 p-6 items-start'>
        <button className='p-2 bg-teal-100 hover:bg-teal-200 rounded-lg' data-id='close-btn' onClick={handleCloseModal} ref={buttonRef}>Close</button>
        <form className='flex flex-col gap-4 w-full' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-2'>
            <label htmlFor='title'>Title</label>
            <input className='p-2 border' type='text' name='title' id='title' placeholder='Should i learn React or Vue?' value={formData.title} onChange={handleChange} />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='content'>Content</label>
            <textarea className='p-2 border' name='content' id='content' placeholder='I am a beginner in web development and i want to learn a framework for building web apps. Which one should i learn first, React or Vue?' rows={4} value={formData.content} onChange={handleChange}></textarea>
          </div>
          <button className='bg-teal-400 p-2 rounded-md text-white hover:bg-teal-500' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateQuestionForm