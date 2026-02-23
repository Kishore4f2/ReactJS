import { useState } from 'react'
import StatesDemo from './Components/StatesDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <StatesDemo message = {"Print this in child component only"}/>
    </>
  )
}

export default App
