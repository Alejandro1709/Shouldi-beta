import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { QuestionProvider } from './context/questionContext'
import { UserProvider } from './context/userContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <UserProvider>
      <QuestionProvider>
        <App />
      </QuestionProvider>
    </UserProvider>
  </React.StrictMode>
)