import React, { Component } from 'react'
import withCounter from './withCounter'
import EnhancedComponent from './withCounter'

//before HOC
// class ClickCounter extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          count:0
//       }
//     }
// //   incrementcount=()=>{
// //     this.setState({
// //         count:this.state.count+1
// //     })
// //   }
        
// // as we know the button is clicked the count will increase thus rather than referring the RHS count as this.state.count .. it is better if we called as prevstate.count so rewritten as

//   incrementcount=()=>{
//     this.setState((prevState)=>{
//       return{count:prevState.count+1}  
//     })
//   }  

//   render() {
//     const { count } = this.state
//     return (
//       <div>
//          <h2>from click counter, the prop from hoc is {this.props.name}</h2>
//         <button onClick={this.incrementcount}>clicked {count} times</button>
//         </div>
//     )
//   }
// }

//after HOC
class ClickCounter extends Component {

    render() {
      const { count,incrementcount } = this.props
      return (
        <div>
          
          <button onClick={incrementcount}>clicked {count} times</button>
          </div>
      )
    }
  }


export default withCounter(ClickCounter)
