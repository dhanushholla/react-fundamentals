import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Datafetchue2() {
    // const[posts,setPosts]=useState([])
    const[post,setPost]=useState({})
    const [id,setId]=useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{console.log(res)
            // setPosts(res.data)}
                setPost(res.data)}
            )
        .catch(error=>console.log(error))

    },[id])
  return (
    <div>
      <input type="text"  name={id} onChange={(e)=>setId(e.target.value)} placeholder="enter postid: 1-100"></input>
      {/* <ul>
        {
            posts.map((post)=><li key={post.id}>{post.title}</li>)
        }
      </ul> */}
      <div>{post.title}</div>
    </div>
  )
}

export default Datafetchue2
