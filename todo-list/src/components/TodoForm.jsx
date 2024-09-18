import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoForm() {
  const [todo,setTodo] = useState("")
  const {addTodo} = useTodo();

  const add=(e)=>{
    e.preventDefault();
    if(!todo) return;
    addTodo({todo,completed:false})
    setTodo("")
  }

  return (
    <>
      <form onSubmit={add} className="flex items-center space-x-3 bg-white shadow-lg p-4 rounded-lg">
        <input
          type="text"
          placeholder="Write todos.."
          className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition-all"
        >
          Add
        </button>
      </form>
    </>
  );
  
}

export default TodoForm
