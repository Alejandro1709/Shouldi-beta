import React, { useContext, useRef } from 'react'
import ModalContext from '../context/modalContext'

function CreateQuestionForm() {
  const {setIsModalOpen} = useContext(ModalContext)
  const buttonRef = useRef()

  function handleCloseModal(e) {
    if (e.target.dataset.id === buttonRef.current.dataset.id) {
      setIsModalOpen(false)
    }
  }

  return (
    <div className='bg-white md:w-3/12 w-3/4 rounded-lg'>
      <div className='flex flex-col gap-4 p-6 items-start'>
        <button className='p-2 bg-teal-100 hover:bg-teal-200 rounded-lg' data-id='close-btn' onClick={handleCloseModal} ref={buttonRef}>Close</button>
        <form className='flex flex-col gap-4 w-full'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='title'>Title</label>
            <input className='p-2 border' type='text' name='title' id='title' placeholder='Should i learn React or Vue?' />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='content'>Content</label>
            <textarea className='p-2 border' name='content' id='content' placeholder='I am a beginner in web development and i want to learn a framework for building web apps. Which one should i learn first, React or Vue?' rows={4}></textarea>
          </div>
          <button className='bg-teal-400 p-2 rounded-md text-white hover:bg-teal-500' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateQuestionForm