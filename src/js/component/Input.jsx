import React from "react";

const Input = () => {

    return (
        <div>
          <input
            className="input-control container-fluid border-dark-subtle"
            style={{ width: "30rem"}}
            type="text"
            placeholder="What do you want to do?"
            aria-label="todo list input field"
          />
      
      <div className="todo-items d-flex justify-content-between align-items-center m-auto" style={{ width: "30rem" }}>
            <input
              className="todo-completed"
              type="checkbox"
            />
            <span className="todo-text">Go surfing</span>
            <button className="todo-delete btn">
            <i className="fa-solid fa-square-minus" style={{color: "#de1818"}}></i>
            </button>
          </div>
        </div>
      );
}
        

export default Input;
