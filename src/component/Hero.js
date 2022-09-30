import React from 'react'

function Hero({heroname}) {
    if(heroname==='villain')
    {
        throw new Error("not a hero!! he is villain")
    }
    
  return (
    <div>
     <h2>hero is {heroname}</h2> 
    </div>
  )
}

export default Hero
