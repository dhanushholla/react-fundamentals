import React,{useState} from 'react'
import useCounter from './customhooks/useCounter'

function Counterwithouthook() {
    // const[count,setCount]=useState(0)
    // const increment=()=>{setCount((prevCount)=>prevCount+1)}
    // const decrement=()=>{setCount((prevCount)=>prevCount-1)}
    // const reset=()=>{setCount(0)}

    //custom hook -- intitial count was specified thus count =1001,here we gonna put increment val ie step count as 5 and decremetval as step count =3
    const[count,increment,decrement,reset] = useCounter(1001,5,3)
  return (
    <div>
        <h2> C1 counter value : {count}</h2><br></br>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counterwithouthook
