import React, { useEffect, useState } from "react";
import "./DisplayTodos.css";

function DisplayTodos() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    async function getAllTodos() {

      try {

        let user_id = localStorage.getItem("login_user");

        let res = await fetch(
          `http://localhost:3001/todos?user_id=${user_id}`
        );

        let jsonRes = await res.json();

        setTasks(jsonRes);

      } catch (error) {

        console.log(error.message);

      }
    }

    getAllTodos();

  }, []);

  return (

    <div className="todo-container">

      <h2>All Todos</h2>

      {tasks.map((item) => (

        <div className="todo-card" key={item.id}>

          <p>{item.task}</p>

          <div className="todo-buttons">

            <button>Delete</button>

            <button>
              {item.isCompleted
                ? "Completed"
                : "Mark as Completed"}
            </button>

          </div>

        </div>

      ))}

    </div>

  );
}

export default DisplayTodos;