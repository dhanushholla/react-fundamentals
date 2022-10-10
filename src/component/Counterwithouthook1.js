import React,{useState} from 'react'
import useCounter from './customhooks/useCounter'
function Counterwithouthook1() {
    // const[count,setCount]=useState(0)
    // const increment=()=>{setCount((prevCount)=>prevCount+1)}
    // const decrement=()=>{setCount((prevCount)=>prevCount-1)}
    // const reset=()=>{setCount(0)}

    //custom hook --here initialcount was not specified thus count=0, here no incrementval,decrementval specified thus default values of 1,1 will be taken
    const[count,increment,decrement,reset] = useCounter()

  return (
    <div>
        <h2> C2 counter value : {count}</h2><br></br>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counterwithouthook1
