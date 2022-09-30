import React, { Component } from "react";

// class ClickCounter2 extends Component {
//     constructor(props) {
//       super(props)

//       this.state = {
//          count:0
//       }
//     }
//  increment=()=>{
//     this.setState((prevState)=>{
//       return({count:prevState.count+1})
//     })
//  }
//   render() {
//     const { count }=this.state
//     return (
//       <div>
//         <button onClick={this.increment}>clicked {count} times</button>
//       </div>
//     )
//   }
// }

//after render prop
class ClickCounter2 extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <button onClick={increment}>clicked {count} times</button>
      </div>
    );
  }
}

export default ClickCounter2;
