import React from 'react'
import Navbar from './components/Navbar'
import QuestionCard from './components/QuestionCard'

function App() {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <div className='flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4'>
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
      </div>
    </div>
  )
}

export default App
