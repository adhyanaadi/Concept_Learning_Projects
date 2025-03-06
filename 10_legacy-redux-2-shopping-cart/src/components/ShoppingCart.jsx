// useEffect(() => {
//   for (let index = 0; index < cartItems.length; index++) {
//     setBillvalue(() => billValue + cartItems[index].price);
//   }
// }, [cartItems]);

// State updates asynchronously

// setBillvalue(() => billValue + cartItems[index].price); does not immediately update billValue.
// Each loop iteration refers to the old billValue instead of accumulating correctly.
// Incorrectly updating state inside a loop

// setBillvalue() is called multiple times inside the loop, but React batches state updates.
// Instead of incrementally updating, you should calculate the total first and set it once.
import React, { useEffect, useState } from "react";
import store from "../redux/store/store";
import { itemAdded, itemRemoved } from "../redux/actions/cartActions";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState(store.getState());
  const [billValue, setBillValue] = useState(0);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCartItems(store.getState());
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setBillValue(total);
  }, [cartItems]);

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">No items in cart</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="flex justify-between items-center p-3 border-b">
            <p>{item.description}</p>
            <p>${item.price.toFixed(2)}</p>
            <p>Qty: {item.quantity}</p>
            <div className="space-x-2">
              <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={() => store.dispatch(itemAdded(item))}>+</button>
              <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => store.dispatch(itemRemoved(item.category, item.id))}>-</button>
            </div>
          </div>
        ))
      )}
      <h3 className="text-xl font-bold mt-4">Total: ${billValue.toFixed(2)}</h3>
    </div>
  );
};

export default ShoppingCart;
