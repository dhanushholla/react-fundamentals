import React from 'react'

// normal hoc
// const EnhancedComponent = (OriginalComponent)=>{
//     class NewComponent extends React.Component{
//         render()
//         {
//             return <OriginalComponent name='dhanush'/>
//         }
//     }
//     return NewComponent
// }


//for our counter example

// const EnhancedComponent = (OriginalComponent)=>{
//         class NewComponent extends React.Component{
//             constructor(props) {
//                 super(props)
              
//                 this.state = {
//                    count:0
//                 }
//               }
//               incrementcount=()=>{
//                   this.setState((prevState)=>{
//                     return{count:prevState.count+1}  
//                   })
//                 }  
//             render()
//             {
//                 return <OriginalComponent count={this.state.count} incrementcount={this.incrementcount}/>
//             }
//         }
//         return NewComponent
//     }

// with naming convention for our counter example
    const withCounter = (WrappedComponent)=>{
        class WithCounter extends React.Component{
            constructor(props) {
                super(props)
              
                this.state = {
                   count:0
                }
              }
              incrementcount=()=>{
                  this.setState((prevState)=>{
                    return{count:prevState.count+1}  
                  })
                }  
            render()
            {
                return <WrappedComponent count={this.state.count} incrementcount={this.incrementcount}/>
            }
        }
        return WithCounter
    }

export default withCounter