import React, { useState, useEffect } from "react";
import axios from "axios";
function FetchUR1() {
  const [loading, setloading] = useState(true)
  const [error, seterror] = useState("")
  const [post, setpost] = useState({})
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setloading(false)
        seterror("")
        setpost(res.data)
      })

      .catch((error) => {
        setloading(false)
        seterror("error happened")
        setpost({})
      })
  }, []);
  return (
    <div>
      {loading ? 'loading' : post.title}
      {error ? error: null}
    </div>
  );
}

export default FetchUR1;
