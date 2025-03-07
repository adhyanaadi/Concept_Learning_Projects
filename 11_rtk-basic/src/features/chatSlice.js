import { nanoid, createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
    try {
      const storedChats = localStorage.getItem("chats");
      return storedChats ? JSON.parse(storedChats) : []; // Ensure fallback to an empty array
    } catch (error) {
      console.error("Error parsing localStorage chats:", error);
      return []; // In case of corrupted JSON, return an empty array
    }
  };
const initialState = {
  chats: loadFromLocalStorage(),
};
export const chatSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    storeChat: (state, action) => {
      const chat = {
        id: nanoid(),
        msg: action.payload.msg,
        response: action.payload.response,
      };
      state.chats.push(chat);
      localStorage.setItem("chats", JSON.stringify(state.chats));
    },
  },
});

export const { storeChat } = chatSlice.actions;
export default chatSlice.reducer;
