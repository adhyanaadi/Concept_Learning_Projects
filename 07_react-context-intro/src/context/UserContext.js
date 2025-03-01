// 1️⃣ Why Do We Import UserContext in Login.jsx and Profile.jsx?
// 👉 UserContext is the actual "context" object that stores and provides access to the shared state (user and setUser).
// 👉 We import it in Login.jsx and Profile.jsx because we need to access (useContext(UserContext)) the stored user data.


import React from "react";

const UserContext = React.createContext()
export default UserContext;