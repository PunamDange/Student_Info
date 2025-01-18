import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function StudentList() {
  const[students,setstudents]= useState([])
  function getStudentsFromDB(){
    axios.get('http://localhost:8000/students').then(
      (Response)=>{
        //console.log(Response.data)
        setstudents(Response.data)
      }
    ).catch(
      (error)=>{
        console.error(error)
      }
    )
  }
  useEffect(
    ()=>{
      getStudentsFromDB()
    },[]
  )
  return (
    <div className='container mt-2'style={{backgroundColor:"#20EEF6"}}>
        <h1 className='text-center text-primary'>Student List</h1>
        <table className='table text-center'>
          <thead>
            <tr>
              <th>Roll Number</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Grade</th>
              <th>Gender</th>
              <th>standerd</th>
              <th>City</th>
              <th>Update</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {
              students.map(
                (stu)=>{
                  return(
                    <tr key={stu.id}>
                      <td>{stu.roll}</td>
                      <td>{stu.first_name}</td>
                      <td>{stu.last_name}</td>
                      <td>{stu.grades}</td>
                      <td>{stu.gender}</td>
                      <td>{stu.standerd}</td>
                      <td>{stu.city}</td>
                      <td><NavLink to ={`/update/${stu.id}`}><i class="bi bi-pencil-square text-primary"></i></NavLink></td>
                      <td><NavLink to ={`/delete/${stu.id}`}><i class="bi bi-trash3 text-danger"></i></NavLink></td>
                    </tr>
                  )
                }
              )
            }
          </tbody>
        </table>
    </div>
  )
}

export default StudentList