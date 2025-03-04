import { itemAdded, itemRemoved } from "../actions/cartActions";

const initialState = [];

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ITEM_ADDED": {
      const { category, id, description, price } = action.payload;

      const existingItem = state.find(
        (item) => item.category === category && item.id === id
      );

      if (existingItem) {
        return state.map((item) =>
          item.category === category && item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...state,
          {
            category,
            id,
            description,
            price,
            quantity: 1,
          },
        ];
      }
    }

    case "ITEM_REMOVED": {
      const { category, id } = action.payload;

      return state
        .map((item) =>
          item.category === category && item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); 
    }

    default:
      return state;
  }
}

export default cartReducer;
