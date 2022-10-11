import React,{useRef,useImperativeHandle} from 'react'
//flow is like for the needed elements we create the refs, and using impertaive handle that takes first arg ref..which if from app denotes confirmation model and second arg a fn that returns individual focus fn for elements
// which can be used outside this confirmation model using ref.current.neededelement.focus()
function Confirmationmodal({isOpen,onClose},ref) {
    const closeref=useRef()
    const yesref=useRef()
    const noref=useRef()

    useImperativeHandle(ref,()=>{
        return {
        focusclosebtn: ()=>closeref.current.focus(),
        focusyesbtn: ()=>yesref.current.focus(),
        focusnobtn: ()=>noref.current.focus()
        }
    } 
    ,[])

    if(!isOpen) return  null
  return (
    // <div className='modal' ref={ref}>
    //   <button className='close-btn' onClick={onClose}>&times;</button>
    //   <div className='modal-header'><h1>title</h1></div>
    //   <div className='modal-body'> do you wanna confirm?</div>
    //   <div className='modal-footer'>
    //   <button className='yes-btn' onClick={onClose}>yes</button>
    //   <button className='no-btn' onClick={onClose}>no</button> 
    //   </div>
    // </div>

        <div className='modal' ref={ref}>
        <button className='close-btn' ref={closeref}onClick={onClose}>&times;</button>
        <div className='modal-header'><h1>title</h1></div>
        <div className='modal-body'> do you wanna confirm?</div>
        <div className='modal-footer'>
        <button className='yes-btn'ref={yesref} onClick={onClose}>yes</button>
        <button className='no-btn' ref={noref} onClick={onClose}>no</button> 
        </div>
        </div>
  )
}

export default React.forwardRef(Confirmationmodal)
