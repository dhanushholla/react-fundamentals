import React,{useState,useEffect,useRef} from 'react'

function RefTimer() {
    const[timer,setTimer]=useState(0)
    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         setTimer(prevTimer=>prevTimer+1)
    //     },1000)
    //     return ()=>{
    //         clearInterval(interval)
    //     }},
    //     [])
        
        const intervalref=useRef()

        useEffect(()=>{
            intervalref.current = setInterval(()=>{
                setTimer(prevTimer=>prevTimer+1)
            },1000)
            return ()=>{
                clearInterval(intervalref.current)
            }},
            [])
            
  return (
    <div>
      Hook timer -- {timer}
      <button onClick={()=>clearInterval(intervalref.current)}>stop timer</button>
    </div>
  )
}

export default RefTimer
