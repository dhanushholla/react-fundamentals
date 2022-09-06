import React from 'react'

function Columns() {
    const items=[{name:'dhanush',id:1},{name:'anu',id:2}]
  return (
    <React.Fragment>
        {
            items.map((item) => (
                <React.Fragment key={item.id}>
                   <p>Hi i'm {item.name} and my id is {item.id}</p>
                </React.Fragment>
            ))
                      //(or) because while using the arrow fn -- the fn body enclosed inside () need no return explicitly but when it is in {} if jsx is there inside it then we have to wrap all logic inside () and preceeded by return keyword
          //   items.map((item) => {
          //     return(<React.Fragment key={item.id}>
          //        <p>Hi i'm {item.name} and my id is {item.id}</p>
          //     </React.Fragment>)
          // })

        }
      <td>Name</td>
      <td>Dhanush</td>
    </React.Fragment>
  )
}

export default Columns
