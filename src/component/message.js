import React, { Component } from 'react';

class Message extends Component {
    constructor()
    {
        super();
        this.state=
        {
            messagevalue : "Welcome visitor by message component"
        }
    } 
    changeMessage()
    {
        this.setState({
            messagevalue:"subscribed!!!"
        })
    }
    render() { 
        return (
            <div>
            <h1>{this.state.messagevalue}</h1>
            <button onClick={
                ()=>{
                this.changeMessage();
            }
            }>subscribe</button>
            </div>
        );
    }
}
 
export default Message;