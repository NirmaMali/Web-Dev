//reducers

import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{ id: "abc", task: "demo-task", isDone: false }],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: { //state, action
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            }
            state.todos.push(newTodo);  //direct mutation is possible with redux toolkit because it uses immer library under the hood which converts mutable code to immutable code

        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);

        },

        markAsDone: (state, action) => {
            const todo = state.todos.find((t) => t.id === action.payload);
            if (todo) {
                todo.isDone = !todo.isDone;   // toggle true/false
            }
        },
    },
});


export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;
export default todoSlice.reducer;