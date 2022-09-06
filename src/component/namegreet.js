import React, { Component } from 'react';

 //class component
// class Namegreet extends Component {
//     state = {  }; 
//     render(props)
//      { 
//     return(
//     <div className='namegreet-wrapper'>
//     <h1> hello {this.props.name} by name greet component who is {this.props.relation}</h1> 
//     <h3 >propchild:{this.props.children}</h3>
//     </div>
//     );
// }
// }


//sfc component

// const Namegreet = (props) => {
//     return (
//     <div className='namegreet-wrapper'>
//     <h1> hello {props.name} by name greet component who is {props.relation}</h1> 
//     <h3 >propchild:{props.children}</h3>
//     </div>);
// }

// //sfc but using destructuring... done in the function parameter itself instead of using direct props 
// const Namegreet = ({name,relation,children}) => {
//     return (
//     <div className='namegreet-wrapper'>
//     <h1> hello {name} by name greet component who is {relation}</h1> 
//     <h3 >propchild:{children}</h3>
//     </div>);
// }

//sfc but using destructuring... done in the function body itself instead of using direct props 
// const Namegreet = (props) => {
//     const {name,relation,children}=props;
//     return (
//     <div className='namegreet-wrapper'>
//     <h1> hello {name} by name greet component who is {relation}</h1> 
//     <h3 >propchild:{children}</h3>
//     </div>);
// }

// class component - destructuring
class Namegreet extends Component {
    state = {  }; 
    render(props)
     { 
    const {name,relation,children}=this.props;
    return(
    <div className='namegreet-wrapper'>
    <h1> hello {name} by name greet component who is {relation}</h1> 
    <h3 >propchild:{children}</h3>
    </div>
    );
}
}
export default Namegreet;
