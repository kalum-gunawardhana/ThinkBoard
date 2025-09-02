import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import DetailPage from './pages/NoteDetailPage'
import { toast } from 'react-hot-toast'

const App = () => {
  return (
    <div className='relative h-full w-full' data-theme="dark">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<DetailPage />} />
      </Routes>
    </div>
  )
}

export default App
