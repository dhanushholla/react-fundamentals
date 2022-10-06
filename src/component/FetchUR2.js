import React,{useReducer,useEffect} from 'react'
import axios from 'axios'


const initialstate={
    loading:true,
    error:'',
    post:{}
}
const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'FETCH_SUCCESS':
            return { loading:false,post:action.payload,error:'' }
        case 'FETCH_ERROR':
                return { loading:false,post:{},error:'error happened' }
        default:
                return state
    }
}
function FetchUR2() {
    const[obtaineddata,dispatch]=useReducer(reducer,initialstate)
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
          .then((res)=>dispatch({type:'FETCH_SUCCESS',payload:res.data}))
    
          .catch(()=>dispatch({type:'FETCH_ERROR',}))
      }, []);
  return (
    <div>
         {obtaineddata.loading ? 'loading' : obtaineddata.post.title}
        {obtaineddata.error ? obtaineddata.error: null}
    </div>
  )
}

export default FetchUR2
