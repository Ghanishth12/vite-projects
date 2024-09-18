import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoItems({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };
  return (
    <div className="bg-[#c6e9a7] p-4 rounded-lg shadow-lg flex items-center justify-between space-x-4 mb-4">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleCompleted}
          className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded"
        />
        <input
          type="text"
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
          className={`text-lg p-2 bg-white border ${
            isTodoEditable ? "border-gray-300" : "border-transparent"
          } rounded focus:outline-none ${
            isTodoEditable ? "focus:ring-2 focus:ring-blue-500" : ""
          } ${todo.completed ? "line-through text-gray-400" : "text-black"}`}
        />
      </div>
      <div className="flex space-x-2">
        <button
          className={`p-2 text-white rounded-lg ${
            todo.completed
              ? "bg-gray-300 cursor-not-allowed"
              : isTodoEditable
              ? "bg-green-500 hover:bg-green-600"
              : "bg-fuchsia-400 hover:bg-fuchsia-500"
          }`}
          onClick={() => {
            if (todo.completed) return;
            if (isTodoEditable) {
              editTodo();
            } else {
              setIsTodoEditable((prev) => !prev);
            }
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? "S" : "E"}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="p-2 bg-lime-400 text-red-800 rounded-lg hover:bg-lime-500 hover:text-red-900"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default TodoItems;
