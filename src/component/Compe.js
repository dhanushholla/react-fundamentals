import React, { Component } from 'react'
import Compf from './Compf'
import UserContext from './Usercontext'
class Compe extends Component {
static contextType=UserContext
  render() {
    return (
      <div>
         compE context is {this.context}
         {/* here the output would be compE context is dhanush holla because compe is under compe which is under compc which is wrapped by the userprovider with value as dhanushholla */}
        <Compf></Compf>
       
      </div>
    )
  }
}


//for contexttype check or line 5 is used .. contexttype is nothing but implicit access of the contextprovider value or context default value
// Compe.contextType=UserContext

export default Compe
