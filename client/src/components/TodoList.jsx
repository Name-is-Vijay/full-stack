import React, { useState } from 'react'
import TodoCard from './TodoCard'

export default function Todolist() {
    
    const [todos,setTodos] = useState([
        'Become proficient in react',
        'Learn backend'        
    ])

    // function handleAddTodo(newTodo)

  return (
    <>
        <div className="container mt-4">
            <ul className="list-group">
                {todos.map((todo, todoIndex) => {
                    return (
                        <TodoCard key={todoIndex}>
                            <p>{todo}</p>
                        </TodoCard>
                    )
                })}
            </ul>
        </div>
    </>
  )
}
