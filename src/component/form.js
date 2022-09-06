import React, { Component } from 'react'
//normal html form type
// // class Form extends Component {
    
//   render() {
//     return(
//     <form>
//     <div>Form</div>
//     <label>username:</label>
//     <input type="text"></input>
//     </form>
//     )
//   }
// }

// going to create controlled component


class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:'react'
      }
    }
    handleUsernamechange = (event) =>{// event is inbuilt object that associates the things happened during a event like onchange during textarea typing
        this.setState({
            username:event.target.value //passes the event..which has target.value as the typed input in case of textarea typing event
        })
    }
    handlecommentchange=(event) =>{
        this.setState({
            comments:event.target.value
        })
    }
    handletopicchange = (event) =>{
       this.setState({
              topic: event.target.value
         })
    }
    submithandler= (event) =>{
        alert(`entered details :${this.state.username} ${this.state.comments} ${this.state.topic}`);
        event.preventDefault();
    }
        
    render() {
        return(
        <form onSubmit={this.submithandler}>
        <div>Form</div>
        <label>username:</label>
        <input type="text" value={this.state.username} onChange={this.handleUsernamechange}></input>
        <div>
            <label>comments:</label>
            <textarea value={this.state.comments} onChange={this.handlecommentchange}></textarea>
         </div>
         <div>
            <label>Topic:</label>
            <select value={this.state.topic} onChange={this.handletopicchange}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">vue</option>
            </select>
        </div>
        <button type="submit" >submit</button>
        </form>
        )
      }
    }
export default Form
