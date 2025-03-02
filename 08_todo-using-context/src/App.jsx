import React from "react";
import { TodoProvider } from "./context/TodoContext"; // Ensure correct import
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList"; // Corrected

function App() {
    return (
        <TodoProvider>
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold text-center my-4">Todo App</h1>
                <TodoForm />
                <TodoList /> {/* Corrected: Render TodoList instead of a single TodoItem */}
            </div>
        </TodoProvider>
    );
}

export default App;
