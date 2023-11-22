import React, { useState } from "react";


const Home = () => {
	const [todoList, setTodoList] = useState([{ label: "Sample Todo", done: false }])
	const [newTask, setNewTask] = useState("")
	const handleDelete = (index) => {
		let aux = todoList
		aux.splice(index, 1)
		setTodoList([...aux])
	}
	const handleSubmit = e => {
		e.preventDefault();
		setTodoList([...todoList, { label: newTask, done: false }]);
		setNewTask("")
	}
	const handleChange = e => {
		setNewTask(e.target.value)
		if (e.key == "Enter") {
			handleSubmit()
		}
	}
	return (
		<div className="List-Your-Todo container-fluid mt-5 mb-5 text-center">
		  <form onSubmit={(e) => handleSubmit(e)}>
			<input type="text" value={newTask} onChange={(e) => handleChange(e)} placeholder="What do you want to do?..." />
			<input type="submit" className="btn btn-secondary rounded-1 p-1" value={"Add task"} />
		  </form>

		  {todoList.length > 0 ? (
			<div className="container-fluid todo-items bg-light shadow-sm bg-body-tertiary rounded m-auto">
			  <i className="fa-regular fa-square-check ms-3" style={{ color: "#23C474" }}>
				{todoList.map((task, index) => (
				  <i key={index}>
					{task.label} <span onClick={(e) => handleDelete(index)}>X</span>
				  </i>
				))}
			  </i>
			</div>
		  ) : (
			<p>try adding some tasks to do!</p>
		  )}
		</div>
	  );
	};
	
	export default Home;