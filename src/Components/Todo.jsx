/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {useState} from "react";
import "./Todo.css";
import TodoList from "./TodoList/TodoList";

export default function Todo() {
	let [task, setTask] = useState([]);
	let [input, setInput] = useState("");

	function submitData(event) {
		event.preventDefault();
		let data = input;
		let newInput = data.trim();
		if (newInput === "") {
			alert("Enter valid task");
		} else {
			task.push(newInput);
		}
		setInput("");
	}
	function showChange(event) {
		setInput(event.target.value);
	}
	return (
		<div>
			<div className="container">
				<div className="todo-container">
					<form action="" className="todo-form" onSubmit={submitData}>
						<h1 className="todo-name">Todo App</h1>
						<input
							type="text"
							className="todo-input"
							placeholder="Enter your Task....."
							onChange={showChange}
							value={input}
						/>
					</form>
				</div>
				<div className="todo-list-container">
					<TodoList task={task} setTask={setTask} />
				</div>
			</div>
		</div>
	);
}
