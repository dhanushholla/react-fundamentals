import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false
      }
    }
    
    static getDerivedStateFromError(error)
    {
        return({
            hasError:true
        })
        
    }
    componentDidCatch(error,info)
    {
        console.log('error:',error)
        console.log('info',info)
    }
  render() {
        if(this.state.hasError)
        {
            return <h1>seems like we encountered an error</h1> 
        }
        return this.props.children;//this refers to the component that we are actually rendering 
  }
}

export default ErrorBoundary
