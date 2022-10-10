import React,{useEffect} from 'react'

function useDocTitle(count) {
    useEffect(()=>{
        document.title=`count = ${count}`
    },[count])
  return (
    <div>
      
    </div>
  )
}

export default useDocTitle
