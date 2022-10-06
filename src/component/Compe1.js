import React, { Component,useContext } from 'react'
import Compf1 from './Compf1'
import { urcontext,chncontext } from '../App'
function Compe1(){
    // usecontext usually returns the context value thus assigning it in a variable would be helpful for further access
   const msg1= useContext(urcontext)
   const msg2=useContext(chncontext)
    useContext(chncontext)
    return (
    
        <div>
           message1: {msg1} .... message2:{msg2}
            <Compf1>    
            </Compf1>
        </div>
    )
}




export default Compe1
