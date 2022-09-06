import React, { Component } from 'react';
function FunctionClick() {
   function clickHandler() {
        console.log("btn click is handled")
    }
    return ( 
        <div>
          <button onClick={clickHandler}>Click</button>
           {/*note onclick={clickhandler} --> is a function/fn referencor.. and event handler should be of this type only as rule.. onclick={clickhandler()} --> is a fn call..which is not preferred */}
           {/*  as the onclick={clickhandler()} would be directly called even without the click action performed on the button and when you click the button the fn call won't be made as well..thus leading to irregularity in event handling*/}
           {/* assume same type of fn call on the eventhandler rather than fn/fn referencor which is responsible for state updation,,then it makes the issue of infinite stateupdation event without the desired action is not done */}
        </div>
     );
}

export default FunctionClick;