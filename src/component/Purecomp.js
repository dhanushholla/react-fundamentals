import React, { PureComponent } from 'react'

class Purecomp extends PureComponent {
  render(props) {
    console.log("purecomp--render call")
    return (
      <div>
        Pure component {this.props.name}
      </div>
    )
  }
}

export default Purecomp
