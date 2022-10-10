import React,{useState,useCallback} from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'


function Parent() {
    const[age,setage]=useState(25)
    const[salary,setsalary]=useState(25000)

    // const incrementAge=()=>{
    //     setage(age+1)
    // }
    const incrementAge=useCallback(()=>{
        setage(age+1)
    },[age])

    // const incrementSalary=()=>{ 
    //     setsalary(salary+1000) }
     
    const incrementSalary=useCallback(()=>{ 
        setsalary(salary+1000) 
    } ,[salary])

  return (
    <div>
      <Title></Title>
      <Count text="age" count={age}></Count>
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="salary" count={salary}></Count>
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default Parent
