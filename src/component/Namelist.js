import React from 'react'
import Personcomponent from './Personcomponent'
function Namelist() {
  const names=['anu','dhanu','vani']
  // const namelist=names.map((name)=><div >{name}</div>) . no key prop
  const namelist=names.map((name,index)=><div key={index } >{name}</div>)
  const persons=[
    {
        name:'dhanu',
        age:20,
        sec:'c',
        id:1
    },
    {
        name:'anu',
        age:18,
        sec:'a',
        id:2
    },
    {
        name:'shruthi',
        age:21,
        sec:'b',
        id:3
    }
] 
   
// const personlist=persons.map((person)=><div>i am {person.name} and i am {person.age} yrs old and studies in {person.sec} class</div>).. foir the vid-18 unique key prop we utilised the id which would we assumed to be unique at all times
const personlist=persons.map((person)=><Personcomponent  key={person.id} personitem={person}></Personcomponent>)
return (
    <div>
       {/* <h1>{names[0]}</h1>
       <h1>{names[1]}</h1> 
       <h1>{names[2]}</h1>  */}
       {namelist}
       {personlist}
       {/* the above personlist has the map() call that which adds the personcompoennt for each object which in turn has the details rendered using props */}
       {/* now but in real time we opt to keep the render method free from overload thus the each person would be treated as a component from another lets see how to do that */}
    </div>
  )
}


export default Namelist
