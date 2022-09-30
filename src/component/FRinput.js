import React from 'react'

// function FRinput() {
//   return (
//     <div>
//       <input type="text" ></input>
//     </div>
//   )
// }

// step3
const FRinput =React.forwardRef((props,ref)=>{
    return (
            <div>
              <input type="text" ref={ref} ></input>
              {/* here the parameter ref contains the ref from the parent component ie.. forwarding ref is done */}
            </div>
          ) 
})

export default FRinput
