import React,{useState,useEffect} from 'react'
import useDocTitle from './customhooks/useDocTitle'

function Doctitle() {
    const[count,setCount]=useState(0)

    // useEffect(()=>{
    //     document.title=`count = ${count}`
    // },[count])

    //custom hook  
    useDocTitle(count)

  return (
    <div>
      DOCTITLE 0
      <button onClick={()=>setCount(count+1)}> click to increase :count - {count} </button>
    </div>
  )
}

export default Doctitle
