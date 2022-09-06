//rce -->es7 extension to create class component
import React, { Component } from 'react'

class Classclick extends Component {
    clickHandle(){
        console.log("click me!! button clicked")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandle}>click me!!</button>
      </div>
    )
  }
}

export default Classclick
