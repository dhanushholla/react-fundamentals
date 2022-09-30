import React ,{useState} from 'react'

function Hookcounter2() {
    const initialcount=0
    const [count,setCount]=useState(initialcount)
    const incrementfive=()=>{
        for(let i=0;i<5;i++)
        {
            // setCount(count+1)
            setCount((prevCount)=>prevCount+1)
        }
    }
  return (
    <div>
      count: {count}<br></br>
      {/* <button onClick={()=>setCount(initialcount)}>reset</button>
      <button onClick={()=>{setCount(count+1)}}>+</button>
      <button onClick={()=>{setCount(count-1)}}>-</button> */}
      <button onClick={()=>setCount(initialcount)}>reset</button>
      <button onClick={()=>{setCount((prevCount)=>prevCount+1)}}>+</button>
      <button onClick={()=>{setCount((prevCount)=>prevCount-1)}}>-</button>
      <button onClick={incrementfive}>+5</button>
    </div>
  )
}

export default Hookcounter2
