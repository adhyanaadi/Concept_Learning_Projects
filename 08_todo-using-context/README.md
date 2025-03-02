# 📝 Todo App - Learning React Context API

This project is a **Todo App** built using **React** to demonstrate **State Management** concepts, including **Context API**, **Prop Drilling**, and best practices in structuring a React project.

---

## 📌 **Project Overview**
- **Manage Todos**: Add, update, delete, and toggle completion.
- **Use Context API**: Avoid prop drilling by using a global state.
- **Prop Drilling Alternative**: Understand how to pass props manually.
- **State Management**: Learn `useState` and `useContext` hooks.

---

## 📂 **Project Structure**
📦 src
 ┣ 📂 components
 ┃ ┣ 📜 TodoForm.jsx  → Input form to add todos
 ┃ ┣ 📜 TodoList.jsx  → Displays all todos
 ┃ ┣ 📜 TodoItem.jsx  → Represents a single todo
 ┣ 📂 context
 ┃ ┣ 📜 TodoContext.jsx  → Manages global state via Context API
 ┣ 📜 App.jsx  → Main component wrapping everything in TodoProvider
 ┣ 📜 main.jsx  → Entry point for rendering the App
 ┣ 📜 index.css → Styling
 ┣ 📜 vite.config.js / package.json → Config & dependencies

## 🔄 **Flow Diagram with Context API**
App.jsx
 ├── TodoProvider (Holds global state)
      ├── TodoForm (Uses addTodo from context)
      ├── TodoList (Uses todo state from context)
           ├── TodoItem (Uses updateTodo, removeTodo from context)

## 🔄 **Flow Diagram without Context (Prop Drilling)**
App.jsx (Holds global state)
 ├── TodoForm (Receives addTodo as prop)
 ├── TodoList (Receives todos, updateTodo, removeTodo as props)
      ├── TodoItem (Receives individual todo + functions as props)

