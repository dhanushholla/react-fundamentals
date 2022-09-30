import React, { Component } from 'react'
import Memocomp from './Memocomp'
import Purecomp from './Purecomp'
import Regcomp from './Regcomp'

class Parentcomp extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name:"dhanush"
        }
      }
      componentDidMount(){
          setInterval(()=>{
              this.setState({
                  name:"dhanush"
              })
          },2000)
      }
    //here the componentdidmount will execute after the first render then inside it..logic calls the setstate method for every 2 secons which causes the parent component rendering which in turn re-renders it's child 
    //regular component gets re-rendering along with the setinterval() but the purecomponent doesn't  
    render() {
    console.log("parentcomp--render")
    return (
      <div>
        Parent component
       {/* < Regcomp name={this.state.name}></Regcomp>
        <Purecomp name={this.state.name}></Purecomp> */}
        <Memocomp name={this.state.name}></Memocomp>
      </div>
    )
  }
}

export default Parentcomp
