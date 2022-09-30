import React, { Component } from 'react'
import withCounter from './withCounter'
import EnhancedComponent from './withCounter'

//before hoc
//  class HoverCounter extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          count:0
//       }
//     }
//     incrementcount=()=>{
//         this.setState((prevState)=>{
//           return{count:prevState.count+1}  
//         })
//       }  
    
//   render() {
//     const {count}=this.state
//     return (
//       <div>
//           <h2>from hover counter, the prop from hoc is {this.props.name}</h2>
//         <h1 onMouseOver={this.incrementcount}> hovered {count} times</h1>
//       </div>
//     )
//   }
// }

//after hoc
class HoverCounter extends Component {

render() {
  const {count,incrementcount}=this.props
  return (
    <div>
      
      <h1 onMouseOver={incrementcount}> hovered {count} times</h1>
    </div>
  )
}
}

export default withCounter(HoverCounter)
