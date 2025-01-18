import React from 'react'
import { Route,Routes } from 'react-router-dom'
import StudentCreate from '../Components/StudentCreate'
import StudentList from '../Components/StudentList'
import StudentUpdate from '../Components/StudentUpdate'
import StudentDelete from '../Components/StudentDelete'

function StudentAppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<StudentCreate/>}></Route>
        <Route path='/create' element={<StudentCreate/>}></Route>
        <Route path='/list' element={<StudentList/>}></Route>
        <Route path='/update/:stuId' element={<StudentUpdate/>}></Route>
        <Route path='/delete/:stuId' element={<StudentDelete/>}></Route>
    </Routes>
  )
}

export default StudentAppRoutes