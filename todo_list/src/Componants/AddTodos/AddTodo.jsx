import React, { useState } from 'react'
import DisplayTodos from '../DisplayTodos/DisplayTodos';

function AddTodo() {
    const[task, setTask] = useState("")

    const onHandleAddBtn = async()=>{
        try{
            let date = new Date();
            let res = await fetch(`http://localhost:3001/todos`, {
                method : "POST",
                headers : {
                    'Content-Type' : 'application/json'
                },  
                body:JSON.stringify({
                    task,
                    isCompleted:false,
                    date:date.toLocaleString(),
                    user_id:localStorage.getItem("login_user")
                })
        })
        if(res.ok===true) {
            console.log("Task Added");
        }
        } catch (error) {
            console.log(error.message);
        }
    }

  return (
    <div>
        <input type="text" onChange={(event)=>setTask(event.target.value)} />
        <button onClick={onHandleAddBtn}>Add</button>
        <DisplayTodos/>
    </div>
  )
}

export default AddTodo