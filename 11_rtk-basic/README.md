# Chat Application with Redux Toolkit and Tailwind CSS

This project is a simple chat application built with React, Redux Toolkit, and Tailwind CSS. It features a clean layout with a sidebar displaying previous chats, a chat display area that scrolls with messages, and a message input section pinned at the bottom.

## Features

- **Real-time Chat Interface:**  
  Users can type in messages and receive AI responses.
- **Sidebar for Previous Chats:**  
  A scrollable sidebar lists all previous chat messages.
- **Responsive Layout:**  
  Built with Tailwind CSS, featuring a sidebar on the left and the main chat area on the right.
- **State Management with Redux Toolkit:**  
  Simplified Redux setup using Redux Toolkit with reducers and actions managed efficiently.
- **React Redux Hooks:**  
  Utilizes `useSelector` and `useDispatch` for connecting React components with the Redux store.
- **Redux DevTools Integration:**  
  Easily debug and inspect state changes using Redux DevTools.
- **Gemini API Integration:**  
  Fetches AI responses via the Gemini API, demonstrating API integration in a chat context.
- **Fundamentals of a Chat Application:**  
  Provides a basic structure and learning ground for creating interactive chat applications.


## Learning & Observations

- **Redux Toolkit:**
  - Implemented the store, reducers, and actions using Redux Toolkit.
  - Learned that state mutations are handled under the hood using Immer, so there's no need to manually use the spread operator to maintain immutability.

- **React Redux Hooks:**
  - Utilized `useSelector` to access state data from the Redux store.
  - Leveraged `useDispatch` to dispatch actions and update the state.

- **Redux DevTools:**
  - Integrated Redux DevTools for efficient debugging and inspection of state changes during development.

- **API Integration:**
  - Set up the Gemini API and handled asynchronous responses to fetch AI-generated replies.

- **Chat Application Fundamentals:**
  - Gained practical experience in building a chat interface, including layout management, state handling, and API communication.
