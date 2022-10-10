import React from 'react'
//here children is nothing button innertext of the button component in parent component
function Button({handleClick, children}) {
    console.log("rendering button by",children )
  return (
    <div>
      <button onClick={handleClick}>{children}</button>  
    </div>
  )
}

export default React.memo(Button)
