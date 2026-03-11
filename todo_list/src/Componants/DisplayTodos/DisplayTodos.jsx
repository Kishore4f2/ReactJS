import React, { useEffect , useState} from 'react'

function DisplayTodos() {

    const[tasks,setTasks] = useState([])

    useEffect(()=>{
        async function getAllTodos() {
            try {
                let user_id = localStorage.getItem("login_user")
                let res = await fetch(`http://localhost:3001/todos?user_id=${user_id}`)
                let jsonRes = await res.json()
                setTasks(jsonRes)
            } catch (error) {
                console.log(error.message);  
            }
        }
        getAllTodos();
    },[])
    console.log(tasks);

  return (
    <div>
        <h1>All Todos</h1>
        {
            tasks.map(item=>(
                <div key={item.id}>
                    <h1>{item.task}</h1>
                    <button>Delete</button>
                    <button>
                        {item.isCompleted?"Completed":"Mark as Completed"}
                    </button>
                </div>
            ))
        }
    </div>
  )
}

export default DisplayTodos;