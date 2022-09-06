import React from 'react'

const heading={
    fontSize:'70px',
    color:'red'
}
const btnstyle={
    border:'2px solid aqua'
}
function Inline() {
  return (
    // in react usually inline styles are not specified as a string but as object whose key is a camelcased version of stylename and value is a string
    <div>
      <h1 style={heading}>inline styling</h1>
      <button style={btnstyle}>Inline_styled-BTN</button>
    </div>
  )
}

export default Inline
