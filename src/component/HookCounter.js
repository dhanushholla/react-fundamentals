import React,{useState} from 'react'

function HookCounter() {
  
    // usestate is a hook which is simply nothing but a function that allows you to hook/join in react to get a state and a method to set the state
    // usestate() accepts the argument which is the initial value of the satet property and returns the current value of state property and a method that is capable to update the state property
    //the below line is a array destructuring syntax similar to object destructuring... on RHS usestate(0) means that default value of state property is 0 ie here on LHS we have count--which would be state property and setCount is the method to update the state property count
    //therefore we know that in class component we write handler event as
    //<btn onclick={this.btnhandler}/> . where btnhandler=()=>{this.setState({count:this.state.count+1})}
    //similarly here using hooks when we write handler instead of indirect call to setState which is setCount here .. we directly assigned setCount() where the thing to be returned/updated in class  component we placed ({count:count+1}) but here in hooks just (count+1) is enough which implicitly makes a count:count+1 taken care by useState hook 

    const [count,setCount] = useState(0)

  return (
    <div>
      <button onClick={()=>setCount(count+1)}>present count value = {count}</button>
    </div>
  )
}

export default HookCounter
