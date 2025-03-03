// import React from 'react'
// import store from '../redux/store/store'
// import { bugAdded, bugRemoved, bugSolved } from '../redux/actions/bugActions'
// import { useState } from 'react'
// import { useEffect } from 'react'

// const BugList = () => {
//     const [bugs, setBugs] = useState(store.getState())

//     useEffect(()=>{
//         const unsubscribe = store.subscribe(()=>{
//             setBugs(store.getState())
//         })
//         return ()=>unsubscribe()
//     })

//     const addBug = ()=>{
//         const description = prompt("Enter bug description:")
//         store.dispatch(bugAdded(description))
//     }

//     const solveBug =(id)=>{
//         store.dispatch(bugSolved(id))
//     }
//     const removeBug=(id)=>{
//         store.dispatch(bugRemoved(id))
//     }
//   return (
//     <div>
//       <h2>Bug Tracker</h2>
//       <button onClick={addBug}>Add Bug</button>
//       <ul>
//         {bugs.map((bug)=>{
//             <li key={bug.id}>
//                 {bug.description} - {bug.resolved?"✅ Resolved" : "❌ Pending"}
//                 <button onClick={()=>solveBug(bug.id)}>Solve</button>
//                 <button onClick={()=>removeBug(bug.id)}>Remove</button>
//             </li>
//         })}
//       </ul>
//     </div>
//   )
// }

// export default BugList
import React, { useState, useEffect } from "react";
import store from "../redux/store/store";
import { bugAdded, bugRemoved, bugSolved } from "../redux/actions/bugActions";

const BugList = () => {
  const [bugs, setBugs] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setBugs(store.getState());
    });
    return () => unsubscribe(); // Cleanup subscription
  }, []);

  const addBug = () => {
    const description = prompt("Enter bug description:");
    if (description) store.dispatch(bugAdded(description));
  };

  const solveBug = (id) => store.dispatch(bugSolved(id));
  const removeBug = (id) => store.dispatch(bugRemoved(id));

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Bug Tracker 🐞
      </h2>
      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mb-4 transition duration-300"
        onClick={addBug}
      >
        ➕ Add Bug
      </button>
      <ul className="space-y-3">
        {bugs.length === 0 ? (
          <p className="text-gray-500 text-center">No bugs found! 🎉</p>
        ) : (
          bugs.map((bug) => (
            <li
              key={bug.id}
              className="flex items-center justify-between p-3 bg-gray-100 rounded-md"
            >
              <span className="font-medium text-gray-800">
                {bug.description}
              </span>
              <span
                className={`text-sm font-bold ${
                  bug.resolved ? "text-green-600" : "text-red-600"
                }`}
              >
                {bug.resolved ? "✅ Resolved" : "❌ Pending"}
              </span>
              <div className="flex space-x-2">
                {!bug.resolved && (
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-md transition duration-300"
                    onClick={() => solveBug(bug.id)}
                  >
                    ✔ Solve
                  </button>
                )}
                <button
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md transition duration-300"
                  onClick={() => removeBug(bug.id)}
                >
                  🗑 Remove
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default BugList;
