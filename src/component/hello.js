import React, { Component } from 'react';

const Hello = () =>{
    return React.createElement('div',{id:1,className:"dummydiv"},React.createElement('h1',null,'hello Dhanush without jsx'));// here react.createelemt(elementtypetobecreated/tag,properties/attributeoftag,childrentag/innertext) note that react.creaetelement accepts any no of children tag
            // React.createElement('div',null,'hello Dhanush without jsx')
            // here the second args ie null is nothing but an object with key value pair lik {id:'hello div id'}   which can be seen using inspect in browser
}

export default Hello;