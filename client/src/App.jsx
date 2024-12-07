import { useEffect } from "react"
import { useState } from "react"
import Todolist from "./components/Todolist";
import TodoInput from "./components/Todoinput";

function App() {

  return (
    <>
      <TodoInput/>
      <Todolist/>
    </>
  )
}

export default App
