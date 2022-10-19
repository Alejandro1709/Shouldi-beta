import React, { useEffect, useContext, useState } from 'react'
import { handleFetchQuestion, handleUpdateQuestion } from '../actions/questionActions'
import { useLocation } from 'wouter'
import Input from '../components/Input'
import { QuestionContext } from '../context/questionContext'

function EditPage() {
  const { dispatch } = useContext(QuestionContext)

  const [formData, setFormData] = useState({
    title: '',
    content: ''
  })

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const [location, setLocation] = useLocation()

  const slug = location.split('/')[1]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.title === '' || formData.content === '') {
      setError('Please fill all the fields')
      return
    }

    setLoading(true)

    handleUpdateQuestion(slug, dispatch, formData).then((data) => {
      console.log(data)
      // if (data.status === 'fail' || data.status === 'error') {
      //   setError(data.message)
      //   setLoading(false)
      //   return
      // }
      setLoading(false)
      setLocation('/')
    })
  }

  useEffect(() => {
    // fetch question data
    handleFetchQuestion(dispatch, slug).then((data) => {
      setFormData({
        title: data.title || '',
        content: data.content || ''
      })
    })
  }, [dispatch])

  return (
    <div className='flex flex-col items-center m-6 select-none'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-3xl font-bold '>Edit Question</h1>
        {error ? <span className='bg-red-200 p-1 rounded-md'>{error}</span> : null}
        {loading ? <span className='bg-blue-200 p-1 rounded-md'>Loading...</span> : null}
      </div>
      <form className='flex flex-col gap-4 w-full' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2'>
          <label htmlFor='title'>Title</label>
          <Input type='text' id='title' name='title' placeholder='Should i learn React or Vue?' value={formData.title} onChange={handleChange} />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='content'>Content</label>
          <textarea className='p-2 border' name='content' id='content' placeholder='I am a beginner in web development and i want to learn a framework for building web apps. Which one should i learn first, React or Vue?' rows={4} value={formData.content} onChange={handleChange}></textarea>
        </div>
        <button className='bg-teal-400 p-2 rounded-md text-white hover:bg-teal-500 cursor-pointer' type='submit'>Update</button>
      </form>
    </div>
  )
}

export default EditPage