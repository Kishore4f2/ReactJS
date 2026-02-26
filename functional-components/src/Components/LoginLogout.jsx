import React, { useState } from "react";

function LoginLogout() {
    const[isLogin,setIsLogin] = useState(true);

    return(
        <div>
            <h1>{isLogin?"This is a Login page":"This is a Logout page"}</h1>
            <button onClick={()=>setIsLogin(!isLogin)}>Logout</button>
        </div>
    )
}
export default LoginLogout;