import React, { Component } from 'react';
class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementCount(){
        // this.setState({
        //     count:this.state.count + 1// lhs count is assumed to be this.state.count as it is through this.setstate() obj called but the rhs count must be explicitly mentioned incase of expressions 
        // });
        // console.log(this.state.count);// this state shows value one lesser than the present value during this call..because of js async fncall methodology ... 
        
        
        // this.setState({
        //     count:this.state.count + 1// lhs count is assumed to be this.state.count as it is through this.setstate() obj called but the rhs count must be explicitly mentioned incase of expressions 
        // },()=>{console.log("callback count value:",this.state.count)});
        
        //now we are going to pass a fn as arg to setState() instead of setstate(obj) now....here prevstate always make sure the setstate() value are carried forward even after the continuous calls
        this.setState((prevState,props)=>({
            count:prevState.count +1
        }),()=>{
            console.log("callback value:",this.state.count)
        })
    
    }
    decrementCount(){
        // this.setState({
        //     count:this.state.count - 1// lhs count is assumed to be this.state.count as it is through this.setstate() obj called but the rhs count must be explicitly mentioned incase of expressions 
        // });
        // console.log(this.state.count);// this state shows value one greater than the present value during this call..because of js async fncall methodology ... to overcome this issue..make the setstate(object,callback/arrow fn) thus remodel it as

        // this.setState({
        //     count:this.state.count - 1// lhs count is assumed to be this.state.count as it is through this.setstate() obj called but the rhs count must be explicitly mentioned incase of expressions 
        // },()=>{console.log("callback count value:",this.state.count)});
    
        //now we are going to pass a fn as arg to setState() instead of setstate(obj) now....here prevstate always make sure the setstate() value are carried forward even after the continuous calls
        this.setState((prevState,props)=>({
            count:prevState.count -1
        }),()=>{
            console.log("callback value:",this.state.count)
        })
    }
    incrementFive()
    {
        //whenever this fn is called.. the output would be increment by only one and callback also be 1 if initial count was 0 ..
        //because by default react groups "multiple setState() calls into a single update for better performance... in our case all the 5 setState() are called on a single go and output of first setState() wasn't carried over or reflected by the next setstate()"
        // so we are going to modify the incrementcount() now as above
        this.incrementCount()
        this.incrementCount() 
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
    }
    decrementFive()
    {
        //whenever this fn is called.. the output would be decrement by only one and callback also be -1 if initial count was 0 ..
        //because by default react groups "multiple setState() calls into a single update for better performance... in our case all the 5 setState() are called on a single go and output of first setState() wasn't carried over or reflected by the next setstate()"
        // so we are going to modify the decrementcount() now as above
        this.decrementCount()
        this.decrementCount() 
        this.decrementCount()
        this.decrementCount()
        this.decrementCount()
    }
    render() { 
        return (
            <div>
                Count value:{this.state.count}
                <button onClick={()=>this.incrementCount()}>(Increment)</button>
                <button onClick={()=>this.decrementCount()}>(Decrement)</button>
                <button onClick={()=>this.incrementFive()}>(Increment by 5)</button>
                <button onClick={()=>this.decrementFive()}>(decrement by 5)</button>
            </div>
        );
    }
}
 
export default Counter;