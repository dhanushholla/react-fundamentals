import React, { Component } from 'react'
//going to serve like container component for click,hover counter where we gonna implement the count and its increment functionality
class County extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
   increment=()=>{
      this.setState((prevState)=>{
        return({count:prevState.count+1})  
      })
   }   
  render() {
    return (
      <div>
        {this.props.render(this.state.count,this.increment)}
      </div>
    )
  }
}

export default County
