import React, { createContext, useContext, useState } from "react";

export const TodoContext = createContext();

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  const addTodo = (newTodo) =>
    setTodo((prev) => [{ id: Date.now(), ...newTodo }, ...prev]);

  const updateTodo = (id, updatedTodo) =>
    setTodo((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? updatedTodo : prevTodo))
    );

  const removeTodo = (id) =>
    setTodo((prev) => prev.filter((todo) => todo.id !== id));

  const toggleTodo = (id) =>
    setTodo((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      )
    );

  return (
    <TodoContext.Provider value={{ todo, addTodo, updateTodo, removeTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
