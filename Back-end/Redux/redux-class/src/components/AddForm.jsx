import { useDispatch } from "react-redux";
import {useState} from "react";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm(){
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
        setTask("");

    };



    return(
        <>
        <form onSubmit={submitHandler}>
        <h3>Add Todo</h3>
        <input type="text" placeholder="Enter task" onChange={(e) => setTask(e.target.value)} />
        <button>Add Task</button>
        </form>
        </>
    );
}