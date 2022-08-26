import React, { Component, useState } from 'react'
import { Link ,useParams } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';

export default function EditStudent() {

 

  const [state , setState] =useState({name:'' ,
   course:'',
    email:'' ,
    phone:'',})

    const params = useParams()

    if(state.name===''&& state.course===''&& state.phone===''&& state.email===''){
      GetSudent()
     }
  
   
async function GetSudent(){
 
    const res =await axios.get('http://localhost:300/demoLaravel/public/api/add-Student/'+params.id )
    if(res.data.status===200){
       var student = res.data.student

       setState(student) 
    }
    else{
      console.log('request is not available')
    }
    
}


 const  handleInput= (e)=>{
    setState({
      [e.target.name]:e.target.value
    })
    
  }


  const updateStudent = async (e)=>{
    e.preventDefault() ;
    document.getElementById('update').disabled=false;
    const res = await axios.put('http://localhost:300/demoLaravel/public/api/add-Student/'+params.id , state)
    if(res.data.status===200){
      swal({
        title: "Success",
        text: "Student Updated sucessfully",
        icon: "success",
        button: "OK",
      });
  
      setState(res.data.student)
    }
  }

    return (
      <>
    
      <div className='container'>
          <div className='row'>
              <div className='col-md-12'>
                  <div className = 'card'> 
                      <div className = 'card-header'> 
                          <h4>
                             Edit Student

                              {<Link to={'/'} className= ' btn btn-primary btn-sm float-end'>Back</Link>}
                          </h4>
                      </div>
                      <div className='card-body'>

                        <form  onSubmit={updateStudent}>
                          <div className='form-group mb-3'>
                                <label>Student NAme</label>
                                <input typte='text' name='name' value={state.name} className='form-control' onChange={handleInput} ></input>
                          </div>
                          <div className='form-group mb-3'>
                                <label>Student Course</label>
                                <input typte='text' name='course' value={state.course} className='form-control' onChange={handleInput} ></input>
                          </div>

                          <div className='form-group mb-3'>
                                <label>Student Email</label>
                                <input typte='email' name='email' value={state.email} className='form-control' onChange={handleInput}  ></input>
                          </div>
                          <div className='form-group mb-3'>
                                <label>Student Phone</label>
                                <input typte='text' name='phone' value={state.phone} className='form-control' onChange={handleInput} ></input>
                          </div>

                          <button id='update' type='submit' className='btn btn-primary'>Update Student</button>

                        </form>
                      </div>
                  </div>

              </div>

          </div>

      </div>
    </>
    )

}
