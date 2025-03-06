// All local storage calls are synchronous.

import { legacy_createStore } from "redux";
import cartReducer from "../reducers/cartReducers";

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.error("Could not load state:", error);
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartState", serializedState);
  } catch (error) {
    console.error("Could not save state:", error);
  }
};

// Create store with persisted state
const persistedState = loadState();
const store = legacy_createStore(cartReducer, persistedState);

// Subscribe to store updates and save to localStorage
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
