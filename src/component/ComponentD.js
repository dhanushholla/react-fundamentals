import React,{useContext} from 'react'
import { countcontext } from '../App'
function ComponentD() {
    const cc=useContext(countcontext)
  return (
    <div>
        comp D count ={cc.countstate}
      <button onClick={()=>cc.countdispatch('increment')}>+ from D</button>
      <button  onClick={()=>cc.countdispatch('decrement')}>- from D</button>
      <button  onClick={()=>cc.countdispatch('reset')}>reset from D</button>
    </div>
  )
}

export default ComponentD
