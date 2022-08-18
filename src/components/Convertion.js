import React, { Component } from 'react'

export default class Convertion extends Component {
    constructor(props){

        super(props);
        this.state={boue:null , temCelcuis:null , temfah:null}
        this.handle=this.handle.bind(this)
        
    }

    boil(valueC){
            if(valueC>100){

                this.setState({boue:true})
            }

        else{
            this.setState({boue:false})
            }
    }
 
    handle(e){

        const type = e.target.type
        const name = e.target.name
        const value =e.target.value
        

        if(name=='temCelcius'){
            let valueC =isNaN(parseFloat(value))?null:parseFloat(value)
            let valueF =valueC*1.8+32

            this.setState({temCelcuis:valueC , temfah:(value=='')?null:valueF})
            this.boil(valueC)
        }
        else{

            let valueF =isNaN(parseFloat(value))?null:parseFloat(value)
            let valueC =(value==='')?null:valueF/1.8-32

            this.setState({temCelcuis:valueC , temfah:valueF})
            this.boil(valueC)

        }


        




    }

  render() {
    return (
      <div className='container justify-center'>
          <form method='post' action='#' className>
                <fieldset className=' '>
                    <legend>temperature en celcuis</legend>
                    <div className=''>
                         <input type='text' name='temCelcius' class="form-control" value={this.state.temCelcuis}  onChange={this.handle}></input>
                    </div>
                </fieldset>

                <fieldset className=' '>
                    <legend>temperature en fahrenheit</legend>
                    <div className=''>
                         <input type='text' name='tempFah' class="form-control" value={this.state.temfah} onChange={this.handle} ></input>
                    </div>
                </fieldset>
          </form>   

          <div className='pt-5'>
              {this.state.boue?'l\'eau boue':'l\'eau ne boue pas'}
               <p className='text-warning'>
               {JSON.stringify(this.state)}
               </p>
              
          </div>
      </div>
    )
  }
}
