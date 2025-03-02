import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';

function TodoItem({ todo }) {
    const { toggleTodo, updateTodo, removeTodo } = useTodo(); // Get functions
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            {/* Checkbox to Toggle Completion */}
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)} // Pass todo ID
            />

            {/* Editable Todo Text Field */}
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />

            {/* Edit / Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        updateTodo(todo.id, { ...todo, todo: todoMsg }); // Save changes
                    }
                    setIsTodoEditable((prev) => !prev); // Toggle edit mode
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>

            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => removeTodo(todo.id)} // Correct delete function
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
