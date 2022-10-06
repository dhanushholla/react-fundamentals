import React,{useReducer} from 'react'

const initialstate=0


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

function Counterur3() {
  const[count,dispatch] = useReducer(reducer,initialstate)
  const[count2,dispatch2] = useReducer(reducer,initialstate)
  return (
    <div>
    <div>
        <p> count - {count}</p>
      <button onClick={()=>dispatch('increment')}>+</button>
      <button  onClick={()=>dispatch('decrement')}>-</button>
      <button  onClick={()=>dispatch('reset')}>reset</button>
    </div>
    <div>
    <p> count2 - {count2}</p>
  <button onClick={()=>dispatch2('increment')}>+</button>
  <button  onClick={()=>dispatch2('decrement')}>-</button>
  <button  onClick={()=>dispatch2('reset')}>reset</button>
  </div>
</div>
  )
}



export default Counterur3
