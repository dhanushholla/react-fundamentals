import React,{useState,useEffect} from 'react'

function Hookue2() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState("")
    //before conditional rendering of the useeffec's console.log..... we aim to print the console.log() statement only whenever there is a change in the count var not in the input element filling event
    // useEffect(()=>{
       
    //    console.log("updating document title") 
    //    document.title=` ${count} times click` 
    // })

    //conditionally using the effect hook
    //we could achieve it by passing a second args to the useeffect which is of type array..where in which we could mention either the state or the props that we need to keep an eye for change... if those changes then only the effect executes
    useEffect(()=>{
       
        console.log("updating document title") 
        document.title=` ${count} times click` 
     },[count]) //here now by default react with useeffect will implicitly check for change in count.. if changes are seen then it would execute else it would be not executed..  thus change in the state->name happens but it isn't provided in the useeffect second param the useffect() logic won't execute
  return (
    <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="enter name"/>
      <button onClick={()=>setCount(count +1)}> clicked {count} times</button>
    </div>
  )
}

export default Hookue2
