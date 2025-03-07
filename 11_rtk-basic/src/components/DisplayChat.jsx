import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

const DisplayChat = () => {
  const chats = useSelector((state) => state.chats);
  const chatEndRef = useRef(null);

  // Automatically scroll to bottom on new messages
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
      {chats.map((chat, index) => (
        <div key={index} className="p-3 bg-white rounded shadow">
          <div className="font-semibold text-gray-800">{chat.msg}</div>
          <div className="mt-1 text-gray-600">{chat.response}</div>
        </div>
      ))}
      <div ref={chatEndRef} />
    </div>
  );
};

export default DisplayChat;
