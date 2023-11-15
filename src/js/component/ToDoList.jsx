import React, { useState } from "react";
import Input from "../component/Input.jsx";

const ToDoList = () => {

  const [todos, setTodos] = useState([]);

  const handleKeyPress = (e) => {
    
    if (e.key === "Enter") {
      e.preventDefault()
      setTodos([...todos, e.target.value]);
    }
  
  };

  return (
    <div className="List-Your-Todo container-fluid text-center mt-5 mb-5">
      <form className="list-input">
        <h1 className="list-title">To Do List</h1>

        <input
        className="input-control container-fluid border-dark-subtle"
        style={{ width: "30rem" }}
        type="text"
        placeholder="What do you want to do?"
        aria-label="todo list input field"

        onKeyDown={handleKeyPress}
      />

        {todos.map((todo) => (
        <Input 
          todo={todo}
  
         />
        
              ))}
            </form>
          </div>
        );
      };

export default ToDoList;
