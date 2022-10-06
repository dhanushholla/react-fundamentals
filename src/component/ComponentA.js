import React from 'react'
import {useContext} from 'react'
import { countcontext } from '../App'

function ComponentA() {
  const cc=useContext(countcontext)
  return (
    <div>
        comp A  count ={cc.countstate}
      <button onClick={()=>cc.countdispatch('increment')}>+ from A</button>
      <button  onClick={()=>cc.countdispatch('decrement')}>- from A</button>
      <button  onClick={()=>cc.countdispatch('reset')}>reset from A</button>
    </div>
  )
}

export default ComponentA
