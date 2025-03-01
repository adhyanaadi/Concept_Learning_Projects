// Why Context API?
// ✔ Eliminates prop drilling
// ✔ Keeps components independent
// ✔ Makes state management simpler
// ✔ Scales easily for larger apps

// Understanding the Roles of UserContext and UserContextProvider
// UserContext: This is the context object itself, created using React.createContext(). It acts as a data store that components can access.
// UserContextProvider: This is a wrapper component that provides the context to child components. It holds the state (user) and the function (setUser).

// import "./App.css";
// import Login from "./components/Login";
// import Profile from "./components/Profile";
// import UserContextProvider from "./context/UserContextProvider";
// import Theme from "./components/Theme";
// import ThemeContextProvider from "./context/ThemeContextProvider";
// import { useContext } from "react";
// import ThemeContext from "./context/ThemeContext";

// function App() {
//   return (
//     <>
//       <ThemeContextProvider>
//         <UserContextProvider>
//           <Login />
//           <Profile />
//           <Theme />
//         </UserContextProvider>
//       </ThemeContextProvider>
//     </>
//   );
// }

// function themedApp() {
//   const {theme} = useContext(ThemeContext)
//   return (
//     <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
//     <h1>React Context with Multiple Contexts</h1>
//     <ThemeToggle />
//     <Login />
//     <Profile />
// </div>
//   )
// }

// export default App;
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import ThemeToggle from './components/ThemeToggle';
import UserContextProvider from './context/UserContextProvider';
import ThemeContextProvider from './context/ThemeContextProvider';

function App() {
    return (
        <ThemeContextProvider>
            <UserContextProvider>
                <h1>React Context with Multiple Contexts</h1>
                <ThemeToggle />
                <Login />
                <Profile />
            </UserContextProvider>
        </ThemeContextProvider>
    );
}

export default App;
