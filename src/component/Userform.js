import React,{useState} from 'react'
import useInput from './customhooks/useInput'

function Userform() {
    // const[fname,setFname]=useState('')
    // const[lname,setLname]=useState('')
    const[fname,bindfname,resetfname]=useInput('')
   const[lname,bindlname,resetlname]=useInput('')

   
   const submitHandler=(e)=>{
    e.preventDefault()
    alert(`vanakkam !!! Mr/Ms. ${fname} ${lname} `)
    resetfname()
    resetlname()
    }
   
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
            {/* <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} placeholder="fname" />
            <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} placeholder="lname"/> */}
            <input type="text" {...bindfname} placeholder="fname" />
            <input type="text" {...bindlname} placeholder="lname"/>
            <br></br>
            <button type="submit">submit</button>
        </div>
      </form>
    </div>
  )
}

export default Userform
