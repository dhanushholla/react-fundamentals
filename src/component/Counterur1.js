import React,{useReducer} from 'react'

const initialstate=0

//syntax .. consider action as the instruction to the reducer fn..based on action specified,reducerfn(reducer here) perform necessary state transition
// for our example we have three action .. increment,decrement,reset
// const reducer =(currentstate,action)=>{
//     return newstate
// }


// flow is like assign initial state and write the logic for reducer fn
//then call the usereducer and assign them to a state variable and a dispatch method
// then based on need for event handler try to call the necessary dispatch method with appropriate words..that makes an indirect call to reducerfn/reducer() and does the changes in them
//here state is nothing but our count from line 26, here action is form dispatch() call where dispatch('increment') . then action == increment  that goes through the reducer fn for it state manipulation line/statement ie state+1 for this case
const reducer=(state,action)=>{
    switch (action) {
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialstate
        default:
            return state
    }
}

function Counterur1() {
  const[count,dispatch] = useReducer(reducer,initialstate) //dispatch method allows us to execute code based on needed action method.. initialstate/currentvalue of the state is  assigned to count by default
  return (
    <div>
        <p> count - {count}</p>
      <button onClick={()=>dispatch('increment')}>+</button>
      <button  onClick={()=>dispatch('decrement')}>-</button>
      <button  onClick={()=>dispatch('reset')}>reset</button>
    </div>
  )
}



export default Counterur1
