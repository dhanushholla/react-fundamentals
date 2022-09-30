import React, { Component } from 'react'
import axios from 'axios'
class Postlist extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         errors:""
      }
    }
    componentDidMount()
    {
        // axios.get('https://jsonplaceholder.typicode.com/posts')//correct api
        axios.get('https://jsonplaceholder.typicode.com/posts11')//wrong api
        .then((response)=>{
            console.log(response)
            this.setState({posts:response.data})
        })
        .catch((error)=>
        {console.log(error)
        this.setState({errors:"worst ra wrong api"})
        })
    }
    
  render() {
    const {posts,errors}=this.state
    return (
      <div>
        list of Posts
        {
            (posts.length)?
                posts.map((post)=><div key={post.id}>{post.title}</div>)
            :""
        }
        {errors?<div>{errors}</div>:""}
      </div>
    ) 
  }
}

export default Postlist
