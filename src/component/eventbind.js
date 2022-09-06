import React, { Component } from 'react'

class Eventbind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hello"
      }

      //this.clickHandler= this.clickHandler.bind(this) //current this is now binded to clickhandler this
    }
//     clickHandler(){
//         console.log(this);//here it returns undefined,because of 'this' working in js... refer in separate video
//         this.setState({
//             message:"goodbye"
//         })//after this when we try to make button click our application shows error like setState() readproperty value undefined
//     }
//   render() {
//     return (
//       <div>
//         <div>message:{this.state.message}</div>
//         <button onClick={this.clickHandler}>change message!</button>
//       </div>
//     )
//   }


//     // so we need to bind event handling in react for class component..event handling

//    //by using bind keyword -- here this work correctly.. 'this' -> refers to event bind component instance.. here everyupdate to the state will cause a re-render and it generates a new event handler on each render .. it could be troublesome on large apps / components with many nested children components.
// //     clickHandler(){
// //         console.log(this);
// //         this.setState({
// //             message:"goodbye"
// //         })
// //     }
    
// //   render() {
// //     return (
// //       <div>
// //         <div>message:{this.state.message}</div>
// //         <button onClick={this.clickHandler.bind(this)}>change message!</button> here current this... is made routed/binded to clickhandler() implicitly
// //       </div>
// //     )
// //   }

// //using arrow fn in render method
// //     clickHandler(){
// //         console.log(this);
// //         this.setState({
// //             message:"goodbye"
// //         })
// //     }
    
// //   render() {
// //     return (
// //       <div>
// //         <div>message:{this.state.message}</div>
// //         <button onClick={()=>this.clickHandler()}>change message!</button>
// //         {/* here the event handler is calling an arrow fn which in turn must call another fn rather than a referencor/fn alone */}
// //       </div>
// //     )
// //   }
// // }

// binding the eventhandler in the constructor --efficient and preferred method and appropriate changes made in constructor
// clickHandler(){
//             console.log(this);
//             this.setState({
//                 message:"goodbye"
//             })
//         }
//       render() {
//         return (
//           <div>
//             <div>message:{this.state.message}</div>
//             <button onClick={this.clickHandler}>change message!</button>
//           </div>
//         )
//       }

// use arrow function as class property -- chnage the way we define the method in the class
clickHandler = ()=>{
    this.setState({
        message:"goodbye"
    })
} 
render() {
            return (
              <div>
                <div>message:{this.state.message}</div>
                <button onClick={this.clickHandler}>change message!</button>
              </div>
            )
          }
}
export default Eventbind
