import React from 'react'
import QuestionCard from './components/QuestionCard'

function App() {
  return (
    <div className='container mx-auto'>
      <h1>Hello</h1>
      <div className='flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4'>
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
      </div>
    </div>
  )
}

export default App
