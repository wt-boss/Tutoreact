import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class AddStudents extends Component {


  state={
    name:'',
    course:'',
    email:'',
    phone:''
  }

  handleInput= (e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
    
  }


  saveStudent = async (e)=>{
    e.preventDefault() ;

    const res = await axios.post('http://localhost:300/demoLaravel/public/api/add-Student' , this.state)
    if(res.data.status===200){
      console.log(res.data.message)

      this.setState({
        name:'',
        course:'',
        email:'',
        phone:''
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
                          </div>
                          <div className='form-group mb-3'>
                                <label>Student Course</label>
                                <input typte='text' name='course' value={this.state.course} className='form-control' onChange={this.handleInput} ></input>
                          </div>

                          <div className='form-group mb-3'>
                                <label>Student Email</label>
                                <input typte='email' name='email' value={this.state.email} className='form-control' onChange={this.handleInput}  ></input>
                          </div>
                          <div className='form-group mb-3'>
                                <label>Student Phone</label>
                                <input typte='text' name='phone' value={this.state.phone} className='form-control' onChange={this.handleInput} ></input>
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
