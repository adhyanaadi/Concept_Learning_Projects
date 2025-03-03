// const action1 = {
//     type: "bugAdded",
//     payload: {
//         description: ""
//     }
// }

// const action2 = {
//     type: "bugDeleted",
//     payload: {
//         description: ""
//     }
// }

// const action3 = {
//     type: "bugSolved",
//     payload: {
//         description: ""
//     }
// }

export const bugAdded = (description)=>({
    type: "BUG_ADDED",
    payload: {description}
})

export const bugRemoved = (id)=>({
    type: "BUG_REMOVED",
    payload: {id}
})
export const bugSolved = (id)=>({
    type: "BUG_SOLVED",
    payload: {id}
})