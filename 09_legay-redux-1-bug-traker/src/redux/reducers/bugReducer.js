// const lastId = 1;

// export default function reducer(state, action) {
//     if (action.type==='bugAdded') {
//         return [
//             ...state,
//             {
//                 id: ++lastId,
//                 description: action.payload.description,
//                 resolved: false
//             }
//         ]
//     } else if (action.type==='bugRemoved') {
//         return state.filter(bug => bug.id !== action.id)
//     } else if (action.type==='bugSolved') {
//         return [
//             ...state,
//             {
//                 ...state.bug,
//                 resolved: true
//             }
//         ]
//     }
//     return state;
// }

const initialState = [];

const bugReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUG_ADDED":
      return [
        ...state,
        {
          id: state.length + 1,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case "BUG_REMOVED":
      return state.filter((bug) => bug.id !== action.payload.id);
    case "BUG_SOLVED":
      return state.map((bug) =>
        bug.id === action.payload.id ? { ...bug, resolved: true } : bug
      );
    default:
      return state;
  }
};

export default bugReducer;
