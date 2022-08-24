import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Stundent extends Component {

  state={
    students:[],
    loading:true,
  }


async componentDidMount(){

  const res = await axios.get('http://localhost:300/demoLaravel/public/api/add-Student');

  if(res.data.status===200){
    this.setState({
      students:res.data.students,
      loading:false
    })

  }


}


  render() {

    var student_htmlTable ='';
    if(this.state.loading){
      student_htmlTable= <tr>
        <td className='text-center ' colSpan='7'><h2>loading...</h2></td>
      </tr>
    }

    else{
      student_htmlTable = (this.state.students).map((item)=>{
        return(
          <tr>
             <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.course}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>
              <Link to={"edit-student/"+item.id.toString()} className='btn btn-success'>Edit</Link>
            </td>
            <td>
                <button className='btn btn-danger' >Delete</button>
            </td>
          </tr>
        )
      })

    }
    return (
      <>
    
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12'>
                    <div className = 'card'> 
                        <div className = 'card-header'> 
                            <h4>
                                Stundents Data

                                {<Link to={'add-student'} className= ' btn btn-primary btn-sm float-end'>Add Student</Link>}
                            </h4>
                        </div>
                        <div className='card-body'>

                          <table className='table coltable-bordered table-striped'>
                            <thead>
                              <tr>
                                <th>
                                  ID
                                </th>
                                <th>
                                  Name
                                </th>
                                <th>
                                  Course
                                </th>
                                <th>
                                  Email
                                </th>
                                <th>
                                  Phone
                                </th>
                                <th>
                                  Edit
                                </th>
                                <th>
                                  Delete
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {student_htmlTable}
                            </tbody>

                          </table>
                          
                        </div>
                    </div>

                </div>

            </div>

        </div>
      </>
    )
  }
}
