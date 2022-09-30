import React, { Component } from "react";

//  class HoverCounter2 extends Component {
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
//       render() {
//             const {count}=this.state
//             return (
//               <div>
//                 <h1 onMouseOver={this.incrementcount}> hovered {count} times</h1>
//               </div>
//             )
//         }
// }

//after render prop

class HoverCounter2 extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <h1 onMouseOver={increment}> hovered {count} times</h1>
      </div>
    );
  }
}
export default HoverCounter2;
