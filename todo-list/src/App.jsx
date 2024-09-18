import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm';
import TodoItems from './components/TodoItems';
import { TodoProvider } from './contexts/TodoContext';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) =>{
    setTodos((prev)=>[{id: Date.now(),...todo},...prev])
  }

  const updateTodo=(id, todo)=>{
    setTodos((prev)=> prev.map((prevTodo)=>prevTodo.id === id ? todo : prevTodo))
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=> prev.filter((prevTodo)=> prevTodo.id !== id ))
  }

  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((todo)=>todo.id===id ? {...todo,completed: !todo.completed} : todo))
  }

  useEffect(()=>{
    const items = JSON.parse(localStorage.getItem("items"));

    if(items && items.length>0){
      setTodos(items)
    }
  },[])

  useEffect(()=>{
    (localStorage.setItem("items",JSON.stringify(todos)))
  },[todos])
  
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <TodoForm />
      {todos.map((todo)=>{
        return <div key={todo.id}>
          <TodoItems todo={todo} />
        </div>
      })}
    </TodoProvider>
  )
}

export default App
