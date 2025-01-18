import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function StudentCreate() {
    const {register,handleSubmit, reset, formState:{errors}} = useForm()
    const nav = useNavigate()
    function saveStudentToDB(data){
        //console.log("form is submitted")
        console.log(data)
        axios.post("http://localhost:8000/students",data).then(
            (response)=>{
                console.log(response)
                nav('/list')
            }
        ) .catch((error)=>{
            console.error(error)
        })
    }
  return (
    <div className='container mx-auto w-50 mt-2' style={{backgroundColor:"#20EEF6"}}>
        <h1 className='text-center text-primary'>Student Form</h1>
        <form onSubmit={handleSubmit(saveStudentToDB)}>
            <div className='row'>
                <label className='col-sm-4 fs-3'>First Name :</label>
                <input type='text'{...register('first_name',{
                    required:{
                        value:true,
                        message: "First Name is required"
                    }
                })}className='col-sm-8 form-control w-50'/>
                {errors.first_name&&<p className='text-danger fw-bold'>{errors.first_name.message}</p>}
            </div>
            <div className='row mt-2'>
                <label className='col-sm-4 fs-3'>Last Name :</label>
                <input type='text'{...register('last_name',{
                    required:{
                        value:true,
                        message:"Last Name is required"
                    }
                })}className='col-sm-8 form-control w-50'/>
                {errors.last_name&&<p className='text-danger fw-bold'>{errors.last_name.message}</p>}
            </div>
            <div className='row mt-2'>
                <label className='col-sm-4 fs-3'>Roll Number :</label>
                <input type='number'{...register('roll',{
                    required:{
                        value:true,
                        message:"Roll Number is required"
                    }
                })}className='col-sm-8 form-control w-50'/>
                {errors.roll&&<p className='text-danger fw-bold'>{errors.roll.message}</p>}
            </div>
            <div className='row mt-2'>
                <label className='col-sm-4 fs-3'>City :</label>
                <input type='text'{...register('city',{
                    required:{
                        value:true,
                        message:"City is required"
                    }
                })}className='col-sm-8 form-control w-50'/>
                {errors.city&&<p className='text-danger fw-bold'>{errors.city.message}</p>}
            </div>
            <div className='row mt-2'>
                <label className='col-sm-4 fs-3'>Grades :</label>
                <select className='col-sm-4 form-select w-50'{...register('grades',{
                    required:{
                        value:true,
                        message:"Please select grades"
                    }
                })}>
                    <option value={''}>Please select grades</option>
                    <option value={'O'}>O</option>
                    <option value={'A'}>A</option>
                    <option value={'B'}>B</option>
                    <option value={'C'}>C</option>
                    <option value={'D'}>D</option>
                    <option value={'F'}>F</option>
                </select>
            </div>
            <div className='row mt-2'>
            {errors.grades&&<p className='text-danger fw-bold'>{errors.grades.message}</p>}
                <label className='col-sm-4 fs-3'>Gender :</label>
                <div className='col-sm-4'>
                {errors.gender&&<p className='text-danger fw-bold'>{errors.gender.message}</p>}
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
                {errors.standerd&&<p className='text-danger fw-bold'>{errors.standerd.message}</p>}
            </div>
            <button className='btn btn-outline-success col-sm-5 mt-2 mb-2'type='submit'>Submit</button>
            <button className='btn btn-outline-warning col-sm-5 float-end mt-2 mb-2'type='button'onClick={()=>{reset()}}>Reset</button>
        </form>
    </div>
  )
}

export default StudentCreate