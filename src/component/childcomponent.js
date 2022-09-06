import React, { Component } from 'react'

 class Childcomponent extends Component {
  render(props) {
    return (
      <div>
        {/* <button onClick={this.props.clickhandle}>greet parent</button> normal call */}
        {/* passing args to the parent greet() */}
        <button onClick={()=>this.props.clickhandle('Anu')}>greet parent</button>
      </div>
    )
  }
}

export default Childcomponent
