import React from "react";

const Input = ({ todo, trash, total }) => {

  return (
    <div className="d-flex flex-column align-items-center ju ">

      <div className="todo-items bg-light shadow-sm bg-body-tertiary rounded m-auto">
      
          <i className="fa-solid fa-check fa-sm" style={{ color: "#8e9ab0"}}></i>
          <span className="todos-text">{todo}</span>
          <button className="todos-trash btn"> {trash}
            <i className="fa-solid fa-square-minus" style={{ color: "#de1818" }}></i>
          </button>
  
      </div>

      <div className="total-todos fs-6 fw-light text-left m-auto">{total}</div>
      
    </div >

  )
}

export default Input;
