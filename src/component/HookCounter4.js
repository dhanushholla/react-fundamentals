import React, {useState} from 'react'

function HookCounter4() {
    const [items,setItems]=useState([])
   const additem=()=>{
        setItems([...items,
            {
                id:items.length,
                value:items.length*10
            }
    ])
    }
  return (
    <div>
        <button onClick={additem}>add an item to array</button>
      <ul>
       {items.map((item)=> <li key={item.id}>{item.id}:{item.value}</li>)} 
      </ul>
    </div>
  )
}

export default HookCounter4
