import React, { Component } from 'react'
import Input from './input'

class Focusinput extends Component {
    constructor(props) {
      super(props)
        this.componentref=React.createRef();
      this.state = {
         
      }
    }
    clickhandler=()=>{
        this.componentref.current.focusinputfield()
    }
    
  render() {
    return (
      <div>
        <Input ref={this.componentref}></Input>
        <button onClick={this.clickhandler}>focus input</button>
        {/* assume here when btn is clicked here then the child component input.js will have to call focusinputfield() which inturn makes focus on the input field 
        we have created the ref in parent class and assigned the ref to the child class thus now we can access the child methods & properties via the ref name
    we have a button which when clicked calls the method clickhandle where we gonna access the child method focusinputfield() using componentref we created, which inturn calls the  focus statement*/}
      </div>
    )
  }
}

export default Focusinput
