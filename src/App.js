import React, { useState } from 'react'
import { Route } from 'wouter'
import { ModalProvider } from './context/modalContext'
import FeedPage from './pages/FeedPage'
import Container from './components/Container'
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import CreateQuestionForm from './components/CreateQuestionForm'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import EditPage from './pages/EditPage'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Container>
      <ModalProvider value={{ isModalOpen, setIsModalOpen }}>
        {isModalOpen ? <Modal>
          <CreateQuestionForm />
        </Modal> : null}
        <Navbar />
        <div className='md:mt-4'>
          <Route path='/' component={FeedPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/:slug/edit' component={EditPage}/>
        </div>
      </ModalProvider>
    </Container>
  )
}

export default App
