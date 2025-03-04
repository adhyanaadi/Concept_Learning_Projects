export const itemAdded = (category, id, description, quantity, price) => ({
  type: "ITEM_ADDED",
  payload: {
    category: category,
    id: id,
    description: description,
    quantity: quantity,
    price: price
  },
});

export const itemRemoved = (category, id, quantity) =>({
    type:"ITEM_REMOVED",
    payload:{
        category: category,
        id: id,
        quantity: quantity
    }
})
