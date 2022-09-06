import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
   //constructor 
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Dhanush"
      }
      console.log("lifecycleA constructor called!!")
    }
    changeState =()=>{
      this.setState({
        name:"Holla"
      })
    }

    // static getderivedstatefromprops method -- it must either return the new state or null
    static getDerivedStateFromProps(props,state)
    {
        console.log("lifecycleA getderivedstatefromprops called !!!")
        return null;
    }

    //componentdidmount
    componentDidMount(){
        console.log("lifecyclea Componentdidmount called!!")
    }

    shouldComponentUpdate(){
      console.log("LifecycleA componentupdate called!!!")
      return true;
    }

    getSnapshotBeforeUpdate(){
      console.log("lifecycleA getsnapshotbeforeupdate called!! ")
      return null;
    }

    componentDidUpdate(){
        console.log("LifecycleA component Didupdate called!!")
    }
  //render 
  render() {
    console.log("lifecycleA render called!!")
    return (
    <div>
      <div>
       Component lifecycle : mounting phase methods call flow page  see in dev tool console
      </div>
        <LifecycleB/>
        <button onClick={this.changeState}>Click to change state.name</button>
    </div>
    )
  }
}



export default LifecycleA
