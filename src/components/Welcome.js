// write code for Welcome component here
import React from 'react'
// import App from './App'

const Welcome=(props)=>{
    return(
        <div>
        Hey !
        <h1>{props.name}</h1>
        <h2>Welcome to Newton School.</h2>
        </div>
    )

    

    
}
export default Welcome;
