import { useState } from "react"

const ConditionRendering =() =>{
    
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    let message;
    if(isLoggedIn){
        message = <p>Welcome, User</p>
    }else{
        message = <p>Please login!</p>
    }

    function handleLogin(){
        setIsLoggedIn(true)
    }

    return (
        <div>
            {message}
            <br/>
            <button onClick = {handleLogin}>Login</button>
        </div>
    )
}

export default ConditionRendering