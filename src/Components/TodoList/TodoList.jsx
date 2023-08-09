/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "./TodoList.css";
import {FaTrash} from "react-icons/fa6";
import {FaPencil} from "react-icons/fa6";

export default function TodoList(props) {
	const task = props.task;
	const setTask = props.setTask;

	function editTask(data) {
		let newVal = prompt("Enter your new task")
		let trimVal = newVal.trim()

		if(trimVal===""){
			alert("Task cannot be empty")
		}
		else{
			let updatedTask = task.map((val)=>{
				if(val===data){
					return trimVal
				}else{
					return val
				}
			})
			setTask(updatedTask)
		}

		// let updatedTask = task.map((val)=>{
		// 	if(val === data){
		// 		return newVal
		// 	}else{
		// 		return val
		// 	}
		// })
		// setTask(updatedTask)
	}

	function deleteTask(data) {
		let updatedTask = task.filter((val) => {
			if (val != data) {
				return val;
			}
		});
		setTask(updatedTask);
	}

	let taskList = task.map((val) => {
		return (
			<li key={val.index} className="todo-list-li">
				<div className="list">
					<h3>{val}</h3>
					<div className="crud">
						<FaPencil
							className="edit-icon"
							onClick={() => {
								editTask(val);
							}}
						/>
						<FaTrash
							className="delete-icon"
							onClick={() => {
								deleteTask(val);
							}}
						/>
					</div>
				</div>
			</li>
		);
	});
	return (
		<div>
			<ul className="todo-list-ul">{taskList}</ul>
		</div>
	);
}
