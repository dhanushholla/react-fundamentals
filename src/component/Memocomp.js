import React from 'react'

// function Memocomp({name}) {// here the name prop is destructured.. it will be passed from parentcomp
//     console.log("rendering memo component")
//   return (
//     <div>
//       {name}
//     </div>
//   )
// }

// export default Memocomp

//here the above is like a simple sfc which re-renders when parent setstate for every 2 seconds in didmount()
//thus to avoid it we gonna use it as memo by changing the export statement as

function Memocomp({name}) {// here the name prop is destructured.. it will be passed from parentcomp
    console.log("rendering memo component")
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(Memocomp)

//now we could observe the parentcomp alone renders not the memocomp by noticing no reprint of consolelog statement
//react.memo is higher order component which adds memo functionality to Memocomp.js and returns as new component,we will discuss about higher order component later
