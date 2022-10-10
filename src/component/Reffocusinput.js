import React,{useEffect,useRef} from 'react'

function Reffocusinput() {

    const inputref=useRef(null)

    useEffect(()=>{
        //here we gonna focus the input field
        inputref.current.focus();
    },[])
  return (
    <div>
      <input type="text" placeholder="Enter your name" ref={inputref}/>
    </div>
  )
}


export default Reffocusinput
