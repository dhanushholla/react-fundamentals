import React,{useState,useEffect} from 'react'

function Hookue1() {
    const [count,setCount]=useState(0)
    //useeffect is also a function hook which could be called where the parameters are nothing  but a function which we need to be called after every render cycle
    //here in our usecase whenever we click the button we need to update the document title as well.. so after each state update,the render is called.. then after that we need to manually add the changed count item in the title thus we gonna make use of componentdidupdate in class component but here we gonna make use of useeffect hook
    //where the params is the empty arrow function with our logic 
    useEffect(()=>{
       document.title=` ${count} times click` 
    })
  return (
    <div>
      <button onClick={()=>setCount(count +1)}> clicked {count} times</button>
    </div>
  )
}

export default Hookue1
