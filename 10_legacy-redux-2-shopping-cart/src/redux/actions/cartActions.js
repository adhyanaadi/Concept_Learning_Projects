// export const itemAdded = (category, id, description, quantity, price) => ({
//   type: "ITEM_ADDED",
//   payload: {
//     category: category,
//     id: id,
//     description: description,
//     quantity: quantity,
//     price: price
//   },
// });

// export const itemAdded = (item) => ({
//   type: "ITEM_ADDED",
//   payload: { ...item, quantity: 1 }, // ✅ Ensure quantity is initialized
// });
export const itemAdded = (item) => ({
  type: "ITEM_ADDED",
  payload: { ...item, quantity: item.quantity ?? 1 }, // Preserve quantity if present
});



// export const itemRemoved = (item) =>({
//     type:"ITEM_REMOVED",
//     payload:{item}
//     // payload:{
//     //     category: category,
//     //     id: id,
//     //     quantity: quantity
//     // }
// })
export const itemRemoved = (category, id) => ({
  type: "ITEM_REMOVED",
  payload: { category, id }, // Pass only category and id, not entire item
});