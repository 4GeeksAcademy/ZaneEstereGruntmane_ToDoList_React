import React from "react";

const Input = ({todo, trash, total}) => {

  return (
    <div className= "container-fluid">


      <div className="todo-items justify-content-around align-items-center bg-light shadow-sm bg-body-tertiary rounded m-auto" style={{ width: "30rem" }}>
        <i className="fa-solid fa-check fa-sm" style={{ color: "#8e9ab0" }}></i>
        <span className="todos-text">{todo}</span>
        <button className="todos-trash btn"> {trash}
          <i className="fa-solid fa-square-minus" style={{ color: "#de1818" }}></i>
        </button>
  
      </div>
      <div className="total-todo text-center justify-content-around fs-6 fw-light">{total}</div>
      
    </div>

  );
}

export default Input;
