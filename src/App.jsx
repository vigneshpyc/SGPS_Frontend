import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import StudentLogin from './components/StudentLogin'
import FacultyLogin from './components/FacultyLogin'
import Maintanance from './components/Maintanance'
import StudentProfile from './components/StudentProfile'
import PassForm from './components/PassForm'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/studentlogin' element={<StudentLogin/>}/>
      <Route path='/facultylogin' element={<FacultyLogin/>}/>
      <Route path='/studentprofile' element={<StudentProfile/>}/>
      <Route path='bckfrmsprf' element={<StudentLogin/>}/>
      <Route path='/maintanance' element={<Maintanance/>}/>
      <Route path='/passform' element={<PassForm/>}/>
    </Routes>
    </>
  )
}

export default App
