

import AddForm from "./AddForm";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
    const todos = useSelector((state) => state.todo?.todos || []);
    const dispatch = useDispatch();

    console.log(todos); // 👈 check this

    return (
        <>
            <h3>Todo List</h3>

            {todos.length === 0 && <p>No todos found</p>}

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span
                            style={{
                                textDecoration: todo.isDone ? "line-through" : "none",
                                marginRight: "10px"
                            }}
                        >
                            {todo.task}
                        </span>

                        {/* ✅ THIS MUST SHOW */}
                        <button onClick={() => dispatch(markAsDone(todo.id))}>
                            Done
                        </button>

                        <button onClick={() => dispatch(deleteTodo(todo.id))}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}