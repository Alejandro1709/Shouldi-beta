import React, { useEffect, useContext } from 'react'
import { useLocation } from 'wouter'
import QuestionList from '../components/QuestionList'
import ModalContext from '../context/modalContext'

function FeedPage() {
  const { setIsModalOpen } = useContext(ModalContext)
  const [, setLocation] = useLocation()

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'))

    if (!user) {
      setLocation('/login')
    }
  }, [])
  
  return (
    <>
      <div className='flex justify-center items-center my-4'>
        <button className='border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white font-bold p-4 w-full mx-4 md:mx-0 rounded-md cursor-pointer' onClick={() => setIsModalOpen(true)}>Ask Question</button>
      </div>
      <QuestionList />
    </>
  )
}

export default FeedPage