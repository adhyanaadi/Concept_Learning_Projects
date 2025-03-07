import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./src/features/chatSlice";

export const store = configureStore({
  reducer: chatReducer,
});
