import React from 'react'
import Container from './components/Container'
import Navbar from './components/Navbar'
import QuestionCard from './components/QuestionCard'

function App() {
  return (
    <Container>
      <Navbar />
      <div className='flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4 md:mt-4'>
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
      </div>
    </Container>
  )
}

export default App
