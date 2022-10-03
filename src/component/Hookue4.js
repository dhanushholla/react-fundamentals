import React, { useEffect, useState } from 'react'

function Hookue4() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    
   const logmouseposition=(e)=>{
        console.log("logmouseposition called")
        setX(e.clientX)
        setY(e.clientY)
    }

    //here we could see that console.log(useeffect called) is seen during each render and update ie..like componentdidupdate
    //but we do have to make it work like componentdidmount .. ie making it to call only during the initial render alone .. only 1 single time
    // useEffect(()=>{
    //     console.log("useeffect called")
    //     window.addEventListener('mousemove',logmouseposition)
    // })

    //trying to mimic componentdidmount
//    useEffect(()=>{
//         console.log("useeffect called")
//         window.addEventListener('mousemove',logmouseposition)
//     },[]) // here  [] specified on second param states that this useeffect down't depend on any state or props..thus we don't need this logic to be executed more than once(ie only during initial render) explicitly


// this could be resolved using useEffectwith cleanup functionality
// ie fn passed as first param to the useeffect() will return another fn implicitly which could be used to mimic the componentWillUnmount .. so explicitly return an function will removing eventlistener logic
        useEffect(()=>{
            console.log("useeffect called")
            window.addEventListener('mousemove',logmouseposition)

            return ()=>{
                window.removeEventListener('mousemove',logmouseposition)
                console.log("useeffect with cleanup")
            }
        },[]) 

  return (
    <div>
      coordinates X:{x} Y:{y}
    </div>
  )
}

export default Hookue4
