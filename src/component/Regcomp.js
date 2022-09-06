import React, { Component } from 'react'
 class Regcomp extends Component {
  render(props) {
    console.log("regularcomp--render call")
    return (
      <div>
        regular component {this.props.name}
      </div>
    )
  }
}

export default Regcomp

