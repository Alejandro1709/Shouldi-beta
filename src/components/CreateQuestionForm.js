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
    <div className='bg-white h-2/4 w-3/4 rounded-lg'>
      <div className='p-6'>
        <button data-id='close-btn' onClick={handleCloseModal} ref={buttonRef}>Close</button>
      </div>
    </div>
  )
}

export default CreateQuestionForm