import React from 'react'
import './mystyle.css'
function Stylesheet(props) {
    let obtainedclassname=props.clsname
  return (
    <div>
      {/* <h1 className='primary'>StyleSheets Content </h1>  -- normal classname toggling based on prop sent from app component*/}
      {/* multi-class style adding using ``backticks|template literals.... alternative to them we can make use of the library called classNames which makes code much cleaner */}
      <h1 className={`${obtainedclassname} bigfont`}>StyleSheets Content </h1>
    </div>
  )
}

export default Stylesheet
