import React from 'react'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import { Route, Routes } from 'react-router'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <button onClick={() => toast.success("Congrats")} className="btn btn-primary mb-4">Test Button</button>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/note/:id" element={<NoteDetailPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App