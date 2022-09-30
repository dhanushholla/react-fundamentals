import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
      super(props)
    this.inputref=React.createRef();
      this.state = {
         
      }
    }
    focusinputfield(){//method calling the focus statement 
        this.inputref.current.focus();
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputref}></input>
      </div>
    )
  }
}

export default Input
//here rather than using componentdidmount.... instead here we will create a method that calls the focus statement where that method inturn is called by the parent component(focusinput.js)