import { useState } from "react";
import StudentCard from "./Components/StudentCard";
import Counter from "./Components/Counter";
import LoginLogout from "./Components/LoginLogout";
import ListOfUsers from "./Components/ListOfUsers";


function App() {
  const userDetails = [
    {
      id:101,
      username:"Kishore",
      age:21,
      batch:65
    },
    {
      id:102,
      username:"Suresh",
      age:22,
      batch:65
    },
    {
      id:103,
      username:"Manoj",
      age:23,
      batch:65
    },
    {
      id:104,
      username:"Aditya",
      age:24,
      batch:65
    }
  ]
  return(
    <>
    {/* <StudentCard name="Kishore" age={22} batch={65}/>
    <StudentCard name="Suresh" age={23} batch={65}/>
    <StudentCard name="Manoj" age={24} batch={65}/> */}

    {/* <Counter/> */}

    {/* <LoginLogout/> */}

    <ListOfUsers userDetails={userDetails}/>
    </>
  )
}
export default App;
