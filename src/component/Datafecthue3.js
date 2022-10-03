import React,{useState,useEffect} from 'react'
import axios from 'axios'


//here what we did is ..we have the input field which takes id of post as input an setstate id which is to be passed with url
//here we wrote a btn with clickhandler fn which has logic to set the another idbntclick with input field id value and made that as dependency array as idbtnclick
//thus thereby making click alone calls the useeffect which inturn has the logic for the api fecthing..thereby controlling what needs to displayed on the UI

function Datafetchue3() {
    // const[posts,setPosts]=useState([])
    const[post,setPost]=useState({})
    const [id,setId]=useState(1)
    const[idfrombtnclick,setIdfrombtnclick]=useState(1)

    const handleclick=()=>{
        setIdfrombtnclick(id)//here id is the value from the text input field
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{console.log(res)
            // setPosts(res.data)}
                setPost(res.data)}
            )
        .catch(error=>console.log(error))

    },[idfrombtnclick])
  return (
    <div>
      <input type="text"  name={id} onChange={(e)=>setId(e.target.value)} placeholder="enter postid: 1-100"></input>
      <button onClick={handleclick}>fetch post</button>
      {/* <ul>
        {
            posts.map((post)=><li key={post.id}>{post.title}</li>)
        }
      </ul> */}
      <div>{post.title}</div>
    </div>
  )
}

export default Datafetchue3
