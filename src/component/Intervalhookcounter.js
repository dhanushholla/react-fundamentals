import React,{useEffect, useState} from 'react'

function Intervalhookcounter() {
    const [count,setCount]=useState(0)
   
    //this one only executed only once making count=1 and stopped working
    //the problem is "when we try to use the dependency array(2nd param to useeffect) to determine when to render/re-render we will run into implementation problems"
    //rather than try to use the [] to mimic componentdidmount/willunmount we must use that to let reat know what state var it should monitor to execute the useeffect logic
    // here react thinks that the change of count to 1 has happened but while trying to mimic componentdidmount for timer,,we forgot to add re-render condition then behaves like componentwillunmount ie count incrementing which also needs to be done using the useeffect hook(only one call to setinterval will be sent)
    // useEffect(()=>{
    //  const interval = setInterval(tick,1000);
    //  return ()=>{ clearInterval(interval)} //here clearInterval() is an inbuilt js method
    // },[])

    //dependency list is added to make it work for all re-rendering,componentwillmount,componentupdate,componentwillunmount

    // useEffect(()=>{
    //     const interval = setInterval(tick,1000);
    //     return ()=>{ clearInterval(interval)} //here clearInterval() is an inbuilt js method
    //    },[count])
    // const tick=()=>{setCount(count+1)}



    //another way to make it work without dependency list is to modify the tick function .. here the setcount inside tick() takes care of count's value usimg pevcount we could remove the count from dependency list .. but still it will behave as componentDidmount,componentwillunmount,componentDidupdate
    const tick=()=>{setCount((prevCount)=>prevCount+1)}
    useEffect(()=>{
            const interval = setInterval(tick,1000);
            return ()=>{ clearInterval(interval)} //here clearInterval() is an inbuilt js method
           },[])


  return (
    <div>
      count is {count}
    </div>
  )
}

export default Intervalhookcounter
