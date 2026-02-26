import { useState } from "react";

function Counter() {
    const[count,setCount] = useState(0)

    const onIncrementBtn=()=>{
        setCount(count+5)
    }

    const onDecrementBtn=()=>{
        setCount(count-5)
    }

    return(
        <div>
            <h1>Counter</h1>
            <h1>{count}</h1>
            <button onClick={onIncrementBtn}>Increment</button>
            <button onClick={()=>setCount(0)}>Reset</button>
            <button onClick={onDecrementBtn}>Decrement</button>
        </div>
    )
}
export default Counter;