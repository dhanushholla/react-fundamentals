import React,{useState,useEffect} from 'react'
import useDocTitle from './customhooks/useDocTitle'

function Doctitle1() {
    const[count,setCount]=useState(0)

    // useEffect(()=>{
    //     document.title=`count = ${count}`
    // },[count])

    //custom hook
        useDocTitle(count)


  return (
    <div>
        DOCTITLE 1
      <button onClick={()=>setCount(count+1)}> click to increase :count - {count} </button>
    </div>
  )
}

export default Doctitle1
