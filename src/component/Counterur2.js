import React,{useReducer} from 'react'

const initialstate= { firstcount:0,secondcount:0} //here initial state is now an object

const reducer=(state,action)=>{
    switch (action.type) {
        case 'increment':
            return {...state,firstcount:state.firstcount+action.value}
        case 'decrement':
            return {...state,firstcount:state.firstcount-action.value}
            case 'incrementc2':
                return {...state,secondcount:state.secondcount+action.value}
            case 'decrementc2':
                return {...state,secondcount:state.secondcount-action.value}
        case 'reset':
            return initialstate
        default:
            return state
    }
}

function Counterur2() {
  const[count,dispatch] = useReducer(reducer,initialstate) //dispatch method allows us to execute code based on needed action method.. initialstate/currentvalue of the state is  assigned to count by default
  return (
    <div>
        <p> count - {count.firstcount}</p> 
        <p> count - {count.secondcount}</p>

      <span>counter 1 control:</span>
        {/* above we have the initial and further state chnages to be in count handle but we need to display count.firstcount ie like  in whole stateobj we needed firstcount property alone*/}
      <button onClick={()=>dispatch({type:'increment',value:1})}>+</button>
      <button  onClick={()=>dispatch({type:'decrement',value:1})}>-</button>
      <button onClick={()=>dispatch({type:'increment',value:5})}>+5</button>
      <button  onClick={()=>dispatch({type:'decrement',value:5})}>-5</button>
     <div></div>
      <span>counter 2 control:</span>
      <button onClick={()=>dispatch({type:'incrementc2',value:1})}>+</button>
      <button  onClick={()=>dispatch({type:'decrementc2',value:1})}>-</button> 
      <div> <button  onClick={()=>dispatch({type:'reset'})}>reset</button></div>
    </div>
  )
}



export default Counterur2
