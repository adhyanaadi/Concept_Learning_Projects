// import { configureStore } from "@reduxjs/toolkit"
// import bugReducer from "../reducers/bugReducer"

// // const store = createStoreHook
// // {bugs:[
// //     {
// //         id:1,
// //         description: "",
// //         resolved: false
// //     }
// // ]}

// const store = configureStore({
//     reducer: {
//         bugs: bugReducer
//     }
// })

// export default store;
import { legacy_createStore } from "redux";
// import { createStore } from "redux";
import bugReducer from "../reducers/bugReducer";

// const store = createStore(bugReducer);
const store = legacy_createStore(bugReducer)

export default store;
