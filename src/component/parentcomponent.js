import React, { Component } from 'react'
import Childcomponent from './childcomponent'

class Parentcomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'parent'
      }
      this.greetparent=this.greetparent.bind(this) // binding this to greetparent's this
    }
    greetparent(name)
    {
        alert(`hello ${this.state.parentName} hit by ${name}`)//as no arrow type event handling binder applicable here..we opt for the constructor based binding
    }
    
  render() {
    return (
      <div>
        <Childcomponent clickhandle={this.greetparent} ></Childcomponent>
        {/* or <Childcomponent clickhandle={()=>this.greetparent()} ></Childcomponent> */}
      </div>
    )
  }
}

export default Parentcomponent
