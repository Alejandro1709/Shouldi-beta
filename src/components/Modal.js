import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import ModalContext from '../context/modalContext'

function Modal({children}) {
  const {setIsModalOpen} = useContext(ModalContext)
  
  return (
    <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70' onClick={() => setIsModalOpen(false)}>{children}</div>
  )
}

export default Modal

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func
}