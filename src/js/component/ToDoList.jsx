import React from "react";
import Input from "../component/Input.jsx";

const ToDoList = () => {
  return (
    <div className="List-Your-ToDo container-fluid text-center mt-5 mb-5">
      <form className="list-input">
        <h1 className="list-title">To Do List</h1>
        <Input
        />
      </form>
    </div>
  );
};

export default ToDoList;
