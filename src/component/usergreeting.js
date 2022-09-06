import React, { Component } from 'react'

class Usergreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:0
      }
    }
    
  render() {
   // if-else
    // if(this.state.isLoggedIn)
    // {
    //  return (<div>Welcome Dhanush</div>)
    // }
    // else
    // {
    // return(<div>welcome Guest</div>)
    // } 

    // ternary 
    // return ((this.state.isLoggedIn)? 
    // (<div>Welcome Dhanush</div>) :
    // (<div>welcome Guest</div>))

    // element varibales -- using js variables to store the needed component/return result inside a variable and do it
    // let message;
    // if(this.state.isLoggedIn)
    // {
    //     message=<div>Welcome Dhanush</div>
    // }
    // else{
    //     message=<div>Welcome Guest</div>
    // }
    // return <div>{message}</div>

    //short-circuit operator approach -- used when we want to render something or nothing
   return( this.state.isLoggedIn && <div>Welcome Dhanush</div> )//works by evaluating the left hand side..if it turns out ti be true then executes the right-hand side  of && statement
    //here even 0 is on left side then right side of && is ignored but .. still react returns 0.. react doesn't return false,undefined and null
    
    }
}

export default Usergreeting
