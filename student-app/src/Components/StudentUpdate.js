import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

function StudentUpdate() {
  const {stuId} = useParams() // to extract the value of path parameter
  const{register,handleSubmit,formState: {errors},reset,setValue}=useForm()
  const nav =useNavigate()
  //alert(stuId)
  function getStudentsFromDB(){
    axios.get(`http://localhost:8000/students/${stuId}`).then(
      (Response)=>{
        const student = Response.data
        setValue('first_name',student.first_name) // setvalue is used to set the initial value to a field
        setValue('last_name',student.last_name)
        setValue('roll',student.roll)
        setValue('gender',student.gender)
        setValue('grades',student.grades)
        setValue('city',student.city)
        setValue('standerd',student.standerd)
      }
    ).catch(
      (error)=>{
        console.error(error)
      }
    )
  }
  function updatestudent(data){ // to update the data of student in the database.
    axios.patch(`http://localhost:8000/students/${stuId}`,data).then(
      (Response) =>{
        //alert('record uodated')
        nav('/list')
      }
    ).catch(
      (error)=>{
        console.error(error)
      }
    )
  }
  useEffect(
    ()=>{
      getStudentsFromDB() // calling the function to fetch the record of student at the time of rendering
    },[]
  )
  return (
    <div className='container mx-auto w-50 mt-2' style={{backgroundColor:"#20EEF6"}}>
        <h1 className='text-center text-primary'>Student Update Form</h1>
        <form onSubmit={handleSubmit(updatestudent)}>
            <div className='row'>
                <label className='col-sm-4 fs-3'>First Name :</label>
                <input type='text'{...register('first_name',{
                    required:{
                        value:true,
                        message: "First Name is required"
                    }
                })}className='col-sm-8 form-control w-50'/>
                <p className='text-danger fw-bold'></p>
            </div>
            <div className='row mt-2'>
                <label className='col-sm-4 fs-3'>Last Name :</label>
                <input type='text'{...register('last_name',{
                    required:{
                        value:true,
                        message:"Last Name is required"
                    }
                })}className='col-sm-8 form-control w-50'/>
            </div>
            <div className='row mt-2'>
                <label className='col-sm-4 fs-3'>Roll Number :</label>
                <input type='number'{...register('roll',{
                    required:{
                        value:true,
                        message:"Roll Number is required"
                    }
                })}className='col-sm-8 form-control w-50'/>
            </div>
            <div className='row mt-2'>
                <label className='col-sm-4 fs-3'>City :</label>
                <input type='text'{...register('city',{
                    required:{
                        value:true,
                        message:"City is required"
                    }
                })}className='col-sm-8 form-control w-50'/>
            </div>
            <div className='row mt-2'>
                <label className='col-sm-4 fs-3'>Grades :</label>
                <select className='col-sm-4 form-select w-50'{...register('grades',{
                    required:{
                        value:true,
                        message:"Please select grade"
                    }
                })}>
                    <option value={''}>Please select grade</option>
                    <option value={'O'}>O</option>
                    <option value={'A'}>A</option>
                    <option value={'B'}>B</option>
                    <option value={'C'}>C</option>
                    <option value={'D'}>D</option>
                    <option value={'F'}>F</option>
                </select>
            </div>
            <div className='row mt-2'>
                <label className='col-sm-4 fs-3'>Gender :</label>
                <div className='col-sm-4'>
                    <div className='form-check'>
                        <input type='radio' id='gender'{...register('gender',{
                    required:{
                        value:true,
                        message:"Please select gender"
                    }
                })} value='male'className='form-check-input'/>
                        <label className='form-check-label'>Male</label>
                    </div>
                    <div className='form-check'>   
                        <input type='radio' id='gender'{...register('gender',{
                    required:{
                        value:true,
                        message:"Please select gender"
                    }
                })} value='female'className='form-check-input'/>
                        <label  className='form-check-label'>Female</label>
                    </div>
                    <div className='form-check'>
                        <input type='radio' id='gender'{...register('gender',{
                    required:{
                        value:true,
                        message:"Please select gender"
                    }
                })} value='other'className='form-check-input'/>
                        <label  className='form-check-label'>Other</label>
                    </div>
                </div>
            </div>
            <div className='row mt-2'>
                <label className='col-sm-4 fs-3'>Standerd :</label>
                <input type='text'{...register('standerd',{
                    required:{
                        value:true,
                        message:"Standerd is required"
                    }
                })}className='col-sm-4 form-control w-50' />
            </div>
            <button className='btn btn-outline-success col-sm-5 mt-2 mb-2'type='submit'>Submit</button>
            <button className='btn btn-outline-warning col-sm-5 float-end mt-2 mb-2'type='button'onClick={()=>{reset()}}>Reset</button>
        </form>
    </div>
  )
}

export default StudentUpdate