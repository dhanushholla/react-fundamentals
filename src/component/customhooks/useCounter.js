import React,{useState} from 'react'

//here initialcount is a arg that canbe specified by the other components which calls this usecounter hook.. if no value specified 0 will be take as intial count=0 act as default parameter.. if any value specified that value would be considered as count
//now lets also pass the another argument which determines step count of increment or decrement
function useCounter(initialcount =0,incrementval=1,decrementval=1) {
    const[count,setCount]=useState(initialcount)
    const increment=()=>{setCount((prevCount)=>prevCount+incrementval)}
    const decrement=()=>{setCount((prevCount)=>prevCount-decrementval)}
    const reset=()=>{setCount(initialcount)}
  return [count,increment,decrement,reset]
}

export default useCounter
