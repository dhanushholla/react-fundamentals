import React ,{useState,useEffect,useLayoutEffect, useRef}from 'react'

function Layouteffect() {
    const[show,setshow]=useState(false)
    const popupref=useRef()
    const buttonref=useRef()

    // useEffect(() => {
    //     if(popupref.current==null || buttonref.current==null)return
    //     const {bottom}=buttonref.current.getBoundingClientRect()
    //     popupref.current.style.top=`${bottom+25}px`
    // },[show])

    useLayoutEffect(() => {
        if(popupref.current==null || buttonref.current==null)return
        const {bottom}=buttonref.current.getBoundingClientRect()
        popupref.current.style.top=`${bottom+25}px`
    },[show])

  return (
    <div>
      <button ref={buttonref} onClick={()=>setshow(prev=>!prev)}>toggle popup</button>
      {show &&(<div style={{position:'relative'}} ref={popupref}> pop up content</div>)}
    </div>
  )
}

export default Layouteffect
