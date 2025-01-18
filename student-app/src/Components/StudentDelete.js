import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function StudentDelete() {
  const {stuId} = useParams()
  const nav = useNavigate()
  const [student,setstudent] = useState({})
  function getStudentsFromDB(){
    axios.get(`http://localhost:8000/students/${stuId}`).then(
      (response)=>{
        setstudent(response.data)
      }
    ) .catch(
      (error) =>{
        console.error(error)
      }
    )
  }
  useEffect(
    ()=>{
      getStudentsFromDB()
    },[]
  )
  function deleteStudentFromDB(){
    axios.delete(`http://localhost:8000/students/${stuId}`).then(
      (response)=>{
        nav('/list')
      }
    ).catch(
      (error)=>{
        console.error(error)
      }
    )
  }
  return (
    <div className='container'>
        <h1 className='text-center text-primary'>Student Delete Confirm</h1>
        <p className='fw-bold text-center'>Are you sure you want to delete the student with <span className='text-danger'>
          roll number{student.roll} and Full Name : {student.first_name} {student.last_name}?</span>
        </p>
        <button  type ='button' onClick = {deleteStudentFromDB} className='btn btn-outline-danger col-sm-5'>YES</button>
        <NavLink to ={'/list'}className={'btn btn-outline-warning col-sm-5 float-end'}>NO</NavLink>
    </div>
  )
}
export default StudentDelete