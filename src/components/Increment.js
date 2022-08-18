import React, { Component } from 'react'

export default class Increment extends Component {

    btnStart = 'pause';
    
    constructor(props){
        super(props)
        this.state={nbre:this.props.start , btnState:true}
    
    }


    tick(){

        if(this.state.btnState){
        this.timerID = setInterval (()=>{
          this.setState({nbre:this.state.nbre+this.props.step})
        } , 1000);
        
                  
        }

        else{
          console.log('false btn')
          clearInterval(this.timerID);
        }


        this.setState({btnState:!this.state.btnState})
    }
/*     componentDidMount(){

      this.timerID = setInterval (()=>this.tick(this.props.step) , 1000);

    } */

/*     componentWillUnmount(){
        clearInterval(this.timerID);
    } */
  render() {
    return (
      <div>

{/*         {console.log(this.state.nbre)}

        {console.log(this.state.btnState)} */}
        
        valeur du nombre {this.state.nbre}  {this.state.btnState? <button onClick={this.tick.bind(this)} >pause</button>:<button onClick={this.tick.bind(this)} >play</button>} 

        <br></br>
        valeur du nombre {this.state.nbre} 
      
      
      </div>

    )
  }
}

Increment.defaultProps = {
   
    start:100,
    Step: 1,
  };