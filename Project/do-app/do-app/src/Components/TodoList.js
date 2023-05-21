import { useState } from "react";

//Task (TodoList) State 
const [Todo, setTodo]=useState([
    {id:1, "Title":"Cyber Security", "status": false},
    {id:2, "Title": "Software", "status":false}
]);
//Temp State
const [newTask, setNewTask]=useState("");
const [updateData, setUpdateDate]=useState("");

//add task
const AddTask=()=>{
    
}

//delete task
const DeleteTask=(id)=>{

}

//Edit task
const EditTask=(id)=>{

}

//to mark task completed
const CompletedTask=(id)=>{

}
//to cancel update
const CancelUpdate=()=>{

}

// to change update
const ChangeUpdates=(e)=>{

}
// to update task
const UpdateTask=()=>{

}
return(
    {Todo}


)
