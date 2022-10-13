import React, { useState } from 'react'
import { Route } from 'wouter'
import FeedPage from './pages/FeedPage'
import Container from './components/Container'
import Navbar from './components/Navbar'
import Modal from './components/Modal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Container>
      {isModalOpen ? <Modal onClose={() => setIsModalOpen(false)}>Lok</Modal> : null}
      <Navbar />
      <div className='md:mt-4'>
        <Route path='/' component={FeedPage} />
        <Route path='/account'>Profile</Route>
      </div>
    </Container>
  )
}

export default App
