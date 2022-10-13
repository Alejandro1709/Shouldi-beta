import React from 'react'

function QuestionCard() {
  return (
    <article className="flex select-none flex-col gap-4 md:rounded-md border md:shadow-md p-4">
      <div className="flex items-center gap-2 justify-between">
        <span className="text-sm text-teal-400">@alejandro.js</span>
        <p className="font-semibold text-sm md:text-lg text-center">Should i go to the beach tomorrow midnight?</p>
        <span className="text-sm text-gray-400">2 hours ago</span>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-center text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, beatae magnam incidunt temporibus odio molestias iste culpa libero delectus corporis!</p>
      </div>
      <div className="flex h-8 flex-row gap-6">
        <button className="flex-1 rounded bg-teal-400 text-center text-white hover:bg-teal-500">Yes</button>
        <button className="flex-1 rounded bg-red-400 text-center text-white hover:bg-red-500">No</button>
      </div>
    </article>
  )
}

export default QuestionCard