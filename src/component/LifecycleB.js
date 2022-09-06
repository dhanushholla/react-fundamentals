import React, { Component } from 'react'

class LifecycleB extends Component {
   //constructor 
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Dhanush"
      }
      console.log("lifecycleb constructor called!!")
    }
    
    // static getderivedstatefromprops method -- it must either return the new state or null
    static getDerivedStateFromProps(props,state)
    {
        console.log("lifecycleb getderivedstatefromprops called !!!")
        return null;
    }

    //componentdidmount
    componentDidMount(){
        console.log("lifecycleb Componentdidmount called!!")
    }

    shouldComponentUpdate(){
      console.log("LifecycleB componentupdate called!!!")
      return true;
    }

    getSnapshotBeforeUpdate(){
      console.log("lifecycleB getsnapshotbeforeupdate called!! ")
      return null;
    }

    componentDidUpdate(){
        console.log("LifecycleB component Didupdate called!!")
    }

  //render 
  render() {
    console.log("lifecycleb render called!!")
    return (
    <div>
      <div>
       Component lifecycle b : mounting phase methods call flow page --> see in dev tool console
      </div>
      
    </div>
    )
  }
}


export default LifecycleB
