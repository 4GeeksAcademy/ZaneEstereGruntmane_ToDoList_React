import React, { useState } from "react";
import Input from "../component/Input.jsx";

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("")
  const [todos, setTodos] = useState([]);

  const handleKeyPress = (e) => {

    if (e.key === "Enter") {
      e.preventDefault()
      setTodos([...todos, e.target.value])
      setInputValue("")
    }
  };

  const handleDelete = (index) => {
    let aux = todos
    aux.splice (index, 1)
    setTodos ([... aux])
  }

  return (

      <div className="List-Your-Todo container-fluid mt-5 mb-5">
        <form className="list-input text-center">
          <h1 className="list-title">To Do List</h1>

          <div className="container-fluid text-align-left">
            <input
              className="input-control border-dark-subtle"
              style={{ width: "30rem" }}
              type="text"
              placeholder="What do you want to do?"
              aria-label="todo list input field"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              onKeyDown={handleKeyPress}

            />
          </div>
          {todos.map((todo, index) => (
            <Input
              todo={todo}
              trash={(todo) => handleDelete(index)}
            />
          ))}


        </form>

        <p className="counter">
          {
            todos.length === 0 ? null :
              todos.length === 1 ? `${todos.length} item` :
                `${todos.length} items`
          }
        </p>
      </div>
  )
};
export default ToDoList;
