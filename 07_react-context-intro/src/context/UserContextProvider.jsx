// 2️⃣ Why Do We Import UserContextProvider Only in App.jsx?
// 👉 UserContextProvider is only needed once, at the top level, to wrap the entire app.
// 👉 This ensures that all components inside it have access to UserContext.

import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
  return (
    <>
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
    </>
  )
}

export default UserContextProvider
