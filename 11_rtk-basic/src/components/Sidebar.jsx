import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const questions = useSelector((state) => state.chats);

  return (
    <div className="w-64 p-4 bg-gray-200 h-full border-r border-gray-300 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Previous Chats</h2>
      <div className="space-y-2">
        {questions.map((q, index) => (
          <div
            key={index}
            className="p-2 bg-white rounded shadow cursor-pointer hover:bg-gray-100"
          >
            <p className="text-gray-700">{q.msg}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
