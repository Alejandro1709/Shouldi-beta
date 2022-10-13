import React from 'react'
import { Route } from 'wouter'
import FeedPage from './pages/FeedPage'
import Container from './components/Container'
import Navbar from './components/Navbar'

function App() {
  return (
    <Container>
      <Navbar />
      <div className='md:mt-4'>
        <Route path='/' component={FeedPage} />
        <Route path='/account'>Profile</Route>
      </div>
    </Container>
  )
}

export default App
