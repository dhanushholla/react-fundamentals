import React,{useContext} from 'react'
import { countcontext } from '../App'
function ComponentF() {
    const cc=useContext(countcontext)
  return (
    <div>
       comp D count ={cc.countstate}
      <button onClick={()=>cc.countdispatch('increment')}>+ from F</button>
      <button  onClick={()=>cc.countdispatch('decrement')}>- from F</button>
      <button  onClick={()=>cc.countdispatch('reset')}>reset from F</button>
    </div>
  )
}

export default ComponentF
