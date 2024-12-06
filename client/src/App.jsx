import { useEffect } from "react"
import { useState } from "react"

function App() {

  const [count,setCount] = useState(0)

  useEffect(()=>{
    console.log("rendered successfully");
  }, [])

  const btnClick=()=>{
    setCount((count)=>count+1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={btnClick}>Click</button>
    </div>
  )
}

export default App
