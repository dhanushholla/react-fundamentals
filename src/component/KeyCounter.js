import React, { Component } from 'react'
import withCounter from './withCounter'
import EnhancedComponent from './withCounter'

//before HOC
//  class KeyCounter extends Component {
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
//         <h2>from key counter, the prop from hoc is {this.props.name}</h2>
//         <input onKeyUp={this.incrementcount}/> <h1>key press {count} count</h1>
//       </div>
//     )
//   }
// }

//after HOC
class KeyCounter extends Component {
render() {
  const {count,incrementcount}=this.props
  return (
    <div>
      <input onKeyUp={incrementcount}/> <h1>key press {count} count</h1>
    </div>
  )
}
}

export default withCounter(KeyCounter)//here insetad of simply exporting keycounter component we are actually exporting the higher order component
