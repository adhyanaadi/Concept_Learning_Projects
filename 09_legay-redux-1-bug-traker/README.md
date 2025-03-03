# 🐞 Redux Bug Tracker (Pure Redux + Vite + Tailwind CSS)

This project is a **Bug Tracker** built using **React, Redux (without Redux Toolkit), and Tailwind CSS** in a **Vite.js environment**.

## 🚀 Features
- **Manage Bugs**: Add, solve, and remove bugs.
- **Redux State Management**: Uses pure Redux (no Redux Toolkit).
- **Tailwind CSS**: Beautiful UI with responsive design.
- **Vite.js**: Fast development setup.

---

## 🔄 How Redux Works

1. We create an action object and dispatch it to the store.
2. The store’s dispatch method takes the action and sends it to the reducer.
3. The reducer is never called directly; instead, the store manages the reducer execution.
4. The reducer processes the action, computes the new state, and returns it.
5. The store updates its internal state and informs the UI about the changes.
6. UI components retrieve the updated state from the store and re-render accordingly.
