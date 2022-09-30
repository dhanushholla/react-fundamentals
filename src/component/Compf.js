import React, { Component } from 'react'
import { UserConsumer } from './Usercontext'
 class Compf extends Component {
  render() {
    return (
      <div>
        {/* step 3 of context where we consume the context value .. between the opening and closing of the consumer we must provide a function... 
        here we're passing a function as a child to the consumer component */}
        component F
        <UserConsumer>
            {
                // here the username is nothing but alias for the value attribute that we provided during the UserProvider
                (username)=>{
                    return <div> hi i'm {username} </div>
                }
            }
        </UserConsumer>
      </div>
    )
  }
}

export default Compf
