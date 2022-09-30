import React,{useState} from 'react'

function Hookcounter3() {
    const [name,setName]=useState({firstname:"",lastname:""})
  return (
    <div>
        <form>
        {/* <input type="text" placeholder="fname" value={name.firstname} onChange={(e)=>setName({firstname:e.target.value})}></input>
        <input type="text" placeholder='lname' value={name.lastname} onChange={(e)=>setName({lastname:e.target.value})}></input> */}
        {/* now manually merging and updating is done... it could be read as merge everything in name and update the following field with the value */}
        <input type="text" placeholder="fname" value={name.firstname} onChange={(e)=>setName({ ...name,firstname:e.target.value})}></input>
        <input type="text" placeholder='lname' value={name.lastname} onChange={(e)=>setName({...name,lastname:e.target.value})}></input>
        <h2>firstname : {name.firstname}</h2>
        <h2>lastname : {name.lastname}</h2> 
        <h2>{JSON.stringify(name)}</h2>
        </form>
    </div>
  )
}

export default Hookcounter3
