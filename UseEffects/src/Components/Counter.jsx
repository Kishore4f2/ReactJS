import React from "react";
import { Component } from "react";

function Counter() {
    const[count,setCount] = useState(0);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+5)}>Increment</button>
        </div>
    )
}

export default Counter;