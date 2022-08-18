import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';

export default class Clock extends Component {



    constructor(props){

        super(props);
        this.state = {date: new Date()}
    }

     tick() {

      this.setState({date:new Date})
    }

    componentDidMount(){

      this.timeriD=setInterval(()=>this.tick() ,
      1000);

    }

    componentWillUnmount(){

      clearInterval(this.timeriD);

    }
  render() {
    return (
      <>
        <p>il est { this.state.date.toLocaleTimeString()/* console.log(this.state.date.toDateString()) */} </p>
      </>
    )
  }
}
