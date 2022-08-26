import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';

export default class AddStudents extends Component {


  state={
    name:'',
    course:'',
    email:'',
    phone:'',
    errors:[]
  }

  handleInput= (e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
    
  }


  saveStudent = async (e)=>{
    e.preventDefault() ;

    const res = await axios.post('http://localhost:300/demoLaravel/public/api/add-Student' , {name:this.state.name,
    course:this.state.course,
    email:this.state.email,
    phone:this.state.phone,})
    if(res.data.status===200){
     // console.log(res.data.message)

     swal({
      title: "Success",
      text: "Student Added sucessfully",
      icon: "success",
      button: "OK",
    });

      this.setState({
        name:'',
        course:'',
        email:'',
        phone:'',
        errors:[]
      })
    }
    else{

      this.setState({
        errors:res.data.errors
      })

    }
  }


  render() {
    return (
      <>
    
      <div className='container'>
          <div className='row'>
              <div className='col-md-12'>
                  <div className = 'card'> 
                      <div className = 'card-header'> 
                          <h4>
                             Add Students

                              {<Link to={'/'} className= ' btn btn-primary btn-sm float-end'>Back</Link>}
                          </h4>
                      </div>
                      <div className='card-body'>
                        <form  onSubmit={this.saveStudent}>
                          <div className='form-group mb-3'>
                                <label>Student NAme</label>
                                <input typte='text' name='name' value={this.state.name} className='form-control' onChange={this.handleInput} ></input>
                                <span className='text-danger erros'>{this.state.errors.name}</span>
                          </div>
                          <div className='form-group mb-3'>
                                <label>Student Course</label>
                                <input typte='text' name='course' value={this.state.course} className='form-control' onChange={this.handleInput} ></input>
                                <span className='text-danger erros'>{this.state.errors.course}</span>
                          </div>

                          <div className='form-group mb-3'>
                                <label>Student Email</label>
                                <input typte='email' name='email' value={this.state.email} className='form-control' onChange={this.handleInput}  ></input>
                                <span className='text-danger erros'>{this.state.errors.email}</span>
                          </div>
                          <div className='form-group mb-3'>
                                <label>Student Phone</label>
                                <input typte='tel' name='phone' value={this.state.phone} className='form-control' onChange={this.handleInput} ></input>
                                <span className='text-danger erros'>{this.state.errors.phone}</span>
                                
                          </div>

                          <button type='submit' className='btn btn-primary'>Save Student</button>

                        </form>
                      </div>
                  </div>

              </div>

          </div>

      </div>
    </>
    )
  }
}
