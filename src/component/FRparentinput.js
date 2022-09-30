import React, { Component } from 'react'
import FRinput from './FRinput'

class FRparentinput extends Component {
    constructor(props) {
      super(props)
    this.inputref=React.createRef();//step1 

      this.state = {
         
      }
    }
    clickhandle=()=>{
        this.inputref.current.focus();  // here this current refers to native input element in child due to ref forwarding happened.. ref doesnt point to FRinput but to FRinput's assigned input field
    }
  render() {
    return (
      <div>
        {/* step2 */}
        <FRinput ref={this.inputref}></FRinput>
        <button onClick={this.clickhandle}>focus input</button>
      </div>
    )
  }
}

export default FRparentinput
