import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './pages/authentication/SignUp'
import Login from './pages/authentication/Login'
import Home from './pages/authorizedPages/Home'
import MyTasks from './pages/authorizedPages/MyTasks'
import Task from './pages/authorizedPages/Task'
import CreateTask from './pages/authorizedPages/CreateTask'
import ProtectedRoute from './components/ProtectedRoute'
import UpdateForm from './components/UpdateForm'

function App() {

    return (
      <>
        <Router>
          <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/mytasks" element={<ProtectedRoute><MyTasks /></ProtectedRoute>} />
          <Route path="/createtask" element={<ProtectedRoute><CreateTask /></ProtectedRoute>} />
          <Route path="/updatetask" element={<ProtectedRoute><UpdateForm /></ProtectedRoute>} />
          <Route path="/task/:id" element={<ProtectedRoute><Task /></ProtectedRoute>} />
          </Routes>
        </Router>
      </>
    )
  }


export default App
