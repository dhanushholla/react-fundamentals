import React, { Component } from 'react'

class Refsdemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef=React.createRef()//creating the ref.. it is common to create ref inside the constructor to access it anywhere inside the component
      this.cbref=null//callback ref step 1
      this.setcbref=(element)=>//here element is just a name for incoming parameter which is a dom element
      {
        this.cbref=element;
      }
    }
    
    componentDidMount()
    {
        console.log(this.inputRef)//object that has property current with value as the attched DOM needed
        this.inputRef.current.focus();//make the focus on the needed DOM element
        if(this.cbref!=null)
        {
            this.cbref.focus(); //here no need of the current property to access subproperty focus
        }
    }
    btnhandle=()=>{
        alert(this.inputRef.current.value)//access the value subproperty of the needed DOM element via ref using the property current.. to understand better extend the console.log() output and see
    }
  render() {
    return (
      <div>
        name:<input type="text" ref={this.inputRef}></input><br></br>
        password:<input type="password" ref={this.setcbref}></input>
        {/*above is step3 in callbackref */}
        <button onClick={this.btnhandle}>pass input</button>
      </div>
    )
  }
}

export default Refsdemo
