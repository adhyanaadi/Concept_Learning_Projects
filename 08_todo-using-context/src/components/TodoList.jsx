import React from "react";
import { useTodo } from "../context/TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
    const { todo } = useTodo(); // Get todos from context

    return (
        <div className="mt-4 space-y-2">
            {todo.length === 0 ? (
                <p className="text-center text-gray-500">No todos yet.</p>
            ) : (
                todo.map((t) => <TodoItem key={t.id} todo={t} />) // Render TodoItem for each todo
            )}
        </div>
    );
}

export default TodoList;
