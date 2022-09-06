import React from 'react'
// props is destructured..here personitem is nothing but each iterable person object passed via the namelist's map() call
function Personcomponent({personitem}) {
  return (
    <div>
      <h2>Hi all, i am {personitem.name}, i am {personitem.age} & studies in {personitem.sec} class</h2>
    </div>
  )
}

export default Personcomponent
