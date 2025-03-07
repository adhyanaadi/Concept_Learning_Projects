import React, { useState } from "react";
import { genAIResponse } from "../utils/llm";
import { storeChat } from "../features/chatSlice";
import { useDispatch } from "react-redux";

const NewChat = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const aiReply = await genAIResponse(message);
    setResponse(aiReply);
    dispatch(
      storeChat({
        msg: message,
        response: aiReply,
      })
    );
    setMessage("");
  };

  return (
    <div className="p-4 border-t border-gray-300">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          placeholder="Ask something..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md"
        >
          Ask
        </button>
      </form>
      {response && (
        <div className="mt-2 p-2 bg-gray-100 rounded">
          {response}
        </div>
      )}
    </div>
  );
};

export default NewChat;
