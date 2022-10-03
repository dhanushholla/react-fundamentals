import React,{useState} from 'react'
import Hookue4 from './Hookue4'

function Mousecontainer() {
    const [display,setDisplay]=useState(true)
  return (
    <div>
      <button onClick={()=>setDisplay(!display)}>toggler</button>
     {/* here based on the display value we woudl decide whether to siplay the Hookue4 component or not] */}
      {display && <Hookue4></Hookue4>}
    </div>
  )
}

export default Mousecontainer
